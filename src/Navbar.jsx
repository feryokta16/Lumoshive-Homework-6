import React from "react";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-20">
      <img src={logo} alt="Company Logo" className="h-12" />
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-800">
          Our Services
        </a>
        <a href="#" className="text-gray-800">
          About
        </a>
        <a href="#" className="text-gray-800">
          Blog&News
        </a>
        <a href="#" className="text-gray-800">
          Contact
        </a>
      </nav>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-gray-800">
          Account
        </a>
        <a href="tel:+2349067322844" className="text-red-600">
          <i className="fas fa-phone-alt"></i> +2349067322844
        </a>
      </div>
      <button className="md:hidden text-gray-800">
        <i className="fas fa-bars text-2xl"></i>
      </button>
    </header>
  );
};

export default Navbar;
