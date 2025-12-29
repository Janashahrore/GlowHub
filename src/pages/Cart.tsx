import { Box, Typography, Button, IconButton } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Add, Remove } from '@mui/icons-material';

const Cart = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const { cartItems, addToCart, removeFromCart } = cartContext;

  // حساب المجموع الكلي
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" style={{ marginBottom: '24px', color: '#d4a744' }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" style={{ color: '#554e4eff' }}>
          Your cart is empty 🛒
        </Typography>
      ) : (
        <>
          {cartItems.map(item => (
            <Box
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                padding: '12px',
                border: '1px solid #afa8a8ff',
                borderRadius: '10px',
              }}
            >
              {/* صورة + اسم المنتج */}
              <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <Typography variant="h6" sx={{color : '#afa8a8ff'}}>{item.name}</Typography>
              </Box>

              {/* السعر + كمية + أزرار زيادة/نقص + حذف */}
              <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconButton onClick={() => addToCart(item)} style={{ color: '#ff5fa2' }}>
                  <Add />
                </IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton
                  onClick={() => {
                    if (item.quantity === 1) removeFromCart(item.id);
                    else cartContext.addToCart({ ...item, quantity: 1 });
                  }}
                  style={{ color: '#ff5fa2' }}
                >
                  <Remove />
                </IconButton>
                <Typography style={{ minWidth: '60px', color:'#afa8a8ff' }}>
                  ₪{item.price * item.quantity}
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#ff5fa2', color: '#fff' }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          ))}

          {/* المجموع الكلي + زر Checkout */}
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '24px',
              fontWeight: 'bold',
            }}
          >
            <Typography variant="h5" style={{ color: '#afa8a8ff', fontWeight: 'bold' }}>
              Total: ₪{totalPrice}
            </Typography>

            <Button
              variant="contained"
              style={{ backgroundColor: '#ff5fa2', color: 'white' }}
              onClick={() => navigate('/checkout')}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
