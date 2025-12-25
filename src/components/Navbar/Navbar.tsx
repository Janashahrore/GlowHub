import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // نعرف الصفحة الحالية

  // دالة لتحديد إذا الزر هو الصفحة الحالية
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static" style={{ backgroundColor: '#ffeff8', padding: '20px 0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* يسار: Logo + اسم المتجر + Login */}
        <Box display="flex" alignItems="center" gap={2}>

          <Link to="/"> {/* الرابط للصفحة الرئيسية */}
            <img
              src="/images/logo.png"
              alt="Léora Logo"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </Link>

          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="h4"
              component={Link} // اسم المتجر رابط للصفحة الرئيسية
              to="/"
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: '#d4a744',
                textDecoration: 'none',
              }}
            >
              Léora
            </Typography>

            {/* شطّة */}
            <Typography
              variant="h5"
              style={{ color: '#d4a744', fontWeight: 'bold' }}
            >
              |
            </Typography>

            {/* Login */}
            <Typography
              component={Link}
              to="/login"
              style={{
                textDecoration: 'none',

                color: isActive('/haircare') ? '#bfa338' : '#d4a744',
                fontSize: '1.5rem',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#b08968';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive('/haircare') ? '#9b782cff' : '#d4a744';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Login
            </Typography>
          </Box>
        </Box>

        {/* منتصف: روابط الأقسام */}
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

        {/* يمين: Welcome! */}
        <Typography
          variant="h5"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: '#d4a744',
            fontSize: '2rem',
          }}
        >
          Welcome!
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
