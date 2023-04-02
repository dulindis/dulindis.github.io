import React from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
// import { Link } from "react-router-dom";

const SocialFollow = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 0, sm: 3 }}
      justifyContent="center"
      sx={{ mt: { xs: 1, md: 3 }, fontSize: { xs: "32px", md: "30px" } }}
    >
      <Link
        href="#"
        onClick={(e) => {
          window.location.href = "mailto:paulinaokulska@gmail.com ";
          e.preventDefault();
        }}
      >
        <FiMail />
      </Link>
      <Link href="https://github.com/dulindis" underline="none">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/paulina-okulska/">
        <BsLinkedin />
      </Link>{" "}
      <Link href="https://www.discordapp.com/users/675626747529789451/">
        <FaDiscord />
      </Link>
    </Stack>
  );
};

export default SocialFollow;
