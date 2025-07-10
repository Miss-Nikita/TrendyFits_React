import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>
          <div className="product_list mw-1200px mx-auto p-[20px] mt-[60px] text-center ">
            <h2 className='mb-[20px] text-2xl text-[#333] ' >Our Elegant Collection</h2>
            <div className="product-grid grid gap-[20px] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
              {
                products.map((product) => {
                  const {id , image, title, price} = product
                  return(
                    <div className="product-card" key={id}>
                     <Link to={`/product/${product.id}`} key={product.id} > 
                      <img src={image} alt="" />
                      <div className="product-info">
                        <h4>{title}</h4>
                        <p>${price} </p>
                      </div></Link>
                      <button>Add To Cart</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
    </div>
  )
}

export default ProductList
