import React from 'react';
import {motion} from "framer-motion"

const Skills = ({ data }) => {
  const getProgressWidth = (level) => {
    switch (level.toLowerCase()) {
      case 'advanced':
        return 100;
      case 'intermediate':
        return 70;
      case 'beginner':
        return 50;
      default:
        return 0;
    }
  };

  return (
    <>
      <motion.div
       id='skills'
        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        // viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='min-h-screen bg-black text-white border-t-2 border-t-gray-900 px-4 py-20'>
        <h1 className='font-bold text-3xl sm:text-4xl text-center text-yellow-400 mb-16'>
          My <span className="text-white">Skills</span>
        </h1>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto'>
          {data.map((skill, index) => {
            const width = getProgressWidth(skill.proficiency);
            return (
              <div key={index} className='flip-card group'>
                <div className='flip-card-inner group-hover:rotate-y-180'>
                  <div className='flip-card-front p-6 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-28 h-28 object-contain mb-4'
                    />
                    <h2 className='text-lg font-semibold'>{skill.name}</h2>
                  </div>

                  <div className='flip-card-back p-6 bg-gray-800 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center transition-transform duration-500 ease-in-out'>
                    <h2 className='text-2xl font-bold mb-2'>{skill.name}</h2>
                    <p className='text-md font-semibold capitalize'>
                     {width }%
                    </p>

                    <div className='w-full bg-gray-300 rounded-full h-3 mt-3'>
                      <div
                        className='bg-blue-800 h-3 rounded-full transition-all duration-300'
                        style={{ width: `${width}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <style jsx="true">{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 90%;
          height: 200px;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .group:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </>
  );
};

export default Skills;
