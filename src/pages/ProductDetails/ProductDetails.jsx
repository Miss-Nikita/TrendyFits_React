import React, { useContext, useState } from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'
import { useParams, useNavigate } from 'react-router-dom'
import { productData } from '../../Data'

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const product = productData.find(product => product.id === parseInt(id))

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <button
          className="px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-900 transition-colors text-sm"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, id)
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[60vh] bg-[#fafafa] py-6 px-2">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow flex flex-col md:flex-row p-5 md:p-8 gap-6">
        {/* Back Button */}
        <button
          className="absolute left-2 top-2 md:static md:mb-0 mb-2 px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-xs"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ← Back
        </button>
        {/* Product Image */}
        <div className="details-left flex-shrink-0 flex justify-center items-center">
          <div className="w-[200px] h-[240px] md:w-[260px] md:h-[320px] lg:w-[320px] lg:h-[400px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="details-right flex-1 flex flex-col justify-center gap-3 md:pl-6">
          <h3 className='text-[24px] font-semibold'>{product.title}</h3>
          <p className="product_price text-[18px] text-red-600 mt-[6px] font-bold">${product.price}</p>
          <p className="product_desc text-[15px] text-[#666] mt-[6px]">{product.description}</p>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mt-2">
            <label htmlFor="quantity" className="text-gray-700 text-base font-medium">Qty:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-14 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-red-400 text-base"
            />
          </div>
          {/* Add to Cart Button */}
          <button
            className='px-8 py-3 mt-3 border-0 bg-red-600 text-white rounded-lg font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-200 text-base'
            onClick={handleAddToCart}
            aria-label={`Add ${quantity} ${product.title} to cart`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
   