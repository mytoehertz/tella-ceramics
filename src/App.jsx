import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ShopComingSoon from "./pages/ShopComingSoon";

export default function App() {
  const location = useLocation();
  // The coming-soon page is a full-bleed black takeover — no cream chrome.
  const bare = location.pathname === "/shop";

  return (
    <div className="min-h-screen flex flex-col">
      {!bare && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<ShopComingSoon />} />
          <Route path="/shop/collection" element={<Shop />} />
        </Routes>
      </main>
      {!bare && <Footer />}
    </div>
  );
}
