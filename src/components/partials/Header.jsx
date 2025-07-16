import React from "react";
import { SiJrgroup } from "react-icons/si";

const Header = () => {
  return (
    <>
      <nav className="bg-transparent absolute w-full z-10">
        <div className="container mx-auto px-4 py-3">
          {/* <div className="flex justify-between items-center"> */}
          <div className="flex items-center space-x-4 text-2xl font-bold text-white drop-shadow-lg">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-3 justify-between text-orange-600">
                <SiJrgroup className="text-7xl" />
                <div className="flex flex-col leading-6">
                  <span>Jamaila</span>
                  <span>Recuenco</span>
                </div>
              </div>
              <div className="hidden md:flex space-x-9">
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium"
                >
                  About Me
                </a>
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Header;
