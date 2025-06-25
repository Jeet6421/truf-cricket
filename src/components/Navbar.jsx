import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/img/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { to: "home", label: "Home" },
    { to: "plans", label: "Plans" },
    { to: "about", label: "About Us" },
    { to: "trainers", label: "Truf Cafe" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-5 md:px-32 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-black">Truf Arena</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              className="text-black hover:text-red-500 transition cursor-pointer font-medium"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <AiOutlineClose size={28} />
          ) : (
            <AiOutlineMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white text-black transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="text-xl font-semibold hover:text-red-500 transition cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
