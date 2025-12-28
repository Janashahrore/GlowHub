import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const Cart = () => {
  const navigate = useNavigate();

  // بيانات تجريبية للمنتجات في السلة
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: 'Lipstick Rouge', price: 25, image: '/images/lipstick.png' },
    { id: 2, name: 'Moisturizer Cream', price: 40, image: '/images/cream.png' },
    { id: 3, name: 'Shampoo Smooth', price: 30, image: '/images/shampoo.png' },
  ]);

  // إزالة منتج من السلة
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // حساب المجموع الكلي
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

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
              <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <Typography variant="h6">{item.name}</Typography>
              </Box>

              <Box style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Typography variant="h6">${item.price}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeItem(item.id)}
                  style={{ backgroundColor: '#ff5fa2' }}
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
            <Typography
               variant="h5"
               style={{ color: '#afa8a8ff', fontWeight: 'bold' }}
>
               Total: ${totalPrice}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/checkout')}
              style={{ backgroundColor: '#ff5fa2', color: 'white' }}
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
