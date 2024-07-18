// src/components/InfoSectionInverse.js

import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';


const InfoSectionInverse = ({ heading, imageSrc, info }) => {
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
        <Grid item xs={12} md={6} className="info-section-image-container">
          <Box
            component="img"
            src={imageSrc}
            alt="Image"
            className="info-section-image"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

InfoSectionInverse.propTypes = {
  heading: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default InfoSectionInverse;
