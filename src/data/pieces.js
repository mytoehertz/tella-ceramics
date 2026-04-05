import studioJar from "../assets/Studio1.jpg";
import studioGroup from "../assets/Studio2.jpg";
import studioBirdsEye from "../assets/StudioJar.jpg";
import kyotoVase from "../assets/Kyoto1.jpg";
import kyotoBowl from "../assets/Kyoto2.jpg";
import kyotoWheel from "../assets/Kyoto3.jpg";
import heroBowl from "../assets/Hero.jpg";

const pieces = [
  {
    id: 1,
    name: "Tokyo Blue",
    description:
      "This bowl lives in my head rent-free. Blue turquoise glaze with these tiny sparkles that I've been obsessing over since Tokyo. Working with ClaySpace in Greenpoint now, trying to reverse-engineer something close. An ode to Japan, one test tile at a time.",
    image: studioJar,
    imageLarge: studioJar,
    status: "available",
  },
  {
    id: 2,
    name: "First Porcelain",
    description:
      "My first real porcelain projects — a faceted jar and a mushroom lamp broken into stalk and cap. Porcelain is a completely different animal. Thinner walls, less forgiveness.",
    image: studioGroup,
    imageLarge: studioGroup,
    status: "inquire",
  },
  {
    id: 3,
    name: "Lidded Jar — Light Study",
    description:
      "Playing with a lidded jar, but really playing with what the facets do to light. Every angle throws a different shadow. The lid creates this little conversation between the carved planes on top and the ones below.",
    image: studioBirdsEye,
    imageLarge: studioBirdsEye,
    status: "available",
  },
  {
    id: 4,
    name: "The One I Left in Kyoto",
    description:
      "Learned this technique in a Kyoto studio. Couldn't take it home — you can only ship two pieces per class, and I'd already used mine up. Still think about this one.",
    image: kyotoVase,
    imageLarge: kyotoVase,
    status: "sold",
  },
  {
    id: 5,
    name: "Rice Bowl",
    description:
      "A rice bowl I threw in Kyoto and actually got to bring home. Glazing it with a traditional earth tone — warm, grounded, the kind of color that makes food look better.",
    image: kyotoBowl,
    imageLarge: kyotoBowl,
    status: "sold",
  },
  {
    id: 6,
    name: "Kyoto Vase",
    description:
      "Going aquamarine on the glaze for this one. Round belly, narrow neck, that little flare at the lip. Once it's fired I'm testing it with a kintsugi kit I have at home — break it, repair it with gold, see what it becomes.",
    image: kyotoWheel,
    imageLarge: kyotoWheel,
    status: "available",
  },
];

export { heroBowl };
export default pieces;
