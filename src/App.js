import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { StyledBox, StyledGrid } from "./Appstyles";

function App() {
  return (
    <StyledBox>
      <StyledGrid className="App">
        <Navigation />
        <Outlet />
      </StyledGrid>
      <Footer />
    </StyledBox>
  );
}

export default App;
