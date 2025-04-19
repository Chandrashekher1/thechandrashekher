import React from 'react';

const About = ({data}) => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen text-white border-t-2 border-t-gray-800 px-4 sm:px-8 md:px-16 lg:px-32 py-16"
      >
        <h1 className="font-bold text-3xl sm:text-4xl text-center mt-12 sm:mt-20">
          About<span className="text-yellow-500"> Me</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 mt-12 sm:mt-24">
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src="assets/profile.jpg"
              alt="Profile"
              className="rounded-full shadow-xl shadow-teal-600 object-cover w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          <div className="text-base sm:text-lg md:text-xl border border-blue-400 bg-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 w-full md:w-2/3">
            <p className="leading-relaxed">
              {data.loading ? 'Loading...' : data[0]?.bio}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
