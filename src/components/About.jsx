import React from 'react'
// import useData from '../Hooks/useData'
import portfolio from "../Data/portfolioData.json";

const About = () => {
  
 console.log(portfolio);
  return (
    <>
      <div id='about' className='h-full mb-16 text-white border-t-2 border-t-gray-800'>
      <h1 className='font-bold text-4xl text-center'>
        About<span className='text-yellow-500'> Me</span>
      </h1>

      <div className='flex justify-between ml-40 my-16'>
        <div>
          <img src="assets/profile.jpg"
             alt="" 
              className='rounded-full shadow-xl shadow-teal-600 object-cover'
              />
        </div>
        <p className=' border  text-xl border-blue-400 rounded-xl p-8 mx-40'>
          {portfolio.summary}
        </p>
      </div>
    </div>

    </>
  )
}

export default About