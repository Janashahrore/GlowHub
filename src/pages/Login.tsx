import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        mt: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffeff8',
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{ color: '#d4a744' }}
          >
            Login
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#333' }}
          >
            Please login to access your account.
          </Typography>

          {/* Email Field */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError ? 'Please enter a valid email address' : ''}
            InputLabelProps={{
              sx: {
                color: '#ccc', // لون الـ label
                '&.Mui-focused': {
                  color: '#000000ff', // عند التركيز
                },
              },
            }}
            InputProps={{
              sx: {
                color: '#000000ff', // لون النص الذي يدخله المستخدم
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000000ff', // لون الحواف عند التركيز
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc', // لون الحواف الافتراضي
                },
              },
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              sx: {
                color: '#ccc',
                '&.Mui-focused': {
                  color: '#000000ff',
                },
              },
            }}
            InputProps={{
              sx: {
                color: '#000000ff',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000000ff',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
              },
            }}
          />

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;