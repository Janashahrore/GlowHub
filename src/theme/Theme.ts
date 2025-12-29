// add command on terminal 
// npm install @mui/material @emotion/react @emotion/styled
import { createTheme } from '@mui/material/styles';

// ألوان الموقع
const colors = {
  primary: '#ffeff8',
  secondary: '#d4a744',
  background: '#ffeff8',
  text: '#cccccc',
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
    },
    text: {
      primary: colors.text,
    },
  },
});

export default theme;