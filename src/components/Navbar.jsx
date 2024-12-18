import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-lg sticky top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1
              className="font-semibold text-gray-900"
              onClick={() => window.location.reload()}
            >
              Modernify
            </h1>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center space-x-4 flex-1">
            <a
              href="#home"
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#get-started"
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-700">
              Login
            </button>
            <button className="px-3 py-2 rounded-md text-sm font-medium bg-green-500 text-white hover:bg-green-700">
              Sign In
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#get-started"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-500 text-white hover:bg-blue-700">
              Login
            </button>
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-500 text-white hover:bg-green-700">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
