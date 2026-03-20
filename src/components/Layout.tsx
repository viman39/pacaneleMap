import { Outlet } from "react-router-dom";
import InfoPanel from "./InfoPanel";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <InfoPanel />
      <Outlet />
      <Footer />
    </main>
  );
};
