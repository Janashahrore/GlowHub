



import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import theme from '../theme/Theme';
import { useCart } from '../context/CartContext';

const Checkout: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (!name || !address || !phone || !email) {
      alert("Please fill all fields!");
      return;
    }
    setSubmitted(true);
    clearCart(); // يفضي الكارت بعد الشراء
  };

  const textFieldStyle = {
    mb: 2,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#ff5fa2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff5fa2',
      },
    },
    '& .MuiInputBase-input': {
      color: '#776c6cff',
    },
    '& .MuiInputLabel-root': {
      color: '#afa8a8ff',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#ff5fa2',
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        mt: 2,
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
      }}
    >
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
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#ff5fa2' }}>
            Complete Your Purchase
          </Typography>

          <TextField
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            label="Address"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            label="Phone Number"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={textFieldStyle}
          />

          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={textFieldStyle}
          />

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#8b8b8bff' }}>
              Your Cart:
            </Typography>
            {cartItems.length === 0 ? (
              <Typography>Your cart is empty</Typography>
            ) : (
              cartItems.map((item) => (
                <Typography key={item.id}>
                  {item.title} - {item.quantity} x ${item.price}
                </Typography>
              ))
            )}
            <Typography sx={{ fontWeight: 'bold', mt: 1, color: '#bfa338' }}>
              Total: ${total}
            </Typography>
          </Box>

           <Button
            fullWidth
            onClick={handleSubmit}
            sx={{
              mt: 2,
              backgroundColor: '#ff5fa2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#c22b6aff',
              },
            }}
          >
            Confirm Purchase
          </Button>
        </Paper>
      ) : (
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
        
          <Typography variant="h5" sx={{ mb: 2, color: '#c22b6aff' }}>
            Thank you for your order!
          </Typography>
          <Typography sx={{ color: '#776c6cff' }}>
            Thank you for shopping with Léora 🎀 <br />
            Your package will arrive within 2 days.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Checkout;