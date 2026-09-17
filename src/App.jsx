import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./seo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Collection from "./pages/Collection";
import CommissionThanks from "./pages/CommissionThanks";
import Privacy from "./pages/Privacy";
import MarketPopup from "./components/MarketPopup";

export default function App() {
  const { pathname } = useLocation();

  // Prerendered HTML carries each page's title; keep the tab title right as
  // visitors move between pages without a reload.
  useEffect(() => {
    const page = routes[pathname.replace(/\/+$/, "") || "/"];
    if (page) document.title = page.title;
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/collection" element={<Collection />} />
          <Route path="/commissions/thanks" element={<CommissionThanks />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <MarketPopup />
    </div>
  );
}
