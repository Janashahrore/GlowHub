import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleLogin = () => {
    // Regex لفحص الإيميل
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
        backgroundColor: '#ffeff8', // نفس لون الخلفية لباقي الصفحات
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            backgroundColor: '#fff', // لون خلفية البطاقه
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{ color: '#d4a744' }} // نفس لون ثانوي
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
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
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
