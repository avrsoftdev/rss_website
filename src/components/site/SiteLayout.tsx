import { Outlet } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { PromoBanner } from "./PromoBanner";

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
