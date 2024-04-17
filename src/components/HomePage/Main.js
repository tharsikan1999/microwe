import React from "react";
import Image from "../../assets/img/hero-img.jpg";
import { FaArrowRight } from "react-icons/fa";

function Main() {
  return (
    <main className="w-full bg-customWhite">
      <div className=" mx-auto w-full max-w-screen-xl flex justify-center  md:pt-20 pt-10">
        <div className="flex py-14 px-4 flex-col md:flex-row">
          <div className=" md:w-1/2  text-center flex flex-col items-center lg:items-start lg:text-left">
            <p className=" text-customRed text-xl font-bold mb-4 ">
              About Our Company
            </p>
            <h1 className=" text-gray-800 lg:text-6xl text-4xl font-bold mb-8 leading-tight">
              Web Design, SEO & Internet Marketing For{" "}
              <span className=" text-customRed">Your Business</span>
            </h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo veritatis et quasi architecto beatae vitae dicta
              sunt.
            </p>
            <button className="bg-customRed text-white md:px-5 md:py-2 lg:mt-10 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed">
              Free Consultation
              <FaArrowRight className="ml-2 transform -rotate-45 transition-transform duration-300 hover:rotate-0" />
            </button>
          </div>
          <div className=" flex-1 border-red-600 h-full">
            <div className="flex w-full justify-center items-center py-7 ">
              <img src={Image} alt="" className=" h-96" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
