import React from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/Theme';

const Login: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.primary.main,
          padding: 2,
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              backgroundColor: theme.palette.background.default,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Typography variant="h4" component="h1" align="center" sx={{ color: theme.palette.secondary.main }}>
              Login
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: theme.palette.text.primary }}>
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
    </ThemeProvider>
  );
};

export default Login;