import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { products , addToCart } = useContext(ShopContext)

  return (
    <div>
      <div className="product_list max-w-[1200px] mx-auto p-[30px] mt-[70px] text-center">
        <h2 className='mb-[20px] text-2xl text-[#333]'>Our Elegant Collection</h2>
        <div className="product-grid grid gap-[20px] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            products.map((product) => {
              const { id, image, title, price } = product
              return (
                <div
                  key={id}
                  className="product-card bg-white border border-[#e0e0e0] rounded-md shadow-sm p-4 transition-all duration-300 hover:shadow-md"
                >
                  <Link to={`/product/${id}`}>
                    <img 
                      src={image}
                      alt=""
                      className="product-image max-w-full mx-auto mb-[10px] h-[250px] scale-100 transition-transform duration-200 ease-in-out hover:scale-110"
                    />
                    <div className="product-info">
                      <h4 className='text-[1.2rem] mt-[10px] mb-[5px] text-[#333]'>{title}</h4>
                      <p className='text-[1rem] text-[#888]'>${price}</p>
                    </div>
                  </Link>
                  <button onClick={() => addToCart(product , id)} className='add-to-cart block w-full p-[10px] bg-white text-black rounded-[4px] border border-[#ff5500] cursor-pointer text-[1rem] mt-[10px] transition-colors duration-300 ease-in-out hover:bg-[#ff5a50] hover:text-white'>
                    Add To Cart
                  </button>
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
