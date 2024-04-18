import React from "react";
import { IoHome } from "react-icons/io5";
import { FaPhone, FaRegClock } from "react-icons/fa6";

function Contact() {
  return (
    <section className="bg-customWhite dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl border-2 border-red-600 lg:px-6">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 border-2 border-red-600">
          <div className="mb-4 border-2 border-red-600 ">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-customRed dark:text-white text-3xl sm:text-5xl">
                Your feedback is important to us!
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center border-2 border-red-600 ">
            <div className="grid md:grid-cols-2 ">
              <div className="card h-fit max-w-6xl p-5 md:p-12 border-2 border-red-600 ">
                <h2 className="mb-4 text-2xl font-bold dark:text-white">
                  Contact us today?
                </h2>
                <form id="contactForm">
                  <div className="mb-6 ">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4 ">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autoComplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autoComplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4 ">
                        <label
                          htmlFor="subject"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="subject"
                          autoComplete="given-name"
                          placeholder="Your Subject"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center border-red-600">
                    <button className="bg-customRed text-white md:px-5 md:py-2 md:mt-6 md:text-xl text-lg py-1 px-3 my-10 font-semibold rounded-3xl outline-none flex items-center transition-all duration-300 hover:bg-transparent hover:text-customRed border-2 border-customRed">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="h-full pr-6 border-2 border-red-600 px-5 ">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  We are dedicated to providing exceptional customer service.
                  Feel free to reach out to us with any questions or inquiries.
                </p>
                <ul className="mb-6 md:mb-0 ">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <IoHome className="h-6 w-6" />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Kondavil jaffna,
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Sri Lanka
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <FaPhone className="h-6 w-6" />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mobile: +94 751234567
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: Microwe@example.com
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-customRed text-gray-50">
                      <FaRegClock className="h-6 w-6" />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
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
