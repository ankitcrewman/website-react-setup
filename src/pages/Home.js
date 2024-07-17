import React from "react";
import { Container, Grid, Typography, Paper, Box } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import Hero from "../components/Home/Hero"; // Import the Hero component
import InfoSection from "../components/InfoSection/InfoSection";
import SliderSection from "../components/GridSection/SliderSection";

// Define custom styles
// Define custom styles
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  sectionSet: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));

const Home = () => {
  const classes = useStyles();

  const sections = [
    { title: "Section 1", content: "This is some content for the first section." },
    { title: "Section 2", content: "This is some content for the second section." },
    { title: "Section 3", content: "This is some content for the third section." },
    { title: "Section 4", content: "This is some content for the fourth section." },
    { title: "Section 5", content: "This is some content for the fifth section." },
    { title: "Section 6", content: "This is some content for the sixth section." },
    { title: "Section 7", content: "This is some content for the Seven section." },
  ];

  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <div className={classes.sectionSet}>
          <SliderSection sections={sections} />
        </div>
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