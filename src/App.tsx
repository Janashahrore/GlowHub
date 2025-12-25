import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Haircare from './pages/Haircare';
import Skincare from './pages/Skincare';
import Makeup from './pages/Makeup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Navbar from './components/Navbar/Navbar'; // استدعاء الـ Navbar

function App() {
  return (
    <>
      {/* هاي رح تظهر فوق كل الصفحات */}
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
    </>
  );
}

export default App;
