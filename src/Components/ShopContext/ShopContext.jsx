import React, { createContext, useEffect, useState } from "react";
import { productData } from "../../Data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  // Calculate total price
  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => {
      const price = parseFloat(item.price);
      if (isNaN(price)) return acc;
      return acc + price * item.amount;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  // Calculate total quantity
  useEffect(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.amount, 0);
    setQuantity(totalQty);
  }, [cart]);

  // Add item to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Increase item quantity
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) addToCart(item, id);
  };

  // Decrease item quantity
  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.amount > 1) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      setCart(updatedCart);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        quantity,
        total,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
