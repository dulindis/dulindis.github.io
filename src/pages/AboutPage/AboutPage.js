import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";

import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";

const AboutPage = () => {
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: `url("/assets/technical-heart.svg")  100% 0%   no-repeat`,
            backgroundSize: " auto 50%",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,1), rgba(255,255,255,0.9) 90%, rgba(255,255,255,0)) 100%",
              pt: 3,
              pb: 3,
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Typography
              sx={{ typography: { sm: "h2", xs: "h3" } }}
              component="h3"
            >
              Paulina Okulska
            </Typography>
            <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
              Aspiring software developer.
            </Typography>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1), rgba(255,255,255,0.7) 85%, rgba(255,255,255,0)) 100%",
              pt: 2,
              pb: 3,
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Stack
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              sx={{ overflowY: "auto", overflowX: "hidden" }}
            >
              <Box
                sx={{
                  width: { xs: "85%", md: "60%" },
                  mb: 2,
                  p: 0,
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    Exploring secrets of React, Node and C#. Currently excited
                    about .NET. I am eager to join an ambitious team as a junior
                    developer, where I could use my skills in coding and
                    troubleshooting in order to contribute to interesting
                    projects.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    I'm approaching challenges with enthusiasm and curiosity. My
                    strong communication and language skills, attention to
                    graphic design, efficient learning, and solution-oriented
                    attitude will make me a valuable asset to your team.
                  </Typography>
                </Box>
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
              {/* <SiDotnet /> */}
            </Stack>
          </Box>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default AboutPage;
