import React, { useContext } from 'react'
import { ShopContext } from '../../Components/ShopContext/ShopContext'
import { useParams } from 'react-router-dom'
import { productData } from '../../Data'

const ProductDetails = () => {
  const {addToCart} = useContext(ShopContext)

  const {id} = useParams()

  const Product = productData.find(product =>{
    return product.id === parseInt(id)
  })
  return (
    <div>
         
         <div className="product-details-container">
          <div className="details-left"></div>
          <div className="details-right"></div>
         </div>
    </div>
  )
}

export default ProductDetails
   