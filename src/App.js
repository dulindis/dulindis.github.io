import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="page-wrapper">
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
    </div>
  );
}

export default App;
