import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Grid item xs={12}>
      <Stack alignContent="center" sx={{ mt: 10 }}>
        <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
          404 Not Found...
        </Typography>
      </Stack>
    </Grid>
  );
};

export default NotFound;
