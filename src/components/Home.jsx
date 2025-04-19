import React, { useEffect, useState } from "react";
import SocialIcons from "./SocilIcons"

const Home = ({data}) => {
  const [dynamicText, setDynamicText] = useState("2nd Year Student");

  console.log(data);
  

  useEffect(() => {
    if (data?.length > 0 && data[0].profession.length > 0) {
      let index = 0;
      setDynamicText(data[0].profession[0]);

      const interval = setInterval(() => {
        index = (index + 1) % data[0].profession.length;
        setDynamicText(data[0].profession[index]);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [data]);


  return (
    <div
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-10 md:px-16 lg:px-28 py-10"
    >
      <div className="text-white text-center md:text-left w-full md:w-1/2 mx-16">
        <p className="text-yellow-500 text-base sm:text-lg mb-2">HELLO!</p>
        <h2 className="text-2xl sm:text-3xl font-semibold">I'm</h2>

        {data?.length > 0 && (
          <>
            <h1 className="font-bold text-3xl sm:text-5xl my-2 sm:my-4">{data[0].name}</h1>
            <p className="text-lg sm:text-xl">
              And I'm{" "}
              <span className="font-semibold text-yellow-500 text-2xl sm:text-3xl">
                {dynamicText}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <a
                href={`mailto:${data[0].email}`}
                className="bg-yellow-600 text-white rounded-xl text-lg px-6 py-2 font-semibold hover:scale-105 transition-transform"
              >
                Hire Me
              </a>
              <a
                href={data[0].socialLinks.resume}
                className="bg-yellow-600 text-white rounded-xl text-lg px-6 py-2 font-semibold hover:scale-105 transition-transform"
              >
                Resume
              </a>
            </div>
          </>
        )}

        <div className="mt-10 mx-16 md:mx-0">
          <SocialIcons />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="assets/profile.jpg"
          alt="Profile"
          className="rounded-full shadow-xl shadow-teal-600 object-cover h-64 w-64 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
        />
      </div>
    </div>
  );
};

export default Home;
