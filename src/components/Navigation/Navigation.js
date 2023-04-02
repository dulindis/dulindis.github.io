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
    <Box component="nav">
      {["left"].map((anchor) => (
        <Box key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, !state[anchor])}
            sx={{
              position: "absolute",
              left: state[anchor] ? "250px" : "0px",
              top: { xs: "30px", sm: "50%" },
              transform: "translate(0, -50%)",
              zIndex: 1000,
              transition: "ease 0.5",
              fontSize: "1.5rem",
              color: "primary.main",
              backgroundColor: {
                xs: "rgba(238, 236, 236,0.7)",
                sm: "transparent",
              },
            }}
          >
            {state[anchor] ? "" : <HiMenuAlt2 />}
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
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
