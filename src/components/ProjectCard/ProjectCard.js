import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  bgcolor: "#ccc",
  border: "none",
  boxShadow: 25,
  pt: 4,
  px: 4,
  pb: 2,
};

const ProjectCard = ({ project }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
        image={project.projectImgs[0]}
        alt={project.title}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <CardMedia
            component="img"
            image={project.projectImgs[0]}
            alt={project.title}
            onClick={handleOpen}
          />{" "}
          <Button onClick={handleClose}>back to projects</Button>
        </Box>
      </Modal>
      <CardActions>
        {project.pageUrl ? (
          <Button
            size="small"
            href={project.pageUrl}
            sx={{ typography: "subtitle1" }}
          >
            see page
          </Button>
        ) : project.demoUrl ? (
          <Button
            size="small"
            href={project.demoUrl}
            sx={{ typography: "subtitle1" }}
          >
            See demo
          </Button>
        ) : (
          ""
        )}

        <Button
          size="small"
          href={project.repoUrl}
          sx={{ typography: "subtitle1" }}
        >
          visit repo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
