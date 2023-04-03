import React from "react";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { StyledLink, StyledStack } from "./styles";

const SocialFollow = () => {
  return (
    <StyledStack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 0, sm: 3 }}
      justifyContent="center"
    >
      <StyledLink
        href="#"
        onClick={(e) => {
          window.location.href = "mailto:paulinaokulska@gmail.com ";
          e.preventDefault();
        }}
      >
        <FiMail />
      </StyledLink>
      <StyledLink href="https://github.com/dulindis">
        <FaGithub />
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/paulina-okulska/">
        <BsLinkedin />
      </StyledLink>
      <StyledLink href="https://www.discordapp.com/users/675626747529789451/">
        <FaDiscord />
      </StyledLink>
    </StyledStack>
  );
};

export default SocialFollow;
