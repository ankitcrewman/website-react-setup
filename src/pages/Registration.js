// Registration.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/node-js-project/react-back-end/api/register', {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
      <Typography variant="body2">
        Already have an account? <Link href="/login">Login here</Link>
      </Typography>
    </Container>
  );
};

export default Registration;
