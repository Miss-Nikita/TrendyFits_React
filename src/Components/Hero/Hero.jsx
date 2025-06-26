import React from 'react'
import hero_img from "../../assets/Head-7.avif"
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_content">
            <div className="hero_left">
                <h2>Unleash Premium Sound Quality</h2>
                <p>Whether you're streaming ypur favorite songs , gaming or working from home , our premium headPhone </p>
                <button className='bg-red-500'>Shop the Collection</button>
            </div>
            <div className="hero_right">
                <img src={hero_img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
