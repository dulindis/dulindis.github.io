import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "./consts/projects";
const ProjectsPage = () => {
  return (
    <Grid item xs={12}>
      <Stack alignContent="center" sx={{ mt: 10 }}>
        <Typography sx={{ typography: { sm: "h3", xs: "h5" } }} gutterBottom>
          Work in progres...
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 500px)", //the width of the card
            justifyContent: "center",
            justifyItems: "space-around",
            gridGap: "30px",
          }}
        >
          {projects.map((project) => (
            <Grid item>
              <ProjectCard project={project} />{" "}
            </Grid>
          ))}
        </Box>
      </Stack>
    </Grid>
  );
};

export default ProjectsPage;
