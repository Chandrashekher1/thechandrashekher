import React from 'react'

const Skills = ({data}) => {

  return (
    <>
      <div id='skills' className='min-h-screen text-white border-t-2 border-t-gray-900 px-4 py-20'>
        <h1 className='font-bold text-3xl sm:text-4xl text-center text-yellow-500 mb-12'>Skills</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {data.map((value, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center text-center p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300'
            >
              <img
                src={value.imageUrl}
                alt={value.name}
                className='w-20 h-20 object-contain mb-4'
              />
              <h1 className='text-lg font-semibold'>{value.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
