import { useEffect, useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type LocationState = {
  from?: {
    pathname: string;
  };
};

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!auth.loading && auth.user) {
      navigate("/admin-panel", { replace: true });
    }
  }, [auth.loading, auth.user, navigate]);

  const from =
    (location.state as LocationState)?.from?.pathname || "/admin-panel";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await auth.signIn(email.trim(), password);
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900">Login</h1>
        <p className="mt-2 text-sm text-slate-500">
          Use your Supabase credentials to access the admin panel.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              required
            />
          </div>

          {auth.error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {auth.error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={auth.loading}
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {auth.loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-500">
          Back to{" "}
          <Link className="text-slate-900 underline" to="/">
            home
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
