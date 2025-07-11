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
                    <div className="product-card bg-white border-[1px solid #e0e0e0] border-r-[8px] " key={id}>
                     <Link to={`/product/${product.id}`} key={product.id} > 
                      <img src={image} alt="" className="product-image max-w-full border-r-8 mb-[10px] h-[250px] scale-90 transition-transform duration-200 ease-in-out hover:scale-100" />
                      <div className="product-info">
                        <h4 className='text-[1.2erem] mt-[10px] mb-[5px] text-[#333]  '>{title}</h4>
                        <p className='text-[1rem]  '>${price} </p>
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
