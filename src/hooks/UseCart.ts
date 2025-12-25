import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // مصفوفة فاضية مؤقت

  return {
    cartItems,
    setCartItems,
  };
};