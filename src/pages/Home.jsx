import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <FadeInUp>
            <h1 className="mb-4 flex justify-center">
              <img
                src="/tella-katakana.svg"
                alt="テラ — Tella Ceramics"
                className="w-[200px] md:w-[280px] h-auto"
              />
            </h1>
          </FadeInUp>
          <FadeInUp className="mt-6">
            <p className="text-base text-[#2C2C2C]/60">
              Exploring light, form, and the beauty of the broken. Made in New York.
            </p>
          </FadeInUp>
          <FadeInUp className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link
              to="/gallery"
              className="border border-[#2C2C2C] px-6 py-3 text-sm tracking-wide hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-colors"
            >
              View Gallery
            </Link>
            <Link
              to="/shop"
              className="bg-[#2C2C2C] text-[#FAF7F2] px-6 py-3 text-sm tracking-wide hover:bg-[#2C2C2C]/85 transition-colors"
            >
              Enter the Shop
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
              Tella Ceramics began with a glaze I couldn&rsquo;t stop thinking
              about in Tokyo and techniques that rewired my hands in Kyoto. Back
              in New York, I refined that obsession into a signature material:
              black clay, paired with custom glazes developed in my studio.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] mb-8">
              The result is a new series of lighting and dinnerware &mdash;
              pieces that balance the fluid motion of the wheel with sharp,
              deliberate edges. Sculptural fixtures that shape light. Dinnerware
              built for daily ritual. And the occasional small object, like a
              cone incense burner, made because it wanted to exist.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] mb-10">
              Everything here is available to purchase, and I take on custom
              commissions when the request fits the vision of the work.
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
