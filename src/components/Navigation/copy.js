import React from "react";

import { useNavigate } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";

import { mainNabarObjects } from "./consts/navbarListItems";
import { navbarStyles } from "./styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
// import {dashboardTheme as theme} from "../../dashboardTheme/dashboardTheme";

const StyledButton = styled(Button)`
  position: absolute;
  left: ${({ state }) => (state ? "250px" : "0px")};
  top: ${({ theme }) => theme.breakpoints.up("sm")} {
    50%;
  }
  transform: ${({ theme }) => theme.breakpoints.up("sm")} {
    translate(0, -50%);
  };
  z-index: 2;
  transition: ease 0.5;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.breakpoints.down("xs")} {
    rgba(238, 236, 236, 0.7);
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {mainNabarObjects.map((item, index) => (
          <ListItem
            key={item.id}
            onClick={() => navigate(item.route)}
            disablePadding
            sx={{ py: 3 }}
          >
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      {["left"].map((anchor) => (
        <Box key={anchor}>
          <StyledButton
            onClick={toggleDrawer(anchor, !state[anchor])}
            state={state[anchor]}
            startIcon={state[anchor] ? null : <HiMenuAlt2 />}
          />
          <StyledDrawer
            anchor={anchor}
            elevation={0}
            ModalProps={{ slotProps: { backdrop: { invisible: true } } }}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </StyledDrawer>
        </Box>
      ))}
    </nav>
  );
};

export default Navigation;
