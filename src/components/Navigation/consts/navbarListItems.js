import { GiPerson } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

export const mainNabarObjects = [
  {
    id: 0,
    icon: <GiPerson />,
    label: "About Me",
    route: "about",
  },
  {
    id: 1,
    icon: <HiOutlineCode />,
    label: "Projects",
    route: "projects",
  },
  {
    id: 2,
    icon: <FiMail />,
    label: "Contact",
    route: "contact",
  },
];
