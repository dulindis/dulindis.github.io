import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectsPage = () => {
  return (
    <Grid item xs={12}>
      <Stack alignContent="center">
        <Typography sx={{ typography: { sm: "h3", xs: "h5" } }}>
          Work in progres...
        </Typography>
      </Stack>
    </Grid>
  );
};

export default ProjectsPage;
