import React, { useState } from "react";
import { BsInstagram, BsTwitterX, BsPinterest, BsYoutube } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [sms, setSms] = useState("");
  const [message, setMessage] = useState("");
  const [smsMessage, setSmsMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSms = (e) => {
    e.preventDefault();
    if (sms && sms.length >= 8) {
      setSmsMessage("Thank you for signing up for SMS alerts!");
      setSms("");
    } else {
      setSmsMessage("Please enter a valid phone number.");
    }
    setTimeout(() => setSmsMessage(""), 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-10 pb-4 px-4 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* ABOUT US */}
        <div>
          <h3 className="text-lg font-bold mb-3 tracking-wide">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Wholesale Program</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Press Inquiries</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
          </ul>
        </div>
        {/* CUSTOMER SUPPORT */}
        <div>
          <h3 className="text-lg font-bold mb-3 tracking-wide">CUSTOMER SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Shipping Information</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Track Your Order</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Promo Code Lookup</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Gift Card Lookup</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Earn Rewards</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Payment Plans</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Retail Store Locator</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        {/* CONNECT WITH US */}
        <div>
          <h3 className="text-lg font-bold mb-3 tracking-wide">CONNECT WITH US</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors"><FaFacebook className="text-2xl" /></a>
            <a href="#" aria-label="X" className="hover:text-gray-400 transition-colors"><BsTwitterX className="text-2xl" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500 transition-colors"><BsYoutube className="text-2xl" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors"><BsInstagram className="text-2xl" /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-400 transition-colors"><BsPinterest className="text-2xl" /></a>
            <a href="#" aria-label="TikTok" className="hover:text-black transition-colors"><FaTiktok className="text-2xl" /></a>
          </div>
          <div className="mb-2 text-sm font-semibold">Want $20 Off? Sign up for our Newsletter.</div>
          <form onSubmit={handleSubscribe} className="flex gap-2 mb-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 w-40"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
          {message && <div className="text-yellow-400 text-xs mb-2">{message}</div>}
          <div className="mb-2 text-sm font-semibold">Sign up for SMS alerts and be the first to know!</div>
          <form onSubmit={handleSms} className="flex gap-2 mb-2">
            <input
              type="tel"
              value={sms}
              onChange={e => setSms(e.target.value)}
              placeholder="Your phone number"
              className="px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 w-40"
              aria-label="Phone number"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-300 font-semibold transition-colors"
            >
              Sign Up
            </button>
          </form>
          {smsMessage && <div className="text-yellow-400 text-xs mb-2">{smsMessage}</div>}
          <div className="mb-2 text-sm font-semibold">Get in the loop!</div>
          {/* BBB Logo Placeholder */}
          <div className="flex items-center mt-2">
            <img src="https://www.bbb.org/_next/static/media/bbb-accredited-business.2c1e6e7b.svg" alt="BBB Accredited Business" className="h-8 w-auto bg-white rounded p-1" />
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 pt-4 text-xs text-gray-400">
        <div className="text-center">© {new Date().getFullYear()} TrendFits. All rights reserved.</div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-yellow-400 transition-colors">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-yellow-400 transition-colors">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
