import Typography from "@mui/material/Typography";
import React from "react";
import { StyledContentBox, StyledBox, StyledGrid } from "./styles";

const HomePage = () => {
  return (
    <StyledGrid item xs={12}>
      <StyledBox>
        <StyledContentBox>
          <Typography
            sx={{ typography: { sm: "h3", xs: "h5" }, padding: 2 }}
            component="h2"
          >
            "Let's put some life into your app..."
          </Typography>
        </StyledContentBox>
      </StyledBox>
    </StyledGrid>
  );
};

export default HomePage;
