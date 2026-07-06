// Serie Taína — five glazes, launched over black clay.
//
// Each glaze is named for a word or figure from Taíno language and
// cosmology. Base recipe (shared by all five):
//   Neph Sy 60 · Strontium 25 · Silica 9 · EPK 4 · Li 2 · Copper 4 · Bent 2.5
//   + 2% variable oxide (below)
//
// TEST-TILE PHOTOS: drop them into src/assets/glaze-tiles/ named
//   carey.jpg · casabe.jpg · atabey.jpg · conuco.jpg · yuquiyu.jpg
// and they appear automatically on the Shop and Gallery. Until a file
// exists, the card shows a tinted placeholder in the glaze's color.

const tileImages = import.meta.glob(
  "../assets/glaze-tiles/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}",
  { eager: true, import: "default" }
);

function tile(slug) {
  const hit = Object.entries(tileImages).find(([path]) =>
    path.toLowerCase().includes(`/${slug}.`)
  );
  return hit ? hit[1] : null;
}

export const baseRecipe =
  "Neph Sy 60 · Strontium 25 · Silica 9 · EPK 4 · Li 2 · Copper 4 · Bent 2.5 · +2% oxide";

const glazes = [
  {
    id: "carey",
    name: "Carey",
    code: "Ti-2",
    color: "Turquoise",
    oxide: "Titanium dioxide 2%",
    gloss: "the hawksbill sea turtle",
    story:
      "A Taíno word still alive in Puerto Rican Spanish today, alongside huracán, hamaca, and canoa. In myth the Turtle Woman is the ancestral mother, from whom the Taíno people were born. This shifting turquoise recalls the shallow reef waters where carey still feed.",
    image: tile("carey"),
    tone: ["#1f8f8c", "#4fc2bd"],
    sheen: "rgba(185, 240, 235, 0.5)",
  },
  {
    id: "casabe",
    name: "Casabe",
    code: "Ø",
    color: "White",
    oxide: "Base only — no added oxide",
    gloss: "cassava flatbread",
    story:
      "The flatbread the Taíno made from bitter yuca — their staple, and one of their most enduring gifts to Caribbean cooking. Pale and elemental, it's the base glaze with nothing added: every other glaze in the series is built on top of it, the way so much of the island's food is built on casabe.",
    image: tile("casabe"),
    tone: ["#d7cfbf", "#efe9dc"],
    sheen: "rgba(255, 255, 255, 0.55)",
  },
  {
    id: "atabey",
    name: "Atabey",
    code: "Co-2",
    color: "Cobalt Blue",
    oxide: "Cobalt oxide 2%",
    gloss: "supreme mother goddess of the waters",
    story:
      "Self-created from the primordial universe — goddess of fresh water, the earth, fertility, and the moon. Rivers, springs, and rain belong to her, and her image appears among the petroglyphs at Caguana. The deepest blue in the series is hers: night water under a full moon.",
    image: tile("atabey"),
    tone: ["#33409f", "#5a6ad4"],
    sheen: "rgba(150, 170, 240, 0.5)",
  },
  {
    id: "conuco",
    name: "Conuco",
    code: "Ni-2",
    color: "Brown",
    oxide: "Nickel oxide 2%",
    gloss: "the cultivated earth",
    story:
      "The Taíno farm plot, worked into raised earthen mounds called montones that guarded the yuca and sweet potato from erosion and flood. It stands for cultivation and sustenance — the nickel brown of earth, mounded and ready.",
    image: tile("conuco"),
    tone: ["#8a6a4b", "#b3906a"],
    sheen: "rgba(220, 190, 150, 0.5)",
  },
  {
    id: "yuquiyu",
    name: "Yuquiyú",
    code: "Cu-2",
    color: "Green",
    oxide: "Copper oxide 2%",
    gloss: "spirit of the yuca & the sea",
    story:
      "From Yúcahu, the supreme spirit born of Atabey, said to dwell on the cloud-covered peak the Taíno called Yuké — a name the Spanish corrupted into El Yunque. This copper green is the canopy of his mountain.",
    image: tile("yuquiyu"),
    tone: ["#8aa87a", "#b7cda4"],
    sheen: "rgba(220, 235, 200, 0.5)",
  },
];

export default glazes;
