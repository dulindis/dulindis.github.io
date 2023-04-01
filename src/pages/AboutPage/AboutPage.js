import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";

const style = {
  height: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url("/assets/technical-heart.svg")  100% 0%   no-repeat`,
  // backgroundSize: "contain",
  backgroundSize: " auto 50%",
};

const AboutPage = () => {
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sx={{
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={style}>
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1), rgba(255,255,255,0.7) 85%, rgba(255,255,255,0)) 100%",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h2" component="h3" gutterBottom>
              Paulina Okulska
            </Typography>
            <Typography sx={{ typography: { sm: 'h3', xs: 'h5' } }} >Aspiring software developer.</Typography>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1), rgba(255,255,255,0.7) 85%, rgba(255,255,255,0)) 100%",
              pt: 3,
              pb: 3,
            }}
          >
            <Stack
              justifyContent="center"
              alignContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  width: { xs: "90%", md: "60%" },
                  mb:2
                }}
              >
                <Typography variant="p" >
                  Exploring secrets of React, Node and C#. Currently excited
                  about .NET. I am eager to join an ambitious team as a junior
                  developer where I could use my skills in coding and
                  troubleshooting in order to contribute to interesting
                  projects.
                </Typography>
                <Typography variant="p" >
                  Approaching challenges with enthusiasm and curiosity. My
                  strong communication and language skills, attenion to graphic
                  design, efficient learning, attention to detail and
                  solution-oriented attitude would make me a valuable asset to
                  your team.
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              sx={{
                mt: { xs: 1, md: 3 },
                fontSize: { xs: "32px", md: "30px" },
              }}
            >
              <SiReact />
              <SiJavascript />
              <FaNodeJs />
              <TbBrandCSharp />
              <SiDotnet />
            </Stack>
          </Box>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default AboutPage;