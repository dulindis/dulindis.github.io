import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "2rem 1rem 0 1rem",

  [theme.breakpoints.only("xs")]: { padding: "1rem 0 0 0" },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url("/assets/pumpheartai.svg") no-repeat 50% 100%`,
  backgroundSize: "contain",
  [theme.breakpoints.only("xs")]: {
    backgroundSize: "auto 70%", //"cover"
    width: "100vw",
    background: `url("/assets/pumpheartai.svg") no-repeat center`,
  },
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,1), rgba(255,255,255,0.9) 90%, rgba(255,255,255,0)) 100%",
  pt: 3,
  pb: 3,
  color: "#222",
}));
