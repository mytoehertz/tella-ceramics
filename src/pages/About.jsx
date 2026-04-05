import FadeInUp from "../components/FadeInUp";
import studioGroup from "../assets/Studio2.jpg";

export default function About() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <FadeInUp>
            <img
              src={studioGroup}
              alt="The artist at work"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </FadeInUp>

          {/* Bio */}
          <FadeInUp>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-light tracking-wide mb-10">
                About
              </h1>

              <p className="font-light leading-[1.8] mb-6">
                I grew up in Caguana, Puerto Rico, anchored by my
                people&rsquo;s ties to the land and the quiet magic of my
                mother&rsquo;s ceramics studio. Today, working out of New York,
                I have rekindled my love for clay as my truest form of
                self-expression.
              </p>

              <p className="font-light leading-[1.8] mb-6">
                My work is an exploration of light, new clays, and the beauty of
                the broken. Time spent studying techniques in Japan completely
                reframed how I want my art to exist in the world. I don&rsquo;t
                make perfect pots. I make pieces that celebrate the uniqueness
                and imperfection that defines us all&mdash;from kintsugi repairs
                to a new series of illuminated mushroom desk lamps.
              </p>

              <p className="font-light leading-[1.8] mb-10">
                There is more on the horizon, stay tuned if you want to join me
                on this journey!
              </p>

              <div className="border-t border-[#E0DBD3] pt-8 flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/tellaceramics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:opacity-60 transition-opacity"
                >
                  Instagram &mdash; @tellaceramics
                </a>
                <p className="text-sm font-light text-[#2C2C2C]/60">
                  Commissions open
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
