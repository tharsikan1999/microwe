import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import customerServices from "../../Data/customerServices";

function Services() {
  return (
    <main className="w-full bg-customWhite ">
      <div className="mx-auto w-full max-w-screen-xl px-5  lg:py-20 py-5">
        <div className="grid sm:grid-cols-2 py-3 px-5  justify-center0">
          <div className="  text-center sm:text-left ">
            <p className="text-customRed text-3xl font-bold mb-2">
              Our services
            </p>
            <h1 className="text-gray-800 lg:text-6xl text-4xl font-bold mb-8 leading-tight">
              What we can offer today
            </h1>
          </div>
          <div className="grid sm:justify-end justify-center ">
            <div>
              <button className="bg-customRed text-white md:px-5 md:py-2 lg:mt-10 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed">
                view all services
                <FaArrowRight className="ml-2 transform -rotate-45 transition-transform duration-300 hover:rotate-0" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-5">
          {customerServices.map((service, index) => (
            <motion.div
              className="bg-white flex-1 rounded-[40px] pt-7 pb-5 px-5"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-2 items-center w-auto mb-5 px-5">
                <p className="text-2xl font-bold leading-7">
                  {service.title} <br /> {service.sub}
                </p>
                <div className="grid justify-end">
                  <button className="bg-customRed text-white md:text-xl text-lg h-14 w-14 font-semibold rounded-full outline-none flex items-center justify-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed">
                    <FaArrowRight className="text-3xl transform -rotate-45 transition-transform duration-300 hover:rotate-0" />
                  </button>
                </div>
              </div>
              <hr className="my-2 border-gray-200 sm:mx-auto dark:border-white-400 lg:my-4" />
              <p className="font-normal text-gray-600 mx-5">
                {service.service}
              </p>
              <div className="overflow-hidden rounded-3xl mt-5 relative group">
                <div className="overflow-hidden">
                  <img
                    src={service.imageName}
                    alt=""
                    className="w-auto rounded-3xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20 group-hover:animate-shine"
                  style={{ transition: "opacity 0.5s ease" }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
