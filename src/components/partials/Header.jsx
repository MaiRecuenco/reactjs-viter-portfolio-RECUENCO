import React from "react";
import { SiJrgroup } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:space-x-6 lg:space-x-9 justify-between">
                <a
                  href="#"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium text-xl"
                >
                  Home
                </a>
                <a
                  href="#about-me"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium text-xl"
                >
                  About Me
                </a>
                <a
                  href="#skills"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium text-xl"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium text-xl"
                >
                  Projects
                </a>
                <a
                  href="#contacts"
                  className="text-black/50 hover:text-orange-700 transition duration-300 font-medium text-xl"
                >
                  Contacts
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Full-height Mobile Menu
              <div
                className={`
        md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out
        ${isOpen ? "translate-y-0" : "-translate-y-full"}
        pt-20
      `}
              >
                <div className="container mx-auto px-6 py-8 flex flex-col">
                  <a
                    href="#home"
                    className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#services"
                    className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a
                    href="#how-it-works"
                    className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    How It Works
                  </a>
                  <a
                    href="#testimonials"
                    className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Testimonials
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
