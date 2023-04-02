import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345 }} id={project.id}>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" component="div" gutterBottom>
          {project.description}
        </Typography>
        <Grid container direction="row" spacing={1} flexWrap="wrap">
          {project.tags.map((tag) => (
            <Grid item>
              <Chip
                size="small"
                avatar={tag.icon}
                label={tag.name}
                sx={{ typography: "body2", m: "1" }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image={project.projectImg}
        alt={project.title}
      />
      <CardActions>
        <Button
          size="small"
          href={project.demoUrl}
          sx={{ typography: "subtitle1" }}
        >
          See demo
        </Button>
        <Button
          size="small"
          href={project.repoUrl}
          sx={{ typography: "subtitle1" }}
        >
          See code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
