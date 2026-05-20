import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  jwt: string | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const AUTH_STORAGE_KEY = "supabase_jwt";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [jwt, setJwt] = useState<string | null>(
    typeof window !== "undefined"
      ? localStorage.getItem(AUTH_STORAGE_KEY)
      : null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateSession = (nextSession: Session | null) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      const accessToken = nextSession?.access_token ?? null;
      setJwt(accessToken);
      if (typeof window !== "undefined") {
        if (accessToken) {
          localStorage.setItem(AUTH_STORAGE_KEY, accessToken);
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    };

    supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (sessionError) {
        setError(sessionError.message);
      }
      updateSession(data.session ?? null);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, sessionData) => {
        updateSession(sessionData ?? null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      },
    );

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return false;
    }

    if (data.session) {
      setSession(data.session);
      setUser(data.session.user);
      setJwt(data.session.access_token ?? null);
      if (typeof window !== "undefined" && data.session.access_token) {
        localStorage.setItem(AUTH_STORAGE_KEY, data.session.access_token);
      }
    }

    return true;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setJwt(null);
    setError(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  };

  const value = useMemo(
    () => ({ user, session, jwt, loading, error, signIn, signOut }),
    [user, session, jwt, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
