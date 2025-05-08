import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [activeAction, setActiveAction] = useState('about')
  const [about, setAbout] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('user')

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  useEffect(() => {
    const fetchData = async () => {
      if (activeAction === 'about') {
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/about')
        const json = await response.json()
        setAbout(json)
      }
      if (activeAction === 'projects') {
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/project')
        const json = await response.json()
        setProjects(json)
      }
      if (activeAction === 'skills') {
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/skill')
        const json = await response.json()
        setSkills(json)
      }
    }
    if (!token) {
      navigate('/admin/login')
    }
    fetchData()
  }, [activeAction, token, navigate])

  return (
    <div className='min-h-screen text-white flex flex-col md:flex-row'>
      {/* Sidebar */}
      <div className='border-b md:border-r md:border-b-0 border-gray-700 w-full md:w-1/4 text-center bg-gray-950'>
        <h1 className='py-4 text-2xl border-b border-gray-700'>Admin <span>CP</span></h1>
        <ul className='my-4 md:my-16'>
          <li className='py-3 cursor-pointer border-b border-gray-700 hover:bg-blue-800' onClick={() => setActiveAction('about')}>About</li>
          <li className='py-3 cursor-pointer border-b border-gray-700 hover:bg-blue-800' onClick={() => setActiveAction('projects')}>Projects</li>
          <li className='py-3 cursor-pointer border-b border-gray-700 hover:bg-blue-800' onClick={() => setActiveAction('skills')}>Skills</li>
          <button className='py-3 w-full hover:bg-blue-800 border-b border-gray-700' onClick={handleLogout}>Logout</button>
        </ul>
      </div>

      {/* Content */}
      <div className='w-full p-4'>
        {activeAction === 'about' && (
          <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h1 className='text-2xl font-bold text-blue-500'>About</h1>
              <div className='mt-2 md:mt-0'>
                <button className='mr-4 px-4 py-2 bg-blue-700 rounded-md' onClick={() => navigate('/upload/about')}>NEW+</button>
                <button className='px-4 py-2 bg-blue-700 rounded-md'>Modify</button>
              </div>
            </div>
            <div className='border-t border-gray-800'>
              {about.map((item, index) => (
                <div key={index} className='my-6'>
                  <p className='text-xl font-semibold text-blue-400'>{item.name}</p>
                  <p className='mt-2 text-gray-400'>{item.bio}...</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeAction === 'projects' && (
          <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h1 className='text-2xl font-bold text-blue-500'>Projects</h1>
              <div className='mt-2 md:mt-0'>
                <button className='mr-4 px-4 py-2 bg-blue-700 rounded-md' onClick={() => navigate('/upload/project')}>NEW+</button>
                <button className='px-4 py-2 bg-blue-700 rounded-md'>Modify</button>
              </div>
            </div>
            <div className='border-t border-gray-800 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((item, index) => (
                <div key={index} className='bg-gray-950 p-4 rounded-md shadow hover:scale-105 transition-all'>
                  <img src={item.image} alt="project" className='w-full h-40 object-contain mb-2' />
                  <h2 className='text-blue-500 font-semibold'>{item.title}</h2>
                  {item.technologies.map((tech, idx) => (
                    <p key={idx} className='text-sm text-gray-400'>{tech}</p>
                  ))}
                  <button className='mt-4 px-4 py-2 bg-red-700 rounded-md w-full' onClick={() => navigate('/upload/project')}>Delete</button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeAction === 'skills' && (
          <>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <h1 className='text-2xl font-bold text-blue-500'>Skills</h1>
              <div className='mt-2 md:mt-0'>
                <button className='mr-4 px-4 py-2 bg-blue-700 rounded-md' onClick={() => navigate('/upload/skill')}>NEW+</button>
                <button className='px-4 py-2 bg-blue-700 rounded-md'>Modify</button>
              </div>
            </div>
            <div className='border-t border-gray-800 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {skills.map((item, index) => (
                <div key={index} className='bg-gray-950 p-4 rounded-md shadow hover:scale-105 transition-all text-center'>
                  <img src={item.imageUrl} alt="skill" className='w-24 mx-auto' />
                  <h1 className='mt-4 text-gray-300 text-lg font-semibold'>{item.name}</h1>
                  <p className='text-gray-400'>{item.proficiency}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
