import React, { useState } from 'react';
import { motion } from "framer-motion";

const About = ({ data }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleBio = () => setShowFullBio(prev => !prev);

  return (
    <>
      <motion.div
        id="about"
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen text-white border-t-2 border-t-gray-800 px-4 sm:px-8 md:px-16 lg:px-32 py-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-3xl sm:text-4xl text-center mt-12 sm:mt-20"
        >
          About<span className="text-yellow-500"> Me</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 mt-12 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 mb-8 md:mb-0"
          >
            <img
              src="assets/profile.jpg"
              alt="Profile"
              className="rounded-full shadow-xl shadow-teal-600 object-cover w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, x: 80 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: false, amount: 0.2 }}
            // transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl bg-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 w-full md:w-2/3"
          >
            <p className="leading-relaxed">
              {showFullBio ? data[0].bio : `${data[0].bio.slice(0, 470)}... `}
              <span
                className='text-yellow-500 cursor-pointer'
                onClick={toggleBio}
              >
                {showFullBio ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
