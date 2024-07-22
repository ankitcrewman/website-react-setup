import React from 'react';
import { Box, Typography, useMediaQuery, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { useQuery } from 'react-query';
import axios from 'axios';

// Define custom styles
const HeroSection = styled(Box)(({ bgImage }) => ({
  position: 'relative',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: '100%',
  height: '50vh', // Adjust height as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  '@media (max-width:600px)': {
    height: '40vh', // Adjust for smaller screens
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black background with transparency
  borderRadius: '10px',
  textAlign: 'center',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  '@media (max-width:600px)': {
    fontSize: '1.5rem', // Adjust font size for smaller screens
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  '@media (max-width:600px)': {
    fontSize: '0.875rem', // Adjust font size for smaller screens
  },
}));

const fetchImageText = async () => {
  const { data } = await axios.get('http://localhost/node-js-project/react-back-end/api/image-texts');
  return data;
};

const Hero = () => {
  const { data, error, isLoading } = useQuery('imageText', fetchImageText);

  // Use a default background image in case the API request fails
  const backgroundImage = data ? `${data.filename}` : '';

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error loading data</div>;

  return (
    <HeroSection bgImage={backgroundImage}>
      <HeroText>
        <HeroTitle variant="h2">
          {data.heading}
        </HeroTitle>
        <HeroSubtitle variant="h6">
          {data.sub_head}
        </HeroSubtitle>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
