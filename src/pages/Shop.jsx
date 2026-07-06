import { Link } from "react-router-dom";
import glazes from "../data/glazes";
import GlazeSwatch from "../components/GlazeSwatch";
import FadeInUp from "../components/FadeInUp";

const forms = [
  "Desk lamps",
  "Vase lamps",
  "Mushroom tealights",
  "Rice bowls",
  "Pasta bowls",
  "Mugs",
  "Lidded jars",
];

function GlazeCard({ glaze }) {
  return (
    <div className="group">
      <GlazeSwatch glaze={glaze} />
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#2C2C2C]/40">
          {glaze.color}
        </p>
        <h3 className="mt-1 text-xl font-light tracking-wide">
          {glaze.name}
          <span className="text-[#2C2C2C]/40"> — {glaze.gloss}</span>
        </h3>
        <p className="mt-3 text-sm font-light leading-[1.75] text-[#2C2C2C]/70">
          {glaze.story}
        </p>
        <Link
          to={`/contact?piece=${encodeURIComponent(`${glaze.name} (${glaze.color})`)}`}
          className="mt-3 inline-block text-sm font-light tracking-wide hover:opacity-60 transition-opacity"
        >
          Email about this glaze &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Intro */}
        <div className="max-w-[640px] mb-20">
          <FadeInUp>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
              Serie Taína
            </p>
          </FadeInUp>
          <FadeInUp>
            <h1 className="mb-6 text-3xl md:text-4xl font-light tracking-wide">
              Five glazes, thrown in black clay
            </h1>
          </FadeInUp>
          <FadeInUp>
            <p className="mb-4 font-light leading-[1.8] text-[#2C2C2C]/70">
              Serie Taína names each glaze for a word or figure from Taíno
              language and cosmology &mdash; the Indigenous people of Borikén
              (Puerto Rico). It&rsquo;s a nod to my family&rsquo;s land in
              Utuado, the mountain region that became one of the last
              strongholds of Taíno resistance after 1511, and home to Caguana,
              the largest Indigenous ceremonial site in the Caribbean.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] text-[#2C2C2C]/70">
              Nothing&rsquo;s for sale through the site just yet &mdash; these
              are the first results out of the kiln. If a glaze or a form calls
              to you, email me and we&rsquo;ll sort it out over Venmo.
            </p>
          </FadeInUp>
        </div>

        {/* Glazes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {glazes.map((glaze) => (
            <FadeInUp key={glaze.id}>
              <GlazeCard glaze={glaze} />
            </FadeInUp>
          ))}
        </div>

        {/* Forms */}
        <div className="mt-24 border-t border-[#E0DBD3] pt-16 max-w-[640px]">
          <FadeInUp>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
              Forms in the series
            </p>
          </FadeInUp>
          <FadeInUp>
            <h2 className="mb-6 text-2xl font-light tracking-wide">
              What&rsquo;s being made
            </h2>
          </FadeInUp>
          <FadeInUp>
            <p className="font-light leading-[1.8] text-[#2C2C2C]/70">
              Each form is thrown in black clay and finished in the Taíno
              palette.
            </p>
          </FadeInUp>
          <FadeInUp>
            <p className="mb-8 font-light leading-[1.8] text-[#2C2C2C]/70">
              Launching soon &mdash; email to reserve one in the glaze
              you&rsquo;re after.
            </p>
          </FadeInUp>
          <FadeInUp>
            <ul className="flex flex-wrap gap-3">
              {forms.map((form) => (
                <li
                  key={form}
                  className="border border-[#E0DBD3] px-4 py-2 text-sm font-light tracking-wide"
                >
                  {form}
                </li>
              ))}
            </ul>
          </FadeInUp>
          <FadeInUp>
            <Link
              to="/contact?piece=Serie%20Taína"
              className="mt-10 inline-block border border-[#2C2C2C] px-6 py-3 text-sm tracking-wide hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-colors"
            >
              Email about the collection
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
