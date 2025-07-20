import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import './Cart.css'

const CartDetails = ({item}) => {
    const {decreaseAmount,increaseAmount, removeFromCart} = useContext(ShopContext)

    const {id, title, image, price, amount} = item
  return (
    <div>
      <div className="cart-item flex justify-between items-center mt-[20px] py-[10px] border-b border-[#e0e0e0] ">
        <div className="product-details flex justify-between items-center max-w-[50%] ">
            <img className='w-[60px] h-[60px] mr-[20px] ' src={image} alt={title} />
            <div className="product_info">
                <h3 className='m-0 text-[18px] font-semibold ' >{title} </h3>
                <div className="cart_item_remove">
                    <FiTrash2 onClick={()=> removeFromCart(id)} /> Remove
                </div>
            </div>
        </div>
        <div className="quantity flex items-center  ">
            <button onClick={()=> decreaseAmount(id)}>
                <IoMdRemove />
            </button>
            <span>{amount} </span>
            <button onClick={() => increaseAmount(id)}>
                <IoMdAdd />
            </button>
        </div>

        <div className="price">
            ${price}
        </div>

        <div className="total">
            {`$ ${parseFloat(price * amount).toFixed(2) }`}
        </div>
      </div>
    </div>
  )
}

export default CartDetails
