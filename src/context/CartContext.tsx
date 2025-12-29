import { createContext, useContext, useState } from "react";
import type { Product } from "../types/Product.type";

// نوع العنصر داخل السلة
type CartItem = Product & {
  quantity: number;
};

// نوع الـ Context
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void; // أضفت زر لتنظيف السلة بعد الشراء
};

// إنشاء الـ Context
export const CartContext = createContext<CartContextType | null>(null);

// Provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // إضافة منتج للسلة
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // حذف منتج من السلة
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // تنظيف السلة
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook سهل للاستخدام
export const useCart = () => useContext(CartContext)!;
