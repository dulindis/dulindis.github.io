import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  height: "100vh",
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    width: "100vw",
  },
  display: "flex",
  alignItems: "stretch",
  flexGrow: "1",
  flex: "1",
  position: "relative",
  padding: "50px 60px",
  [theme.breakpoints.only("xs")]: {
    padding: "0px 0px",
  },
}));
export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  flexGrow: "1",
  flex: "1",
  flexBasis: "100%",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  textAlign: "center",
  width: "100vw",
  overflowY: "auto",
  overflowX: "hidden",
}));
