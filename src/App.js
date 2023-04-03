import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    padding: { sx: "0", sm: "50px 60px" },
    height: "100vh",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "secondary.main",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container className={classes.container}>
        <Navigation />
        <Outlet />
      </Grid>
      <Footer />
    </Box>
  );
}

export default App;
