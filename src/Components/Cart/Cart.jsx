import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'

const Cart = () => {
  const {cart , clearCart ,  total, quantity} = useContext(ShopContext)
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart">
            <h1>Shopping</h1>
            <h1>Item: ({quantity}) </h1>
            <FiTrash2 onClick={clearCart} className='delete-cart' />
          </div>
          <div className="cart"></div>
        </div>
      </div>
    </div>
  )
}

export default Cart
