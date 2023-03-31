import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import styled from "styled-components";
import CommonButton from "../../components/Layout/CommonButton/CommonButton";
// import { ReactComponent as OrganicHeartSVG } from "../../assets/organic-heart.svg";

// const Item = styled(Paper)(({ theme }) => ({
//   //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   //...theme.typography.body2,
//  // padding: theme.spacing(1),
//  // textAlign: 'center',
//  // color: theme.palette.text.secondary,
// }));

const ContactPage = () => {
  const style = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: `url("/assets/organicheartai.svg")  110% -5%   no-repeat`,
    // backgroundSize: "50% auto",
    backgroundSize: "auto 70% ",
  };

  return (
    <Grid item xs={12}>
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
            Contact
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            paulinaokulska@gmail.com
          </Typography>
          <Typography variant="subtitle1">
            <Link href="https://github.com/dulindis" underline="none">
              GITHUB
            </Link>
          </Typography>
          {/* <Typography variant="subtitle1">Lorem ipsum..</Typography> */}
        </Box>
      </div>
    </Grid>
  );
};

export default ContactPage;
