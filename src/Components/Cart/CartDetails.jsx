import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const CartDetails = ({item}) => {
    const {decreaseAmount,increaseAmount, removeFromCart} = useContext(ShopContext)

    const {id, title, image, price, amount} = item
  return (
    <div>
      <div className="cart-item">
        <div className="product-details">
            <img src={image} alt={title} />
            <div className="product_info">
                <h3>{title} </h3>
                <div className="cart_item_remove">
                    <FiTrash2/> Remove
                </div>
            </div>
        </div>
        <div className="quantity">
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
