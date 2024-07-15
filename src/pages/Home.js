import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Hero from '../components/Home/Hero'; // Import the Hero component

// Define custom styles
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // height: '100%',/
    height:"300px",
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    backgroundColor: "red",  },
  sectionContent: {
    color: theme.palette.text.primary,
  },
  sectionSet:{
  
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hero /> {/* Add the Hero component here */}
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid className={classes.sectionSet} item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.sectionTitle}>Section 1</Typography>
                <Typography className={classes.sectionContent}>This is some content for the first section.</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid className={classes.sectionSet} item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.sectionTitle}>Section 2</Typography>
                <Typography className={classes.sectionContent}>This is some content for the second section.</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid className={classes.sectionSet} item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Box p={2}>
                <Typography variant="h6" className={classes.sectionTitle}>Section 3</Typography>
                <Typography className={classes.sectionContent}>This is some content for the third section.</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
