import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Haircare from './pages/HairCare/Haircare';
import Skincare from './pages/Skincare';
import Makeup from './pages/Makeup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        {/* الهيدر رح يظهر على كل الصفحات */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
