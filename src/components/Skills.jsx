import React from 'react';
import { motion } from "framer-motion";

const Skills = ({ data }) => {
  return (
    <motion.div
      id='skills'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='min-h-screen bg-black text-white border-t-2 border-t-gray-900 px-4 py-20'
    >
      <h1 className='font-bold text-3xl sm:text-4xl text-center text-yellow-400 mb-16'>
        My <span className="text-white">Skills</span>
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 max-w-7xl mx-auto'>
        {data.map((skill, index) => (
          <div
            key={index}
            className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-md hover:shadow-yellow-500/40 hover:scale-105 transition-transform duration-300 p-6 flex flex-col items-center text-center'
          >
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className='w-12 h-12 object-contain mb-4 rounded-md'
            />
            <h2 className='text-base sm:text-lg font-semibold text-white'>{skill.name}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
