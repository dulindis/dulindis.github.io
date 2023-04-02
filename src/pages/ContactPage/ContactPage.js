import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import styled from "styled-components";

import SocialFollow from "../../components/SocialFollow/SocialFollow";

const ContactPage = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: `url("/assets/organicheartai.svg")  100% -5%   no-repeat`,
          backgroundSize: { xs: "auto 30%", sm: "auto 70%" },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,1), rgba(255,255,255,0.8) 85%, rgba(255,255,255,0)) 100%",
            pt: 1,
            pb: 1,
          }}
        >
          <Stack sx={{ margin: 2 }}>
            <Typography variant="h2" component="h3" >
              Contact
            </Typography>
            <Typography
              sx={{ typography: { xs: "body2", sm: "subtitle1" } }}
              component="h4"
            >
              If you are interested in cooperation, you can contact me here:
            </Typography>

            <SocialFollow />
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};

export default ContactPage;
