import React from 'react'
import hero_img from "../../assets/Head-7.avif"
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content flex px-[100px] g-20 justify-between ">
            <div className="hero_left max-w-[50%] mt-[120px] ">
                <h2 className='text-[65px]'>Unleash Premium Sound Quality</h2>
                <p className='mt-[15px] text-[15px] text-gray-500 ' >Whether you're streaming ypur favorite songs  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repudiandae possimus., gaming or working from home , our premium headPhone </p>
                <button className='bg-red-500 border-none px-[3.5rem] py-[1.1rem] mt-[20px] text-white b-r-[10px] '>Shop the Collection</button>
            </div>
            <div className="hero_right max-w-[50%]  ">
                <img className='w-[660px] h-[520px] object-contain ' src={hero_img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
