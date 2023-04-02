import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        padding: { sx: "0", sm: "50px 60px" },
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "secondary.main",
        }}
        className="App"
      >
        <Navigation />
        <Outlet />
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
