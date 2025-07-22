import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-[#313132] text-white pb-[2rem] ">
        <div className="footer_content flex flex-col md:flex-row justify-between items-center p-[30px] border-b-[2px] border-[#666]">
          {/* Brand Name */}
          <div className="footer_name mb-4 md:mb-0 md:text-left text-center w-full md:w-auto">
            <h2 className="text-2xl font-bold">TrendyFits</h2>
          </div>
          {/* Navigation Links */}
          <div className="footer_nav flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-[#fbbf24] transition-colors duration-200">Home</a>
            <a href="#" className="hover:text-[#fbbf24] transition-colors duration-200">Shop</a>
            <a href="#" className="hover:text-[#fbbf24] transition-colors duration-200">Contact</a>
          </div>
          {/* Social Icons */}
          <div className="footer_socials flex gap-4 justify-center md:justify-end w-full md:w-auto">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="footer_icon text-[22px] hover:text-[#3b82f6] transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Instagram">
              <BsInstagram className="footer_icon text-[22px] hover:text-[#f43f5e] transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Twitter X">
              <BsTwitterX className="footer_icon text-[22px] hover:text-[#fbbf24] transition-colors duration-200" />
            </a>
          </div>
        </div>
        <div className="footer-copy text-center p-[15px] text-sm text-[#aaa]">
          <p>© TrendyFits 2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
