import FadeInUp from "../components/FadeInUp";

export default function About() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <FadeInUp>
            <img
              src="https://picsum.photos/700/900?grayscale"
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
                I&rsquo;m a ceramicist working out of New York, currently
                obsessed with what happens when you push wheel-thrown forms into
                something harder-edged and more deliberate.
              </p>

              <p className="font-light leading-[1.8] mb-6">
                A trip to Japan changed how I work. I came back with a head full
                of glazes from Tokyo, muscle memory from studios in Kyoto, and a
                new approach to the wheel that I&rsquo;m still unpacking.
              </p>

              <p className="font-light leading-[1.8] mb-6">
                Right now I&rsquo;m exploring faceted surface carving &mdash;
                the tension between the roundness of a thrown form and the flat,
                angular planes a carving tool leaves behind. And separately, a
                series of porcelain mushroom lamps that started as a side
                experiment and won&rsquo;t let me go.
              </p>

              <p className="font-light leading-[1.8] mb-10">
                This site is a studio journal. Everything here is either
                available or was. If something catches your eye, reach out.
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
