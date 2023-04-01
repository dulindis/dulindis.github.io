import { GiPerson } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { BiHomeAlt2 } from "react-icons/bi";

export const mainNabarObjects = [
    {
    id: 0,
    icon: <BiHomeAlt2 />,
    label: "Home",
    route: "/",
  },
  {
    id: 1,
    icon: <GiPerson />,
    label: "About Me",
    route: "about",
  },
  {
    id: 2,
    icon: <HiOutlineCode />,
    label: "Projects",
    route: "projects",
  },
  {
    id: 3,
    icon: <FiMail />,
    label: "Contact",
    route: "contact",
  },

];
