import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4, px: 1 }}>
      {/* الصورة بحواف دائرية */}
      <Box
        component="img"
        src="/bg.png" // حطي صورتك هنا
        alt="Home Banner"
        sx={{
          width: '100%',
          height: '600px',
          borderRadius: '20px', // الحواف دائرية
          objectFit: 'cover',
          mb: 5, // مسافة تحت الصورة
        }}
      />

      {/* الأزرار تحت بعض */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3} // المسافة بين الأزرار
      >
        <Button
          component={Link}
          to="/haircare"
          sx={{
            width: '250px',
            backgroundColor: '#D6A99D', // Dirty Pink
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '35px',
            padding: '40px 300px',
            borderRadius: '30px',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#EE6983', 
              transform: 'scale(1.1)',
            },
          }}
        >
          Hair Care
        </Button>

        <Button
          component={Link}
          to="/skincare"
          sx={{
            width: '250px',
            backgroundColor: '#D6A99D',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '35px',
            padding: '40px 300px',
            borderRadius: '30px',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#EE6983',
              transform: 'scale(1.1)',
            },
          }}
        >
          Skin Care
        </Button>

        <Button
          component={Link}
          to="/makeup"
          sx={{
            width: '250px',
            backgroundColor: '#D6A99D',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '35px',
            padding: '40px 300px',
            borderRadius: '30px',
            transition: 'all 0.3s',
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#EE6983',
              transform: 'scale(1.1)',
            },
          }}
        >
          Makeup ♥
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
