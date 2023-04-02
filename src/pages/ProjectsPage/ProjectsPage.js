import React from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "./consts/projects";

const ProjectsPage = () => {
  return (
    <Grid item xs={12}>
      <Stack alignContent="center" sx={{ mt: 5, pb: 3 }}>
        <Typography
          gutterBottom
          component="div"
          sx={{ typography: { sm: "h3", xs: "h5" }, mb: 3 }}
        >
          Projects
        </Typography>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          justifyItems="space-around"
        >
          {projects.map((project) => (
            <Grid item>
              <ProjectCard project={project} />{" "}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Grid>
  );
};

export default ProjectsPage;
