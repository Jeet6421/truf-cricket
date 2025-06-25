import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "../assets/img/Logo.jpeg";

const Footer = () => {
  return (
    <div className="bg-[#222] rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="flex items-center">
              <img
                src={Logo}
                alt="FitZone Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="ml-2 text-white text-lg font-bold">Truf</span>
            </div>
          </Link>
          <p className="mt-4 text-gray-300 text-sm">
            Truf Cricket is your trusted partner for fitness, wellness, and a
            healthier lifestyle. Join us to transform your body and mind with
            expert guidance and community support.
          </p>
        </div>
        {/* Address */}
        <div className="mt-8 md:mt-0">
          <h1 className="font-medium text-xl text-white">Address</h1>
          <p className="mt-4 text-gray-300 text-sm">
            89925 Aubree Square
            <br />
            Ajmer, Rajesthan 306 001
            <br />
            India
          </p>
        </div>
        {/* Contact */}
        <div className="mt-8 md:mt-0">
          <h1 className="font-medium text-xl text-white">Contact</h1>
          <div className="flex flex-row items-center gap-2 mt-4 text-gray-300">
            <AiTwotonePhone size={20} />
            <a
              href="tel:+917772412"
              className="hover:text-brightRed transition-colors"
            >
              +91-777-24-12
            </a>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2 text-gray-300">
            <AiOutlineMail size={20} />
            <a
              href="mailto:FitZone@gmail.com"
              className="hover:text-brightRed transition-colors"
            >
              trufcricket@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bar */}
      <div>
        <p className="text-center mt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <span className="text-brightRed font-semibold">Truf Cricket </span> |
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
