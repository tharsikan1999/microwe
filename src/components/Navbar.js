import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Get the current URL path to determine the active link
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" bg-customWhite dark:bg-gray-900 fixed w-full dark:border-gray-600 pl-2 pr-4 lg:p-0">
        <div className="max-w-screen-xl flex flex-wrap sm:flex-nowrap items-center justify-between mx-auto p-2">
          <Link to="/">
            <div className="flex">
              <img src={logo} className="h-14" alt="Microwe Logo" />
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
                Microwe
              </span>
            </div>
          </Link>

          {/* Hamburger button to toggle mobile menu */}
          <button
            onClick={toggleMenu}
            className="block sm:hidden text-gray-800 dark:text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <span className="text-4xl text-customRed">&#10006;</span>
            ) : (
              <span className="text-3xl  text-customRed bg-white rounded-lg px-2">
                &#9776;
              </span>
            )}
          </button>

          {/* Navigation links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex sm:space-x-8 md:space-x-12 flex-col sm:flex-row sm:relative sm:right-0 sm:bg-transparent top-16 sm:top-0 pt-5 pb-8 space-y-5 px-5 sm:pt-0 sm:pb-0 sm:space-y-0 sm:px-0 justify-end right-0 dark:bg-gray-900 bg-customWhite w-full sm:w-auto`}
          >
            <li>
              <Link
                to="/"
                // Apply "active" class if the current path is the home path
                className={`${
                  currentPath === "/"
                    ? "text-customRed"
                    : "text-gray-800 dark:text-white hover:text-customRed"
                } text-xl font-semibold dark:hover:text-blue-700`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                // Apply "active" class if the current path is the contact path
                className={`${
                  currentPath === "/contact"
                    ? "text-customRed"
                    : "text-gray-800 dark:text-white hover:text-customRed"
                } text-xl font-semibold dark:hover:text-blue-700`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                // Apply "active" class if the current path is the service path
                className={`${
                  currentPath === "/service"
                    ? "text-customRed"
                    : "text-gray-800 dark:text-white hover:text-customRed"
                } text-xl font-semibold dark:hover:text-blue-700`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                // Apply "active" class if the current path is the about path
                className={`${
                  currentPath === "/about"
                    ? "text-customRed"
                    : "text-gray-800 dark:text-white hover:text-customRed"
                } text-xl font-semibold dark:hover:text-blue-700`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
