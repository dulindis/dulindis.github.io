import React from "react";

import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import Typography from "@mui/material/Typography";

import {
  StyledGrid,
  StyledBox,
  StyledHeaderBox,
  StyledBodyBox,
  StyledInfoBox,
  StyledParagraph,
  StyledIconStack,
  StyledTypographyBackground,
} from "./styles";

import Box from "@mui/material/Box";

const AboutPage = () => {
  return (
    <React.Fragment>
      <StyledGrid item xs={12}>
        <StyledBox>
          <StyledTypographyBackground>
            <Box>
              <Typography
                sx={{ typography: "h3", pb: 2, pt: 3 }}
                component="h1"
              >
                Paulina Okulska
              </Typography>
              <Typography
                sx={{ typography: { sm: "h4", xs: "subtitle1" }, pb: 4 }}
                component="h2"
              >
                Aspiring software developer.
              </Typography>
            </Box>
            <Box pb={3}>
              <StyledIconStack
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <StyledInfoBox>
                  <StyledParagraph>
                    Exploring secrets of React, Node and C#. Currently excited
                    about .NET. I am eager to join an ambitious team as a junior
                    developer, where I could use my skills in coding and
                    troubleshooting in order to contribute to interesting
                    projects.
                  </StyledParagraph>
                  <StyledParagraph>
                    I'm approaching challenges with enthusiasm and curiosity. My
                    strong communication and language skills, attention to
                    graphic design, efficient learning, and solution-oriented
                    attitude will make me a valuable asset to your team.
                  </StyledParagraph>
                </StyledInfoBox>
              </StyledIconStack>
              <StyledIconStack
                direction="row"
                spacing={3}
                justifyContent="center"
              >
                <SiReact />
                <SiJavascript />
                <FaNodeJs />
                <TbBrandCSharp />
                {/* <SiDotnet /> */}
              </StyledIconStack>
            </Box>
          </StyledTypographyBackground>
        </StyledBox>
      </StyledGrid>
    </React.Fragment>
  );
};

export default AboutPage;
