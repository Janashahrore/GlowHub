import React from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
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
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
