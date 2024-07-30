import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/node-js-project/react-back-end/api/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., save token, redirect, etc.
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError(error.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} mb={4}>
        <Typography variant="h4" gutterBottom>
          Login Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the Login page of this Material-UI example.
        </Typography>
        {error && (
          <Typography variant="body2" color="error">
            {error.error || 'Login failed'}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </form>
        <Box mt={2}>
          <Typography variant="body2">
            Don't have an account? <Link href="/register">Register here</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
