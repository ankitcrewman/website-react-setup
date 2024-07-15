import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bgImage from '../../assets/images/bg.jpg';

// Define custom styles
const useStyles = makeStyles((theme) => ({
  heroSection: {
    position: 'relative',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh', // Adjust height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '40vh', // Adjust for smaller screens
    },
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with transparency
    borderRadius: '10px',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem', // Adjust font size for smaller screens
    },
  },
  heroSubtitle: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem', // Adjust font size for smaller screens
    },
  },
}));

const Hero = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box className={classes.heroSection}>
      <Box className={classes.heroText}>
        <Typography variant="h2" className={classes.heroTitle}>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" className={classes.heroSubtitle}>
          Discover our services and offerings
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
