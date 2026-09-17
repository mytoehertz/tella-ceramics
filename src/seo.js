// Everything search engines and AI assistants read about the site: page titles,
// descriptions, and structured data. The build prerenders each route in
// `routes` to static HTML with these tags (scripts/prerender.js), because most
// AI crawlers don't run JavaScript and would otherwise see an empty page.
//
// When adding a page: add it to App.jsx *and* here, or it won't be prerendered
// or listed in the sitemap.
import market from "./data/market";
import commission from "./data/commission";
import glazes from "./data/glazes";

export const SITE_URL = "https://tellaceramics.com";

// Netlify serves each prerendered page from a folder and 301s /about to
// /about/, so every URL we hand to crawlers uses the address it lands on.
export const pageUrl = (path) => `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;
const OG_IMAGE = `${SITE_URL}/og.jpg`;
const INSTAGRAM = "https://www.instagram.com/tellaceramics";

export const routes = {
  "/": {
    title: "Tella Ceramics — Handmade Ceramics in New York City",
    description:
      "Handmade ceramic lighting and dinnerware thrown in black clay with custom glazes. Serie Taína, rooted in Utuado, Puerto Rico. Commissions open in NYC.",
  },
  "/shop": {
    title: "Commission Handmade Ceramics — Tella Ceramics, New York",
    description: `Commission a custom handmade ceramic piece from Tella Ceramics in New York. A $${commission.deposit} deposit, credited toward your final price, starts the conversation.`,
  },
  "/shop/collection": {
    title: "Serie Taína Glazes — Tella Ceramics",
    description: `Five custom glazes named for Taíno words and figures — ${glazes.map((g) => g.name).join(", ")} — over black clay. Handmade in New York, rooted in Utuado, Puerto Rico.`,
  },
  "/gallery": {
    title: "Gallery — Tella Ceramics",
    description:
      "Handmade ceramics by Tella Ceramics in New York: Tokyo Blue and the Serie Taína glaze tests. The full gallery is being reshot in the new glazes.",
  },
  "/about": {
    title: "About — Tella Ceramics",
    description:
      "Juan Hernandez is the ceramic artist behind Tella Ceramics in New York — a practice rooted in Caguana, Puerto Rico and shaped by techniques studied in Kyoto. Light, black clay, and the beauty of the broken.",
  },
  "/contact": {
    title: "Contact — Tella Ceramics",
    description:
      "Contact Tella Ceramics about commissions, purchases, or handmade ceramics in New York City. Instagram @tellaceramics.",
  },
  "/privacy": {
    title: "Privacy Policy — Tella Ceramics",
    description:
      "How Tella Ceramics handles information from the contact form, mailing list, and commission deposits.",
  },
  "/commissions/thanks": {
    title: "Deposit Received — Tella Ceramics",
    description: "Your Tella Ceramics commission deposit was received.",
    noindex: true,
  },
};

const artist = {
  "@type": "Person",
  "@id": `${SITE_URL}/#artist`,
  name: "Juan Hernandez",
  jobTitle: "Ceramic artist",
  description:
    "Ceramic artist based in New York City, originally from Caguana, Utuado, Puerto Rico. Founder of Tella Ceramics, making wheel-thrown lighting and dinnerware in black clay with custom glazes.",
  url: pageUrl("/about"),
  image: OG_IMAGE,
  sameAs: [INSTAGRAM],
  worksFor: { "@id": `${SITE_URL}/#organization` },
  homeLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
  },
  knowsAbout: [
    "Ceramics",
    "Wheel throwing",
    "Glaze chemistry",
    "Kintsugi",
    "Taíno heritage",
  ],
};

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Tella Ceramics",
  alternateName: "テラ",
  url: SITE_URL,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  image: OG_IMAGE,
  description:
    "Handmade ceramics studio in New York City making lighting and dinnerware in black clay with custom glazes, including Serie Taína, named for the Taíno heritage of Utuado, Puerto Rico. Takes custom commissions.",
  founder: { "@id": `${SITE_URL}/#artist` },
  sameAs: [INSTAGRAM],
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: "New York City",
  knowsAbout: [
    "Handmade ceramics",
    "Wheel-thrown pottery",
    "Ceramic glazes",
    "Black clay stoneware",
    "Ceramic lamps",
    "Kintsugi",
    "Custom ceramic commissions",
  ],
};

function marketEvent() {
  return {
    "@type": "Event",
    name: `Tella Ceramics at the ${market.name}`,
    description: `Handmade Serie Taína ceramics from Tella Ceramics at the ${market.name}, ${market.where}.`,
    startDate: market.startsAt,
    endDate: market.endsAt,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: OG_IMAGE,
    location: {
      "@type": "Place",
      name: market.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 West 64th St",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10023",
        addressCountry: "US",
      },
    },
    performer: { "@id": `${SITE_URL}/#organization` },
    organizer: { "@type": "Organization", name: market.venue },
  };
}

// Structured data for one route, evaluated at build time.
export function structuredData(path, now = Date.now()) {
  const graph = [organization, artist];
  const marketUpcoming = now < new Date(market.endsAt).getTime();

  if (path === "/") {
    graph.push({
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Tella Ceramics",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    });
  }
  if ((path === "/" || path === "/shop") && marketUpcoming) graph.push(marketEvent());
  if (path === "/shop") {
    graph.push({
      "@type": "Product",
      name: `${commission.title} — Deposit`,
      description: commission.summary,
      brand: { "@id": `${SITE_URL}/#organization` },
      offers: {
        "@type": "Offer",
        price: commission.deposit.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl("/shop"),
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// The <head> tags for one route, as an HTML string.
export function headTags(path, now) {
  const page = routes[path];
  const url = pageUrl(path);
  const json = JSON.stringify(structuredData(path, now)).replace(/</g, "\\u003c");
  return [
    `<title>${escapeAttr(page.title)}</title>`,
    `<meta name="description" content="${escapeAttr(page.description)}" />`,
    page.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Tella Ceramics" />`,
    `<meta property="og:title" content="${escapeAttr(page.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n    ");
}

// A plain-language summary for AI assistants, served at /llms.txt.
export function llmsTxt(now = Date.now()) {
  const marketUpcoming = now < new Date(market.endsAt).getTime();
  return `# Tella Ceramics

> Handmade ceramics studio in New York City (テラ), run by ceramic artist Juan Hernandez. Wheel-thrown lighting and dinnerware in black clay with custom glazes. Rooted in Caguana, Utuado, Puerto Rico, and shaped by techniques studied in Kyoto and Tokyo. Custom commissions are open.

## Who
- Juan Hernandez, ceramic artist, New York City
- Raised in Caguana, Utuado, Puerto Rico; studied techniques in Kyoto and Tokyo
- Founder and maker behind Tella Ceramics

## What Tella Ceramics makes
- Ceramic lighting: mushroom desk lamps, vase lamps, mushroom tealights
- Dinnerware: rice bowls, pasta bowls, mugs, lidded jars
- Serie Taína: five custom glazes named for Taíno words and figures — ${glazes.map((g) => `${g.name} (${g.color})`).join(", ")} — thrown in black clay
- Kintsugi and other work celebrating imperfection

## Commissions
- Custom handmade ceramic pieces made to order in New York
- Starts with a $${commission.deposit} non-refundable deposit, credited in full toward the final price
- Design, final price, and timeline are agreed over email before work begins
- Start here: ${pageUrl("/shop")}
${marketUpcoming ? `
## Upcoming market
- ${market.name}, ${market.dateLabel}, ${market.hoursLabel}
- ${market.where} (${market.venue}, ${market.address})
` : ""}
## Pages
- [Home](${pageUrl("/")}): overview of the studio
- [Commissions](${pageUrl("/shop")}): commission a custom piece
- [Serie Taína glazes](${pageUrl("/shop/collection")}): the glazes and their Taíno names
- [Gallery](${pageUrl("/gallery")}): finished work and glaze tests
- [About](${pageUrl("/about")}): the artist and the practice
- [Contact](${pageUrl("/contact")}): commissions, purchases, questions

## Elsewhere
- Instagram: ${INSTAGRAM} (@tellaceramics)
`;
}
