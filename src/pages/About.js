import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        Welcome to the About page of this Material-UI example.
      </Typography>
    </Container>
  );
};

export default About;
