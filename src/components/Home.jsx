import React, { useEffect, useState } from "react";
import portfolio from "../Data/portfolioData.json";
import SocialIcons from "./SocilIcons";

const Home = () => {
  const [dynamicText, setDynamicText] = useState("2nd Year Student")

  useEffect(() => {
    const texts = ["2nd Year Student", "Frontend Developer","Tech Enthusiast"]
    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % texts.length
      setDynamicText(texts[index])
    }, 3000)

    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <div id="home" className="h-full flex flex-col-reverse justify-between mx-[15%] my-40 md:flex-row">
        <div className="text-white text-4xl">
          <span className="text-yellow-500 text-sm my-4 gap-4">HELLO!</span>
          <h2 className="font-semibold"> I'm</h2>
          <h1 className="font-bold my-4">{portfolio.name}</h1>
          <p>And I'm <span className="font-semibold text-4xl text-yellow-500">{dynamicText}</span></p>
          <div className="flex my-8">
            <button className="bg-yellow-600 rounded-xl text-lg px-4 font-semibold hover:scale-110">
            <a href="mailto:cpsaw999041@gmail.com" >Hire Me</a>
            </button>
            <button className="bg-yellow-600 rounded-xl text-lg p-2 mx-8 px-4 font-semibold hover:scale-110" >
              <a href={portfolio.resume}>Resume</a>
            </button>
          </div>
          <div className="mt-16 -ml-16">
            <SocialIcons/>
          </div>
        </div>
        <div className="mb-10 lg:mb-0">
          <img
            src="assets/profile.jpg"
            alt="Profile"
            className="rounded-full shadow-xl shadow-teal-600 object-cover h-60 w-60 sm:h-80 sm:w-80 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
