import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import Hero from "../components/Home/Hero"; // Import the Hero component
import InfoSection from "../components/InfoSection/InfoSection";

// Define custom styles
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    background: "linear-gradient(to top right, #113155, #000000)",
    margin: "3px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.7s ease-in-out, color 0.3s ease-in-out", 
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", 
      background: "white", 
      color: "black",
      "& $typography": { 
        color: "black",
      },
    },
  },
  typography: {
    color: "white",
    transition: "color 0.3s ease-in-out",
  },
  sectionSet: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  sectionSetInside: {
    boxShadow: "0px 0px 3px gainsboro",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hero /> 
      <Container className={classes.container}>
        <Grid className={classes.sectionSet} container>
          <Grid className={classes.sectionSetInside} item xs={12} sm={6} md={4}>
            <Paper elevation={0} className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.typography}>
                  Section 1
                </Typography>
                <Typography className={classes.typography}>
                  This is some content for the first section.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid className={classes.sectionSetInside} item xs={12} sm={6} md={4}>
            <Paper elevation={0} className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.typography}>
                  Section 2
                </Typography>
                <Typography className={classes.typography}>
                  This is some content for the second section.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid className={classes.sectionSetInside} item xs={12} sm={6} md={4}>
            <Paper elevation={0} className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.typography}>
                  Section 3
                </Typography>
                <Typography className={classes.typography}>
                  This is some content for the third section.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <InfoSection
          heading="Master Heading"
          imageSrc="https://via.placeholder.com/400"
          info="This is the information section where you can add any text or content you like."
        />
      </Container>
    </>
  );
};

export default Home;