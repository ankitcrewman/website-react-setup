import React from 'react';
import { Container, Grid, Typography, TextField, Button, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f8f8f8' , padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Section 1: Logo and Short Description */}
          <Grid item xs={12} md={3} container direction="column" alignItems="center">
            <img src="/llll.png" alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
            <Typography variant="body1" align="center">
              This is a short description about the company or the website. It gives an overview of the purpose and mission.
            </Typography>
          </Grid>
          {/* Section 2: Quick Links */}
          <Grid item xs={12} md={3} container direction="column" alignItems="center">
            <Typography variant="h6" align="center" sx={{ marginBottom:  "10px" }} >Quick Links</Typography>
            <Link href="#" variant="body2" display="block" align="center" sx={{ marginBottom:  "10px" }}>Home</Link>
            <Link href="#" variant="body2" display="block" align="center" sx={{ marginBottom:  "10px" }}>About Us</Link>
            <Link href="#" variant="body2" display="block" align="center" sx={{ marginBottom:  "10px" }}>Services</Link>
            <Link href="#" variant="body2" display="block" align="center">Contact</Link>
          </Grid>
          {/* Section 3: Newsletter */}
          <Grid item xs={12} md={3} container direction="column" alignItems="center">
            <Typography variant="h6" align="center">Newsletter</Typography>
            <Typography variant="body2" align="center">
              Subscribe to our newsletter to get the latest updates.
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              sx={{ margin: '10px 0', width: '100%' }}
            />
            <Button variant="contained" color="primary" sx={{ width: '100%' }}>Subscribe</Button>
          </Grid>
          {/* Section 4: Social Login */}
          <Grid item xs={12} md={3} container direction="column" alignItems="center">
            <Typography variant="h6" align="center">Follow Us</Typography>
            <Box>
              <IconButton href="#" color="inherit"><Facebook /></IconButton>
              <IconButton href="#" color="inherit"><Twitter /></IconButton>
              <IconButton href="#" color="inherit"><Instagram /></IconButton>
              <IconButton href="#" color="inherit"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

      </Container>
      <Grid sx={{
        backgroundColor : "black"
      }}
      > <Typography variant="h6" align="center" color={ "white"}>Follow Us</Typography>

      </Grid>
    </Box>
  );
};

export default Footer;
