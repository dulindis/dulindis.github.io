import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";

import { mainNabarObjects } from "./consts/navbarListItems";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navbarStyles } from "./styles";
import { useNavigate, userParams, Navigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

//mainNabarObjects
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
            {/* <ListItemButton> */}
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
            {/* </ListItemButton> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, !state[anchor])}
            sx={{
              position: "absolute",
              left: state[anchor] ? "280px" : "30px",
              top: "50%",
              transform: "translate(0, -50%)",
              zIndex: 1000,
              transition: "ease 0.5",
              fontSize: "30px",
              color: "#ccc",
            }}
          >
            {state[anchor] ? <HiMenu />  :   <HiMenuAlt2 />}
          </Button>
          <Drawer
            anchor={anchor}
            elevation={0}
            sx={navbarStyles.drawer}
            ModalProps={{ slotProps: { backdrop: { invisible: true } } }}
            PaperProps={{
              sx: {
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
              },
            }}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Navigation;
