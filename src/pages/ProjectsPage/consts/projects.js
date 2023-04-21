import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";

const tagJS = {
  name: "JavaScript",
  icon: <SiJavascript />,
};
const tagReact = {
  name: "React",
  icon: <SiReact />,
};
const tagNodeJS = {
  name: "NodeJS",
  icon: <FaNodeJs />,
};
const tagCSharp = {
  name: "C#",
  icon: <TbBrandCSharp />,
};

const tagMui = {
  name: "Material UI",
  icon: <SiMui />,
};
const tagFirebase = {
  name: "Firebase",
  icon: <SiFirebase />,
};

const tagRavenDB = {
  name: "RavenDB",
  icon: "",
};

const tagMongoDB = {
  name: "MongoDB",
  icon: <SiMongodb />,
};

const tagExpress = {
  name: "Express",
  icon: <SiExpress />,
};

const tagStripe = {
  name: "Stripe",
  icon: <FaStripe />,
};
const tagPaypal = {
  name: "Paypal",
  icon: <FaCcPaypal />,
};

export const projects = [
  {
    id: 0,
    title: "DULIN DIS ART",
    description:
      "Artistic portfolio, React as client, NodeJS and Express on the backend. Firebase as a database.",
    projectImgs: [
      "https://i.imgur.com/UgX6zLv.gif",
      "https://i.imgur.com/KruWL8X.jpg",
    ],
    pageUrl: "https://dulindis.onrender.com/",
    demoUrl: "",
    repoUrl: "https://github.com/dulindis/Dulin-Dis-Art-Portfolio-Website",
    tags: [tagJS, tagReact, tagNodeJS, tagExpress, tagFirebase],
  },
  {
    id: 1,
    title: "KEBABOMB",
    description:
      "E-commerce web application. React wih MUI,  Node wih Express, MongoDB as a database. Stripe and Paypal payments.",
    projectImgs: ["https://i.imgur.com/95Ux23Z.gif"],
    demoUrl: "",
    repoUrl: "https://github.com/dulindis/Kebab-Page",
    tags: [
      tagMongoDB,
      tagMui,
      tagReact,
      tagExpress,
      tagNodeJS,
      tagStripe,
      tagPaypal,
    ],
  },
  {
    id: 2,
    title: "BANK APP",
    description: "Console application in C# with database setup in RavenDB.",
    projectImgs: ["https://i.imgur.com/7ivqClw.gif"],
    demoUrl: "",
    repoUrl: "https://github.com/dulindis/Bank-Application",
    tags: [tagCSharp, tagRavenDB],
  },
];
