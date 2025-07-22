import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'
import { useParams } from 'react-router-dom'
import { productData } from '../../Data'

const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext)

  const {id} = useParams()

  const product = productData.find(product =>{
    return product.id === parseInt(id)
  })
  return (
    <div>
         
         <div className="product-details flex p-[80px] ">
          <div className="details-left">
            <img className='w-[460px]' src={product.image} alt="" />
          </div>


          <div className="details-right p-[70px] ">
            <h3 className='text-[30px] ' >{product.title} </h3>
            <p className="product_price text-[22px] text-red-600 mt-[10px] ">${product.price} </p>
            <p className="product_desc text-[20px] text-[#666] mt-[15px] ">{product.description} </p>
            <button className='  ' onClick={() =>addToCart(product, id)}>Add To Cart</button>
          </div>
         </div>
    </div>
  )
}

export default ProductDetails
   