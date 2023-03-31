import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const style = {
  height: "100%",
  // maxWidth:"70%",
  // maxWidth: 800, //?
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
                "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.9), rgba(255,255,255,0))",
              pt: 3,
              pb: 3,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Paulina Okulska
            </Typography>
            <Typography variant="subtitle1">
              Aspiring software developer.
            </Typography>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.9), rgba(255,255,255,0))",
              pt: 3,
              pb: 3,
            }}
          >
            {/* <Box sx={{ maxWidth: "80vw", margin:"0 auto"}}> */}
            <Stack sx={{ alignItems: "center", ml:6, mr:6 }}>
              <Typography variant="p">
                Exploring secrets of React, Node and C#. Currently excited about
                .NET. I am eager to join an ambitious team as a junior developer
                where I could use my skills in coding and troubleshooting in
                order to contribute to interesting projects.
              </Typography>
              <Typography variant="p">
                Approaching challenges with enthusiasm and curiosity. My strong
                communication and language skills, attenion to graphic design,
                efficient learning, attention to detail and solution-oriented
                attitude would make me a valuable asset to your team.
              </Typography>
            </Stack>

            {/* </Box> */}
          </Box>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default AboutPage;
