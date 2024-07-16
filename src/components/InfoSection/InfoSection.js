// src/components/InfoSection.js

import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import './InfoSection.css'; // Import the CSS file

const InfoSection = ({ heading, imageSrc, info }) => {
  return (
    <Container className="info-section-container">
      <Typography
        variant="h4"
        component="h2"
        className="info-section-heading"
        gutterBottom
      >
        {heading}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="info-section-image-container">
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?w=1380&t=st=1721125682~exp=1721126282~hmac=28a76566c63b28875ec6f38eb2787ab31d9a6ff2e57b8d52cbb4c6f047f578d0"
            alt="Image"
            className="info-section-image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            component="div"
            className="info-section-info"
            sx={{ color: 'text.primary' }}
          >
            {info}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

InfoSection.propTypes = {
  heading: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default InfoSection;
