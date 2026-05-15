import { Outlet } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
