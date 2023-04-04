import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  overflowY: "auto",
  overflowX: "hidden",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url("/assets/technical-heart.svg")  100% 0%   no-repeat`,
  backgroundSize: "auto 50%",
  overflowY: "auto",
  overflowX: "hidden",
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}));

export const StyledTypographyBackground = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 15%, rgba(255,255,255,1), rgba(255,255,255,0.7) 85%, rgba(255,255,255,0)) 100%",
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  width: "85%",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
  //   overflowY: "auto",
  //   overflowX: "hidden",
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
  variant: "body2",
  marginBottom: "1rem",
}));

export const StyledIconStack = styled(Stack)(({ theme }) => ({
  padding: "0 25px 30px 25px",
  fontSize: "32px",
  [theme.breakpoints.only("xs")]: "30px",
}));
