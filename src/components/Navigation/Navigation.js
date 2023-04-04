import React from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { mainNabarObjects } from "./consts/navbarListItems";
import { StyledButton, StyledDrawer, StyledListItemIcon } from "./styles";

import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navigation = () => {
  const navigate = useNavigate();

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
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      {["left"].map((anchor) => (
        <Box key={anchor}>
          <StyledButton
            onClick={toggleDrawer(anchor, !state[anchor])}
            state={state}
            anchor={anchor}
          >
            {state[anchor] ? "" : <HiMenuAlt2 />}
          </StyledButton>
          <StyledDrawer
            BackdropProps={{ invisible: true }}
            anchor={anchor}
            elevation={0}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </StyledDrawer>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
