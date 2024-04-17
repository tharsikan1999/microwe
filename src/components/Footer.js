import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bg-customWhite dark:bg-gray-900 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className=" md:justify-between  space-y-4 md:space-y-0  p-5 flex flex-col md:flex-row items-center ">
          <p className=" text-lg font-semibold   text-gray-900 dark:text-gray-300 ">
            {" "}
            Get connected with us on social :{" "}
          </p>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <FaFacebook className="text-3xl text-customRed dark:text-blue-400 transform transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="/" className="flex items-center space-x-3">
              <FaLinkedin className="text-3xl text-customRed dark:text-blue-400 transform transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="/" className="flex items-center space-x-3">
              <FaTwitter className="text-3xl text-customRed dark:text-blue-400 transform transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="/" className="flex items-center space-x-3">
              <FaGithub className="text-3xl text-customRed dark:text-blue-400 transform transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link to="/" className="flex items-center space-x-3">
              <FaDiscord className="text-3xl text-customRed dark:text-blue-400 transform transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-white-400 lg:my-4" />

        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0  md:w-1/2 md:pr-10">
            <Link
              to="/"
              className="flex items-center  justify-center md:justify-start p-2 md:p-0"
            >
              <img src={logo} className="h-16 me-3" alt="Microwe Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Microwe
              </span>
            </Link>
            <p className=" text-lg font-normal dark:text-gray-400 md:ml-3">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:px-8 lg:px-0  md:pt-5 ">
            <div>
              <h2 className="mb-6 text-lg font-extrabold text-gray-800 uppercase dark:text-white">
                Products
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">Angular</Link>
                </li>
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">React</Link>
                </li>
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">Vue</Link>
                </li>
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">Laravel</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-extrabold text-gray-900 uppercase dark:text-white  hover:text-gray-950 dark:hover:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="mb-4 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                  <Link to="/">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-extrabold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex space-x-3 items-center">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <IoHome className=" hover:text-gray-950 dark:hover:text-white" />
                    <span className="ms-2 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                      kondavil, Sri Lanka
                    </span>
                  </Link>
                </li>
                <li className="mb-4 flex space-x-3 items-center">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <MdEmail className=" hover:text-gray-950 dark:hover:text-white" />
                    <span className="ms-3 text-lg font-semibold  hover:text-gray-950 dark:hover:text-white">
                      info@example.com
                    </span>
                  </Link>
                </li>
                <li className="mb-4 text-lg font-semibold">
                  <Link to="/" className=" flex space-x-3 items-center">
                    <FaPhone className=" hover:text-gray-950 dark:hover:text-white" />
                    <span className="ms-2 text-lg font-semibold hover:text-gray-950 dark:hover:text-white">
                      + 94 0751234567
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-white-400 lg:my-8" />
        <div className="flex items-center justify-center">
          <span
            className=" text-lg font-semibold text-gray-
          900 dark:text-white sm:text-center "
          >
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
