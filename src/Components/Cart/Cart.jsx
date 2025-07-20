import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import CartDetails from "./CartDetails";
import './Cart.css'


const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);

  return (
    <div>
      <div className="cart-container flex justify-between p-[20px] ">
        <div className="cart-left w-[65%] bg-white p-[20px] ">
          <div className="cart-header text-2xl ">
            <h1>Shopping</h1>
            <h1>Item: ({quantity}) </h1>
            <FiTrash2 onClick={clearCart} className="delete-cart text-[22px] " />
          </div>

          <div className="cart-header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Prices</span>
            <span>Total</span>
          </div>

          <div className="cart-details   ">
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartDetails item={item} key={item.id}  />
              ))
            ) : (
              <p>Your Cart is Empty</p>
            )}
          </div>
        </div>

        <div className="cart-right w-[30%] bg-[#f9f9f9] p-[20px] rounded-[10px]">
          <h2 className="text-[24px] mb-[20px] ">Cart Summary</h2>

          <div className="summary_item">
            <span>Items :</span>
            <span>{quantity}</span>
          </div>

          <div className="cart_summary">
            <div className="summary_item">
              <span>Subtotal</span>
              <span>${isNaN(total) ? 0 : total.toFixed(2)}</span>
            </div>

            <div className="summary_item">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary_item total_cost font-bold text-[17px] ">
              <span>Total Cost</span>
              <span>${isNaN(total) ? 0 : total.toFixed(2)}</span>
            </div>
            <button className="checkout_btn w-[100%] border-0 p-[15px] bg-[#4c4cff] text-white cursor-pointer mt-[20px] ">CHECKOUT </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
