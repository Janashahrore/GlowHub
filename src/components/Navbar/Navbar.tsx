import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={{ bgcolor: '#ffeff8', p: '16px 0' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isSmallScreen ? 2 : 0,
        }}
      >
        {/* Logo + Name */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            order: isSmallScreen ? 1 : 0, // ترتيب في الشاشات الصغيرة
          }}
        >
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" style={{ width: 50, height: 50, borderRadius: '50%' }} />
          </Link>
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              fontFamily: "'Great Vibes', cursive",
              fontSize: '2rem',
              color: '#d4a744',
            }}
          >
            Léora
          </Typography>
        </Box>

        {/* الأقسام */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexGrow: isSmallScreen ? 0 : 1, // تكبير المساحة للـ desktop
            justifyContent: isSmallScreen ? 'center' : 'center',
            order: isSmallScreen ? 2 : 0,
            flexWrap: 'wrap',
            mt: isSmallScreen ? 1 : 0,
          }}
        >
          {['/haircare', '/skincare', '/makeup'].map((path, index) => {
            const labels = ['Hair Care', 'Skin Care', 'Makeup ♥'];
            return (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: isActive(path) ? '#bfa338' : '#d4a744',
                  fontWeight: 'bold',
                  fontSize: isActive(path) ? '1.2rem' : '1rem',
                  transition: 'all 0.3s',
                  '&:hover': { color: '#b08968', fontSize: '1.3rem' },
                }}
              >
                {labels[index]}
              </Button>
            );
          })}
        </Box>

        {/* Cart + Login */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'center',
            order: isSmallScreen ? 3 : 0,
            mt: isSmallScreen ? 2 : 0,
          }}
        >
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Link
              to="/cart"
              style={{
                textDecoration: 'none',
                color: '#d4a744',
                fontSize: '2rem',
                transition: 'all 0.3s',
              }}
            >
              🛒
            </Link>
            {cartCount > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '-10px',
                  left: '-8px',
                  bgcolor: '#ff5fa2',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
              >
                {cartCount}
              </Box>
            )}
          </Box>

          <Button
            component={Link}
            to="/login"
            sx={{
              bgcolor: '#ff5fa2',
              color: 'white',
              borderRadius: 2,
              px: 3,
              fontSize: '0.85rem',
              '&:hover': { bgcolor: '#000', transform: 'scale(1.1)' },
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;