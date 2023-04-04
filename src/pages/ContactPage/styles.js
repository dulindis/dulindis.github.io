import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100vw",
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: `url("/assets/organicheartai.svg") 100% -5% no-repeat`,

  backgroundSize: "auto 30%",
  [theme.breakpoints.up("sm")]: {
    backgroundSize: "auto 70%",
  },
  overflow: "hidden",
}));
export const StyledGradientBox = styled(Box)`

     background: linear-gradient(
      to right,
      rgba(255,255,255, 0) 0%,
      rgba(255,255,255, 0.7) 15%,
      rgba(255,255,255, 1),
      rgba(255,255,255, 0.7) 85%,
      rgba(255,255,255, 0)
    )
    100%; 

  ${
    "" /* background: radial-gradient(
    ellipse at 50%,
    #eeecec,
    #eeecec 60%,
    transparent
  ); */
  }
  ${
    "" /* ${
    "" /* background: linear-gradient(
      to right,
      rgba(238, 236, 236, 0) 0%,
      rgba(238, 236, 236, 0.7) 15%,
      rgba(238, 236, 236, 1),
      rgba(238, 236, 236, 0.7) 85%,
      rgba(238, 236, 236, 0)
    )
    100%; */
  } */}
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
