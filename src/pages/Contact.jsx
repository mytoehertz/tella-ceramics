import FadeInUp from "../components/FadeInUp";

export default function Contact() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[560px] mx-auto">
        <FadeInUp>
          <h1 className="text-3xl font-light tracking-wide mb-4">
            Get in touch
          </h1>
          <p className="font-light text-[#2C2C2C]/60 mb-12">
            For commissions, purchases, or just to say hello.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-light mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-light mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2C2C2C] text-[#FAF7F2] py-3 text-sm tracking-wide font-light hover:bg-[#2C2C2C]/90 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>

          <div className="border-t border-[#E0DBD3] mt-12 pt-8">
            <p className="text-sm font-light mb-3">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/tellaceramics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                @tellaceramics
              </a>
            </p>
            <p className="text-sm font-light text-[#2C2C2C]/60">
              Purchases can be arranged via PayPal or Venmo &mdash; details on
              request.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
