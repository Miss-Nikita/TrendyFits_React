import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./Components/Cart/Cart";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  // Check if the current path matches /product/:id
  const hideFooter = /^\/product\/[\w-]+$/.test(location.pathname);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
