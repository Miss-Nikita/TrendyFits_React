import React from "react";
import { productData } from "./productData";

const ProductGrid = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-10">Western Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-pink-600 font-bold mt-2 text-lg">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
