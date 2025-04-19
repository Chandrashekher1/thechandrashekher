import React from 'react'

const Projects = ({data}) => {
  return (
    <>
      <div id='projects' className='text-white border-t-2 border-t-gray-900 px-4 py-16'>
        <h1 className='text-center font-bold text-3xl sm:text-4xl text-yellow-500 mb-12'>
          PROJECTS
        </h1>

        <div className='flex flex-col items-center gap-12'>
          {data.map((project, index) => (
            <div
              key={index}
              className='w-full max-w-3xl border border-gray-700 rounded-3xl shadow-2xl overflow-hidden bg-gray-900 hover:scale-[1.01] transition-transform duration-300'
            >
              <img
                src={project.image}
                className='w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-3xl'
                alt={project.name}
              />
              <div className='p-6'>
                <h1 className='text-center font-bold text-2xl text-yellow-400'>{project.name}</h1>
                <p className='mt-4 text-base sm:text-lg text-gray-300'>{project.description}</p>
                
                <div className='flex justify-between flex-wrap gap-4 mt-6'>
                  <a
                    href={project.livelink}
                   
                    className='flex-1 text-center font-bold border border-purple-700 py-2 px-6 bg-purple-900 rounded-md active:scale-95 hover:bg-purple-800 transition-all'
                  >
                    Website
                  </a>
                  <a
                    href={project.repolink}
                    className='flex-1 text-center font-bold border border-purple-700 py-2 px-6 bg-blue-900 rounded-md active:scale-95 hover:bg-blue-800 transition-all'
                  >
                    GitHub
                  </a>
                </div>

                <div className='flex flex-wrap justify-center mt-6'>
                  {project.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className='m-2 px-4 py-1 border border-purple-600 rounded-full bg-blue-700 text-sm hover:scale-105 transition-transform cursor-pointer'
                    >
                      {tech}
                    </p>
                  ))}
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
