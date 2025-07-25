import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import './Cart.css'

const CartDetails = ({item}) => {
    const {decreaseAmount,increaseAmount, removeFromCart} = useContext(ShopContext)
    const {id, title, image, price, amount} = item
  return (
    <div className="w-full">
      <div className="cart-item flex flex-wrap md:flex-nowrap justify-between items-center mt-4 py-3 px-3 bg-white rounded-lg shadow-sm border border-[#e0e0e0] transition-shadow hover:shadow-md">
        {/* Product Details */}
        <div className="product-details flex items-center max-w-full md:max-w-[50%] gap-3">
          <img className='w-[60px] h-[60px] rounded object-contain bg-gray-100 mr-3' src={image} alt={title} />
          <div className="product_info flex flex-col">
            <h3 className='m-0 text-[18px] font-semibold leading-tight'>{title}</h3>
            <button
              className="cart_item_remove flex items-center gap-1 text-sm text-red-500 hover:text-red-700 transition-colors mt-1"
              onClick={()=> removeFromCart(id)}
              aria-label="Remove from cart"
            >
              <FiTrash2 /> Remove
            </button>
          </div>
        </div>
        {/* Quantity Controls */}
        <div className="quantity flex items-center gap-2 mx-2">
          <button
            onClick={()=> decreaseAmount(id)}
            className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 text-lg text-gray-700 transition-colors"
            aria-label="Decrease quantity"
          >
            <IoMdRemove />
          </button>
          <span className="w-6 text-center font-medium">{amount}</span>
          <button
            onClick={() => increaseAmount(id)}
            className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 text-lg text-gray-700 transition-colors"
            aria-label="Increase quantity"
          >
            <IoMdAdd />
          </button>
        </div>
        {/* Price */}
        <div className="price min-w-[60px] text-center font-medium text-gray-700">
          ${price}
        </div>
        {/* Total */}
        <div className="total min-w-[80px] text-center font-semibold text-green-700">
          {`$${parseFloat(price * amount).toFixed(2)}`}
        </div>
      </div>
    </div>
  )
}

export default CartDetails
