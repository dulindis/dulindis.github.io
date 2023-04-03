import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export const StyledStack = styled(Stack)(({ theme }) => ({
  marginTop: "1rem",
  marginBotom: "1rem",

  // [theme.breakpoints.only("xs")]: {
  //   marginTop: "1rem",
  // },

  fontSize: "30px",
  [theme.breakpoints.only("xs")]: {
    fontSize: "32px",
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.only("xs")]: {
    padding: "0.5rem",
  },
}));
