import React from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
// import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className=" navbar flex justify-between px-8 gap-20">
   <Link to="/">
      <div className="logo">
        <h2 className="  underline text-2xl  p-6">TrendyFits</h2>
      </div>
   </Link>
      <div className="links p-32 py-8 flex justify-between ">
        <ul className="flex uppercase gap-[29px]">
          <li className="list-none font-[18px] font-semibold  ">Home</li>
          <li className="list-none font-[18px] font-semibold  ">Product</li>
          <li className="list-none font-[18px] font-semibold  ">Contact</li>
          <li className="list-none font-[18px] font-semibold  ">App</li>
        </ul>
      </div>
      <div className="nav_icon_wrapper p-6 flex ">
        <Link to="/cart">
          <div className="nav_cart flex relative cursor-pointer  ">
            <BiCart className=" nav_icon text-[34px] ml-[35px] " />
            <p className="bg-red-700 absolute r-[-18px]  h-[20px] w-[20px] right-[-8px] rounded-full text-white flex justify-center items-center  ">0</p>
          </div>
        </Link>

        <BiUser className=" nav_icon text-[34px] ml-[35px]" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
