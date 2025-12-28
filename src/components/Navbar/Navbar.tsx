import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const { cartItems } = useCart(); // جلب المنتجات من الكارت
const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // احسب العدد الكلي



  return (
    <AppBar position="static" style={{ backgroundColor: '#ffeff8', padding: '16px 0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* أقصى اليسار: Logo + اسم */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              style={{ width: 50, height: 50, borderRadius: '50%' }}
            />
          </Link>

          <Typography
            component={Link}
            to="/"
            style={{
              textDecoration: 'none',
              fontFamily: "'Great Vibes', cursive",
              fontSize: '2rem',
              color: '#d4a744',
            }}
          >
            Léora
          </Typography>
        </Box>

        {/* الوسط: الأقسام */}
       <Box display="flex" gap={4}>

          <Button
            component={Link}
            to="/haircare"
            style={{
              color: isActive('/haircare') ? '#bfa338' : '#d4a744',
              fontWeight: 'bold',
              fontSize: isActive('/haircare') ? '1.2rem' : '1rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.color = '#b08968';
              target.style.fontSize = '1.3rem';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.color = isActive('/haircare') ? '#9b782cff' : '#d4a744';
              target.style.fontSize = isActive('/haircare') ? '1.2rem' : '1rem';
            }}
          >
            Hair Care
          </Button>

          <Button
            component={Link}
            to="/skincare"
            style={{
              color: isActive('/skincare') ? '#bfa338' : '#d4a744',
              fontWeight: 'bold',
              fontSize: isActive('/skincare') ? '1.2rem' : '1rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.color = '#b08968';
              target.style.fontSize = '1.3rem';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.color = isActive('/skincare') ? '#9b782cff' : '#d4a744';
              target.style.fontSize = isActive('/skincare') ? '1.2rem' : '1rem';
            }}
          >
            Skin Care
          </Button>

          <Button
            component={Link}
            to="/makeup"
            style={{
              color: isActive('/makeup') ? '#bfa338' : '#d4a744',
              fontWeight: 'bold',
              fontSize: isActive('/makeup') ? '1.2rem' : '1rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.color = '#b08968';
              target.style.fontSize = '1.3rem';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.color = isActive('/makeup') ? '#9b782cff' : '#d4a744';
              target.style.fontSize = isActive('/makeup') ? '1.2rem' : '1rem';
            }}
          >
            Makeup ♥
          </Button>
        </Box>

        {/* أقصى اليمين: السلة + Login */}
        <Box style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
          {/* السلة مع الرقم في دائرة */}
            <Box style={{ position: 'relative', display: 'inline-block' }}>
  <Link
    to="/cart"
    style={{
      textDecoration: 'none',
      color: '#d4a744',
      fontSize: '2rem',
      transition: 'all 0.3s',
      display: 'inline-block',
    }}
    onMouseEnter={(e) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(1.3)';
    }}
    onMouseLeave={(e) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = 'scale(1)';
    }}
  >
    🛒
  </Link>

     {/* الدائرة للعدد */}
  {cartCount > 0 && (
    <Box
      style={{
        position: 'absolute',
        top: '-10px',
        left: '-8px',
        backgroundColor: '#ff5fa2',
        color: 'white',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
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


          {/* زر Login */}
          <Button
            component={Link}
            to="/login"
            style={{
              backgroundColor: '#ff5fa2',
              color: 'white',
              borderRadius: '20px',
              padding: '4px 20px',
              fontSize: '0.85rem',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = '#000';
              target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.backgroundColor = '#ff5fa2';
              target.style.transform = 'scale(1)';
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
