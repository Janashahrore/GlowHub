import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md')); // الشاشات المتوسطة
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));  // الشاشات الصغيرة

  // تحديد أبعاد الصورة والأزرار حسب حجم الشاشة
  const imageHeight = isSmall ? 300 : isMedium ? 400 : 600;
  const buttonFontSize = isSmall ? '20px' : isMedium ? '28px' : '35px';
  const buttonPadding = isSmall ? '20px 40px' : isMedium ? '30px 80px' : '40px 300px';
  const buttonWidth = isSmall ? '180px' : '250px';

  return (
    <Box sx={{ textAlign: 'center', mt: 4, px: 1 }}>
      {/* الصورة بحواف دائرية */}
      <Box
        component="img"
        src="/images/bg.png"
        alt="Home Banner"
        sx={{
          width: '100%',
          height: imageHeight,
          borderRadius: '20px',
          objectFit: 'cover',
          mb: 5,
        }}
      />

      {/* الأزرار تحت بعض */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        {['/haircare', '/skincare', '/makeup'].map((path, index) => {
          const labels = ['Hair Care', 'Skin Care', 'Makeup ♥'];
          return (
            <Button
              key={path}
              component={Link}
              to={path}
              sx={{
                width: buttonWidth,
                backgroundColor: '#D6A99D',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: buttonFontSize,
                padding: buttonPadding,
                borderRadius: '30px',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                '&:hover': {
                  backgroundColor: '#EE6983',
                  transform: 'scale(1.1)',
                },
              }}
            >
              {labels[index]}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;