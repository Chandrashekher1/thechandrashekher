import React from 'react'
import portfolio from "../Data/portfolioData.json";

const Projects = () => {
  return (
    <>
      <div id='projects' className='h-full text-white border-t-2 border-t-gray-900'>
        <h1 className='font-bold text-4xl ml-[45%] text-yellow-500'>
          PROJECTS
        </h1>

        <div className='flex flex-wrap ml-[25%]'>

          {portfolio.projects.map((project) => (
            <div className='ml-2 my-16 border border-gray-700 rounded-3xl shadow-2xl w-[70%]'>
              <img src={project.img} 
                className=' w-full rounded-lg h-68'
                alt="project"/>
              <div className=' p-4 bg-gray-800  rounded-b-3xl'>
                <h1 className='mx-6 font-bold text-2xl text-center text-yellow-400'>{project.name}</h1>
                <p className='mt-2 text-xl text-gray-400'>{project.description}</p>
                <div className='flex justify-between mx-6 mt-6'>
                  <a href={project.WebLink} className='font-bold border p-2 px-8 bg-purple-900 rounded-md '>WebSite</a>
                  <a href={project.GitHub} className='font-bold p-2 px-8 border bg-blue-900 rounded-md'>GitHub</a>
                </div>
                
              </div>
            </div>
          ))}
          
          
        </div>
    </div>

    </>
  )
}

export default Projects