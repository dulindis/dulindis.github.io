import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345 }} id={project.id}>
      <CardContent>
        <Typography variant="h4" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" component="div">
          {project.description}
        </Typography>
        <Box>
          {project.tags.map((tag) => (
            <Chip
              avatar={tag.icon}
              label={tag.name}
              sc={{ typography: "body2" }}
              // color="primary.main"
            />
          ))}
        </Box>
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

// <Typography variant="subtitle1">{project.description}</Typography>

// <Box>{project.tags}</Box>
