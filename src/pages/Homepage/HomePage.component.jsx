import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

// const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

// return <span>{`theme.breakpoints.up('sm'
const style = {
  height: "100%",
  width: "100%",
  // maxWidth: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url("/assets/pumpheartai.svg") no-repeat center`,
  backgroundSize: "contain",
};

const HomePage = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        padding: "3rem 3rem 0 3rem",
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
            {/* PAULINA OKULSKA */}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {/* "Let's put some life into your page..." */}
            LETS PUT SOME LIFE INTO YOUR APP..
          </Typography>
        </Box>
      </div>
    </Grid>
  );
};

export default HomePage;
