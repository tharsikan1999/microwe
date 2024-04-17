import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-16 me-3" alt="Microwe Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Microwe
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:px-8 lg:px-0">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Products
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">Angular</Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">React</Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">Vue</Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">Laravel</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex space-x-3 items-center">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <IoHome />
                    <span className="ms-2 text-lg font-semibold">
                      New York, USA
                    </span>
                  </Link>
                </li>
                <li className="mb-4 flex space-x-3 items-center">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <MdEmail />
                    <span className="ms-3 text-lg font-semibold">
                      info@example.com
                    </span>
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <FaPhone />
                    <span className="ms-2 text-lg font-semibold">
                      + 01 234 567 88
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className=" text-lg font-semibold text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} All Rights Reserved :{" "}
            <Link to="">
              <span className=" text-xl font-semibold text-customRed">
                Microwe
              </span>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
