import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";

export const StyledButton = styled(Button)(({ theme, state, anchor }) => ({
  position: "absolute",
  left: state[anchor] ? "250px" : "0px",
  top: "80px",
  left: "4rem",
  // top: "50%",
  // [theme.breakpoints.only("xs")]: {
  //   top: "3%",
  // },
  transform: "translate(0, -50%)",
  zIndex: 2,
  transition: "ease 0.5",
  fontSize: "2rem",
  color: "primary.main",
  backgroundColor: "transparent",
  [theme.breakpoints.only("xs")]: {
    backgroundColor: "rgba(238, 236, 236,0.7)",
    top: "40px",
    left: "10px",
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  ".MuiDrawer-root": {
    width: "270px",
    [theme.breakpoints.only("xs")]: {
      width: "220px",
    },
    zIndex: "2",
    flexShrink: 0,
  },
  ".MuiDrawer-paper": {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width: "270px",
    [theme.breakpoints.only("xs")]: {
      width: "220px",
    },
    boxSizing: "border-box",
    backgroundColor: "#fff",
    color: "#343434",
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: "primary.main",
  marginLeft: "50px",
  [theme.breakpoints.only("xs")]: {
    marginLeft: "35px",
  },
}));
