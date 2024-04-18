import React from "react";
import { FaStar } from "react-icons/fa";
import customerReviews from "../../Data/customerReviews";
import { motion } from "framer-motion";

function UserReview() {
  const reviewVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="w-full bg-customWhite">
      <div className="mx-auto w-full max-w-screen-xl pb-20 pt-12">
        <h1 className="lg:text-5xl text-4xl text-center font-bold mb-10">
          Our customers love us.
        </h1>

        <div className="w-full px-10 text-center text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {customerReviews.map((review, index) => (
            <motion.div
              key={index}
              className="flex-1 py-5 flex flex-col items-center justify-center bg-white rounded-3xl px-3"
              variants={reviewVariants}
              initial="initial"
              animate="animate"
              transition="transition"
            >
              <img
                src={review.imageName}
                alt=""
                className="w-20 h-20 rounded-full mb-3"
              />
              <p className="text-2xl font-semibold text-gray-800 mb-3">
                {review.name}
              </p>
              <p className="text-lg font-bold text-blue-800 mb-3">
                {review.companyName}
              </p>
              <p className="mb-4">{review.review}</p>
              <div className="flex w-auto text-2xl text-customOrange space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserReview;
