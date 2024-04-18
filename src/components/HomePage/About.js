import React from "react";
import Image from "../../assets/img/hero-img.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Main() {
  const button = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <main className="w-full bg-customWhite">
      <div className="mx-auto w-full max-w-screen-xl flex justify-center md:pt-20 pt-10">
        <div className="flex py-14 px-10 flex-col md:flex-row">
          <div className="md:w-1/2 text-center flex flex-col items-center lg:items-start lg:text-left">
            <motion.p
              className="text-customRed text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Our Company
            </motion.p>
            <motion.h1
              className="text-gray-800 lg:text-6xl text-4xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Web Design, SEO & Internet Marketing For{" "}
              <span className="text-customRed">Your Business</span>
            </motion.h1>
            <motion.p
              className="text-gray-800"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo veritatis et quasi architecto beatae vitae dicta
              sunt.
            </motion.p>

            <motion.button
              className="bg-customRed text-white md:px-5 md:py-2 lg:mt-10 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed"
              initial={button.initial}
              animate={button.animate}
              transition={button.transition}
            >
              Free Consultation
              <FaArrowRight className="ml-2 transform -rotate-45 transition-transform duration-300 hover:rotate-0" />
            </motion.button>
          </div>
          <div className="flex-1 border-red-600 h-full">
            <div className="flex w-full md:justify-end justify-center items-center py-7">
              <img src={Image} alt="" className="h-96" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
