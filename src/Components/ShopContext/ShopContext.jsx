import React, { createContext, useState } from "react";
import { productData } from "../../Data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
