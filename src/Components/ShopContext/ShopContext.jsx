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
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)) return accumulator;
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  
 

  // Calculate  quantity of item in cart
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setQuantity(amount);
    }
  }, [cart]);

  // function to add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
  };

  // function to Remove item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Function to Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  //Function to Increase item quantity
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Decrease item quantity
const decreaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id);

  if (!cartItem) return;

  if (cartItem.amount > 1) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(newCart);
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
