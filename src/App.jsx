import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';




const App = () => {

  const [orderPopup,setOrderPopup] = useState(false)

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  };
useEffect(() =>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
  })
  AOS.refresh()
},[])

  return (
    <div className="bg-primary text-white h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold">🚀 Tailwind + Vite is Working!</h1>


    
  </div>
  )
}

export default App
