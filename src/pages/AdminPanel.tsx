import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AdminPanel = () => {
  const auth = useAuth();

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <section className="min-h-[calc(100vh-120px)] px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-lg">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Admin panel</h1>
            <p className="mt-2 text-sm text-slate-500">
              Protected admin area available only to authenticated users.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-600">Signed in as</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {auth.user?.email ?? "Unknown user"}
            </p>
            <p className="mt-4 text-sm text-slate-500 break-words">
              Access token:{" "}
              <span className="font-mono text-xs text-slate-700">
                {auth.jwt ?? "Not available"}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSignOut}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Logout
            </button>
            <Link
              to="/"
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
