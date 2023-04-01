import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
import React from "react";

// const style = {
//   height: "100%",
//   width: "100%",
//   // maxWidth: "100px",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   background: `url("/assets/pumpheartai.svg") no-repeat center`,
//   backgroundSize: { sx: "cover", sm: "contain" },
// };

const HomePage = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: "flex",
        justifyContent: "center",
        // padding: { xs: "1rem 0 0 0", sm: "3rem 1rem 0 1rem" },
        // padding:{xs: "1rem 0 0 0"}
        padding: { sm: "1rem 0 0 0", md: "3rem 1rem 0 1rem" },
        // overflowY: "auto",
        // overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: `url("/assets/pumpheartai.svg") no-repeat center`,
          backgroundSize: { xs: "cover", sm: "contain" },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1), rgba(255,255,255,0.7) 85%, rgba(255,255,255,0)) 100%",
            pt: 3,
            pb: 3,
            color: "#222",
          }}
        >
          <Typography
            sx={{ typography: { sm: "h3", xs: "h5" } }}
            component="h2"
            gutterBottom
          >
            "Let's put some life into your app..."
            {/* LET'S PUT SOME LIFE INTO YOUR APP.. */}
          </Typography>
          <Typography variant="h6" component="h1" gutterBottom>
            {/* Paulina Okulska */}
            {/* PAULINA OKULSKA */}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomePage;
