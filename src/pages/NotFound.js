import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="bg-customWhite dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl pt-32 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <motion.h1
            className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
            initial={textVariants.initial}
            animate={textVariants.animate}
            transition={textVariants.transition}
          >
            404
          </motion.h1>

          <motion.p
            className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
            initial={textVariants.initial}
            animate={textVariants.animate}
            transition={textVariants.transition}
          >
            Something's missing.
          </motion.p>

          <motion.p
            className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400"
            initial={textVariants.initial}
            animate={textVariants.animate}
            transition={textVariants.transition}
          >
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </motion.p>

          <Link to="/">
            <div className="flex justify-center">
              <motion.button
                className="bg-customRed text-white md:px-5 md:py-2 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed"
                initial={textVariants.initial}
                animate={textVariants.animate}
                transition={textVariants.transition}
              >
                Back to Home
              </motion.button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
