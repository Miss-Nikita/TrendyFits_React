import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>
          <div className="product_list">
            <h2>Our Elegant Collection</h2>
            <div className="product-grid">
              
            </div>
          </div>
    </div>
  )
}

export default ProductList
