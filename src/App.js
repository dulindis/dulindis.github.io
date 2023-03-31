import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage.component";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <div className="page-wrapper">
      <Grid
        container      
        sx={{
          display: "flex",
          justifyContent:"space-evenly",
          backgroundColor: "#eee",
        }}
        className="App"
      >
        <Navigation />
        <Outlet />
      </Grid>
    </div>
  );
}

export default App;

// sx={{ pl: "350px", backgroundColor:"#FF7474", width:"100%", height:"100vh", m:"50px" }}
