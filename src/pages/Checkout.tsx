import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import theme from '../theme/Theme';
import Header from '../components/Navbar/Navbar'; // استدعاء الهيدر

const Checkout: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // مثال للمشتريات من السلة
  const cartItems = [
    { name: 'Cute Plush Toy', price: 20 },
    { name: 'Gold Notebook', price: 15 },
    { name: 'Pink Mug', price: 10 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
      }}
    >
      {/* Header */}
      <Header />

      {/* Checkout Form */}
      {!submitted ? (
        <Paper
          sx={{
            padding: 4,
            width: '100%',
            maxWidth: 500,
            backgroundColor: '#fff',
            borderRadius: 3,
            boxShadow: 3,
            mt: 4,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main }}>
            Complete Your Purchase
          </Typography>

          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Cart Summary */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Your Cart:
            </Typography>
            {cartItems.map((item, index) => (
              <Typography key={index}>
                {item.name} - ${item.price}
              </Typography>
            ))}
            <Typography sx={{ fontWeight: 'bold', mt: 1 }}>Total: ${total}</Typography>
          </Box>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Confirm Purchase
          </Button>
        </Paper>
      ) : (
        // Thank you message
        <Paper
          sx={{
            padding: 4,
            maxWidth: 500,
            textAlign: 'center',
            borderRadius: 3,
            backgroundColor: '#fff',
            boxShadow: 3,
            mt: 4,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: theme.palette.primary.main }}>
            Thank you for your order!
          </Typography>
          <Typography>
            Thank you for shopping with Léora 🎀 <br />
            Your package will arrive within 2 days.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Checkout;
