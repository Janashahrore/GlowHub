import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // نعرف الصفحة الحالية

  // دالة لتحديد إذا الزر هو الصفحة الحالية
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="static" style={{ backgroundColor: '#ffeff8', padding: '20px 0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* يسار: Logo + اسم المتجر */}
           <Box display="flex" alignItems="center" gap={2}>
  <Link to="/"> {/* هذا الرابط للصفحة الرئيسية */}
    <img
      src="/logo.png"
      alt="Léora Logo"
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  </Link>

  <Typography
    variant="h4"
    component={Link} // حطي الرابط على اسم المتجر كمان
    to="/"
    style={{
      fontFamily: "'Great Vibes', cursive",
      color: '#d4a744',
      textDecoration: 'none', // بدون underline
    }}
  >
    Léora
  </Typography>
</Box>


        {/* منتصف: روابط الأقسام */}
        <Box display="flex" gap={4}>

          <Button
  component={Link}
  to="/haircare"
  style={{
    color: isActive('/haircare') ? '#bfa338' : '#d4a744', // ذهبي للصفحة الحالية
    fontWeight: 'bold',
    fontSize: isActive('/haircare') ? '1.2rem' : '1rem',
    transition: 'all 0.3s', // سلاسة الحركة
  }}
  onMouseEnter={(e) => {
    const target = e.currentTarget;
    target.style.color = '#b08968'; // بني عند Hover
    target.style.fontSize = '1.3rem'; // تكبر شوي عند Hover
  }}
  onMouseLeave={(e) => {
    const target = e.currentTarget;
    target.style.color = isActive('/haircare') ? '#9b782cff' : '#d4a744'; // يرجع حسب الصفحة الحالية
    target.style.fontSize = isActive('/haircare') ? '1.2rem' : '1rem'; // يرجع حسب الصفحة الحالية
  }}
>
  Hair Care
</Button>

         <Button
  component={Link}
  to="/skincare"
  style={{
    color: isActive('/skincare') ? '#bfa338' : '#d4a744', // ذهبي للصفحة الحالية
    fontWeight: 'bold',
    fontSize: isActive('/skincare') ? '1.2rem' : '1rem',
    transition: 'all 0.3s', // حركة سلسة
  }}
  onMouseEnter={(e) => {
    const target = e.currentTarget;
    target.style.color = '#b08968'; // بني عند Hover
    target.style.fontSize = '1.3rem'; // تكبر شوي عند Hover
  }}
  onMouseLeave={(e) => {
    const target = e.currentTarget;
    target.style.color = isActive('/skincare') ? '#9b782cff' : '#d4a744'; // يرجع حسب الصفحة الحالية
    target.style.fontSize = isActive('/skincare') ? '1.2rem' : '1rem'; // يرجع حسب الصفحة الحالية
  }}
>
  Skin Care
</Button>

           <Button
  component={Link}
  to="/makeup"
  style={{
    color: isActive('/makeup') ? '#bfa338' : '#d4a744', // ذهبي للصفحة الحالية
    fontWeight: 'bold',
    fontSize: isActive('/makeup') ? '1.2rem' : '1rem',
    transition: 'all 0.3s', // حركة سلسة
  }}
  onMouseEnter={(e) => {
    const target = e.currentTarget;
    target.style.color = '#b08968'; // بني عند Hover
    target.style.fontSize = '1.3rem'; // تكبر شوي عند Hover
  }}
  onMouseLeave={(e) => {
    const target = e.currentTarget;
    target.style.color = isActive('/makeup') ? '#9b782cff' : '#d4a744'; // يرجع حسب الصفحة الحالية
    target.style.fontSize = isActive('/makeup') ? '1.2rem' : '1rem'; // يرجع حسب الصفحة الحالية
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
             fontSize: '2rem', // هذا الحجم اللي رح يتحكم بالكلمة مباشرة
          }}
        >
          Welcome!
        </Typography>

      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
