import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <FadeInUp>
            <h1
              className="text-[72px] md:text-[96px] font-extralight leading-none text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              てら
            </h1>
          </FadeInUp>
          <FadeInUp className="mt-6">
            <p className="text-base text-[#2C2C2C]/60">
              Exploring light, form, and the beauty of the broken. Made in New York.
            </p>
          </FadeInUp>
          <FadeInUp className="mt-8 flex items-center justify-center gap-6">
            <Link
              to="/gallery"
              className="border border-[#2C2C2C] px-6 py-3 text-sm tracking-wide hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-colors"
            >
              View Gallery
            </Link>
            <a
              href="https://www.instagram.com/tellaceramics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors"
            >
              @tellaceramics &uarr;
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-[#E0DBD3]" />
      </div>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-[600px] mx-auto">
          <FadeInUp>
            <p className="font-light leading-[1.8] mb-8">
              Tella Ceramics is where I document what happens when you come home
              from Japan and can&rsquo;t stop thinking about a glaze you fell in
              love with in Tokyo, techniques that rewired your hands in Kyoto,
              and a whole new way of approaching the wheel.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] mb-8">
              These first forms are all about faceted textures &mdash; finding
              the balance between the fluid motion of the wheel and the sharp,
              deliberate edges of a carving tool.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] mb-10">
              This is the studio journal. Experimental glazes, new forms, and
              the weird, beautiful inner world I&rsquo;m finally letting out
              through clay. Pull up a seat.
            </p>
          </FadeInUp>
          <FadeInUp>
            <Link
              to="/gallery"
              className="text-sm tracking-wide font-light hover:opacity-60 transition-opacity"
            >
              Enter the Gallery &rarr;
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
