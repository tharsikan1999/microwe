import React from "react";
import { IoHome } from "react-icons/io5";
import { FaPhone, FaRegClock } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notify = () => toast.success("Your message sent successfully!");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      toast.error("Name is required.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required.");
      return;
    } else if (!emailPattern.test(formData.email)) {
      toast.error("Invalid email format.");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Subject is required.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Message is required.");
      return;
    }

    console.log(formData);

    notify();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-customWhite dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-heading mb-4 font-bold tracking-tight text-customRed dark:text-white text-3xl sm:text-5xl"
              >
                Your feedback is important to us!
              </motion.h1>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="card h-fit max-w-6xl p-5 md:p-12 order-last">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Contact us today?
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <motion.input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md outline-2 outline-customRed py-2 pl-2 pr-4 shadow-md dark:text-customRed sm:mb-0"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <motion.input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md outline-2 outline-customRed py-2 pl-2 pr-4 shadow-md dark:text-customRed sm:mb-0"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <motion.input
                        type="text"
                        id="subject"
                        autoComplete="given-name"
                        placeholder="Your Subject"
                        className="mb-2 w-full rounded-md outline-2 outline-customRed py-2 pl-2 pr-4 shadow-md dark:text-customRed sm:mb-0"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <motion.textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md outline-2 outline-customRed py-2 pl-2 pr-4 shadow-md dark:text-customRed sm:mb-0"
                      value={formData.message}
                      onChange={handleChange}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    ></motion.textarea>
                  </div>
                  <motion.div
                    className="text-center "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      className="bg-customRed text-white md:px-5 md:py-2 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Message
                    </motion.button>
                  </motion.div>
                </form>
              </div>
              <div className="h-full pr-6 px-5">
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400"
                >
                  We are dedicated to providing exceptional customer service.
                  Feel free to reach out to us with any questions or inquiries.
                </motion.p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IoHome className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Kondavil jaffna,
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Sri Lanka
                      </motion.p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaPhone className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Mobile: +94 751234567
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Mail: Microwe@example.com
                      </motion.p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaRegClock className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Monday - Friday: 08:00 - 17:00
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-slate-400"
                      >
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </motion.p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Contact;
