import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";

import SocialFollow from "../../components/SocialFollow/SocialFollow";
import { StyledBox, StyledGradientBox } from "./styles";
import Typography from "@mui/material/Typography";

const ContactPage = () => {
  return (
    <Grid item xs={{ width: "100%" }}>
      <StyledBox>
        <StyledGradientBox>
          <Stack sx={{ margin: 2 }}>
            <Typography variant="h3" component="h1" sx={{ p: 2 }}>
              Contact
            </Typography>
            <Typography
              sx={{ typography: { xs: "body2", sm: "subtitle1" }, pb: 2 }}
              component="h2"
            >
              Interested in cooperation? Contact me here:
            </Typography>
            <SocialFollow />
          </Stack>
        </StyledGradientBox>
      </StyledBox>
    </Grid>
  );
};

export default ContactPage;
