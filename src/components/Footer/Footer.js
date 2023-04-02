import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { stylesSmall, stylesMedium } from "./styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        [theme.breakpoints.down("sm")]: stylesSmall,
        [theme.breakpoints.up("sm")]: stylesMedium,
      }}
    >
      <Typography variant="body1">&copy; Paulina Okulska 2023</Typography>
    </Box>
  );
};

export default Footer;
