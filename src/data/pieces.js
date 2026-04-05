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
    name: "Faceted Lidded Jar No. 1",
    description:
      "Wheel-thrown stoneware with hand-carved faceted panels. The first piece in a new series exploring sharp geometry on round forms.",
    image: studioJar,
    imageLarge: studioJar,
    status: "available",
  },
  {
    id: 2,
    name: "Studio Forms — Group Study",
    description:
      "Faceted vessels in progress. Multiple forms exploring different facet depths and angles on the same thrown profile.",
    image: studioGroup,
    imageLarge: studioGroup,
    status: "inquire",
  },
  {
    id: 3,
    name: "Faceted Forms — Bird's Eye",
    description:
      "Four faceted pieces seen from above. The carving reads completely differently from this angle — all planes, no curves.",
    image: studioBirdsEye,
    imageLarge: studioBirdsEye,
    status: "available",
  },
  {
    id: 4,
    name: "Kyoto Vase — Tall Form",
    description:
      "Thrown in a Kyoto studio. Clean lines, no carving — just the clay and the wheel. Waiting on a bronze glaze.",
    image: kyotoVase,
    imageLarge: kyotoVase,
    status: "sold",
  },
  {
    id: 5,
    name: "Kyoto Tea Bowl",
    description:
      "Open bowl thrown in Japan. Wide rim, gentle taper. The glaze ticket is still attached — choosing between white and bronze.",
    image: kyotoBowl,
    imageLarge: kyotoBowl,
    status: "inquire",
  },
  {
    id: 6,
    name: "Kyoto Vase — On the Wheel",
    description:
      "Freshly thrown, still wet. Round belly, narrow neck. This one stayed smooth — no faceting, just the wheel's rhythm.",
    image: kyotoWheel,
    imageLarge: kyotoWheel,
    status: "available",
  },
];

export { heroBowl };
export default pieces;
