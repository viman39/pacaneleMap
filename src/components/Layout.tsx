import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Outlet />
      <Footer />
    </main>
  );
};
