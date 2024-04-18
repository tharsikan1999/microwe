import React from "react";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="border-2 border-red-600">
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
            <Link
              to="/"
              className=" flex space-x-3 items-center border-2 border-red-600"
            >
              <MdEmail className=" hover:text-gray-950 dark:hover:text-white" />
              <span className="ms-2 text-lg font-semibold hover:text-gray-950 dark:hover:text-white whitespace-normal">
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
  );
}

export default Contact;
