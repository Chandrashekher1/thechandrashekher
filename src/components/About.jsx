import React from 'react';
// import useData from '../Hooks/useData';
import portfolio from '../Data/portfolioData.json';

const About = () => {
  return (
    <>
      <div id="about" className="h-full mb-16 text-white border-t-2 border-t-gray-800 px-6 md:px-16 lg:px-32">
        <h1 className="font-bold text-4xl text-center mb-8">
          About<span className="text-yellow-500"> Me</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between md:gap-12 lg:gap-24 my-16">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src="assets/profile.jpg"
              alt="Profile"
              className="rounded-full shadow-xl shadow-teal-600 object-cover w-40 h-40 mb-16 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          <div className="text-xl border border-blue-400 rounded-xl p-6 lg:p-8 w-full md:w-2/3">
            <p className="leading-relaxed">{portfolio.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
