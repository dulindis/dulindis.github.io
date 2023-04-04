import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export const stylesSmall = {
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100%",
  backgroundColor: "#EEECEC",
  height: "25px",
  textAlign: "center",
  padding: "7px",
};

export const stylesMedium = {
  position: "absolute",
  bottom: "9px",
  right: "60px",
  backgroundColor: "#fff",
};

export const FooterBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: stylesSmall,
  [theme.breakpoints.up("sm")]: stylesMedium,
}));
