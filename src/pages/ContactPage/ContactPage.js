import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import styled from "styled-components";

import SocialFollow from "../../components/SocialFollow/SocialFollow";

// const Item = styled(Paper)(({ theme }) => ({
//   //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   //...theme.typography.body2,
//  // padding: theme.spacing(1),
//  // textAlign: 'center',
//  // color: theme.palette.text.secondary,
// }));

const ContactPage = () => {
  // const style = {
  //   height: "100%",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   background: `url("/assets/organicheartai.svg")  100% -5%   no-repeat`,
  //   // backgroundSize: "50% auto",
  //   backgroundSize: "auto 70% ",
  //   // backgroundSize: { xs: "70% auto", md: "auto 70% " },
  // };

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
          // backgroundSize: "auto 70% ",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 10%, rgba(255,255,255,1), rgba(255,255,255,0.8) 85%, rgba(255,255,255,0)) 100%",
            pt: 3,
            pb: 3,
          }}
        >
          <Stack sx={{ margin: 2 }}>
            <Typography variant="h2" component="h3" gutterBottom>
              Contact
            </Typography>
            <Typography
              sx={{ typography: { xs: "subtitle1", sm: "h4" } }}
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
