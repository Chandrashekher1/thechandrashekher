import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [activeAction, setActiveAction] = useState('about')
  const [about, setAbout] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('user')
  console.log(token);
  

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  useEffect(() => {
    const fetchData = async () => {
      if(activeAction === 'about'){
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/about')
        const json = await response.json()
        setAbout(json)
      }
      if(activeAction === 'projects'){
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/project')
        const json = await response.json()
        setProjects(json)
      }
      if(activeAction === 'skills'){
        const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/skill')
        const json = await response.json()
        setSkills(json)
      }
    }
    if(!token){
      navigate('/admin/login')
    }
    fetchData()
  },[activeAction,token,navigate])

  return (
    <div className='min-h-screen text-white flex '>
        <div className='border-r border-gray-700 w-1/4 text-2xl text-center bg-gray-950'>
            <h1 className=' py-4 cursor-pointer border-b border-b-gray-700 rounded-md '>Admin <span>CP</span></h1>
            <ul className='my-16'>
                <li className='py-4 cursor-pointer border-b border-b-gray-700 hover:bg-blue-800 active:bg-blue-800' onClick={() => setActiveAction('about')}>About</li>
                <li className='px-6 py-4 cursor-pointer border-b border-b-gray-700 hover:bg-blue-800' onClick={() => setActiveAction('projects')}>Projects</li>
                <li className='px-6 py-4 cursor-pointer border-b border-b-gray-700 hover:bg-blue-800' onClick={() => setActiveAction('skills')}>Skills</li>
                <button className='px-6 py-4 cursor-pointer hover:bg-blue-800 border-b border-b-gray-700' onClick={handleLogout}>Logout</button>
            </ul>
        </div>
        <div className='w-full'>
            {activeAction === 'about' && (
              <>
                <div className='flex px-6 py-4 my-1 justify-between'>
                  <h1 className='font-bold text-2xl text-blue-500'>About</h1>
                  <div className='mx-32'>
                    <button className='mx-16 px-4 py-2 font-semibold rounded-md bg-blue-700 ' onClick={() => navigate('/upload/about')}>NEW+</button>
                    <button className='px-4 py-2 bg-blue-700 font-semibold rounded-md'>Modify</button>
                  </div>
              </div>
                <div className='border-t border-t-gray-800 '>
                {about.map((item,index) => (
                  <div key={index} className='mx-8 my-8'>
                    <p className='text-2xl font-semibold text-blue-400'>{item.name}</p>
                    <p className='my-4 text-xl text-gray-400'>{item.bio.slice(0,400)} ....</p>
                  </div>
                
                ))}
              </div>
              </>
            )}

            {activeAction === 'projects' && (
              <>
                <div className='flex px-6 py-4 my-1 justify-between'>
                  <h1 className='font-bold text-2xl text-blue-500'>Projects</h1>
                  <div className='mx-32'>
                    <button className='mx-16 px-4 py-2 font-semibold rounded-md bg-blue-700 '>NEW+</button>
                    <button className='px-4 py-2 bg-blue-700 font-semibold rounded-md'>Modify</button>
                  </div>
              </div>
              <div className='border-t border-t-gray-800 flex'>
                {projects.map((item,index) => (
                  <div key={index} className='mx-4 my-8 shadow rounded-md bg-gray-950 p-4 hover:scale-105 cursor-pointer'>
                    <div className=''>
                      <img src={item.image} alt="project" className='w-80 h-40 object-contain' />
                      <h2 className='text-blue-500'>{item.title}</h2>
                      {item.technologies.map((project1,index) => (
                        <p key={index} className='text-sm flex text-gray-400'>{project1}</p>
                      ))}
                    </div>
                    
                  </div>
                
                ))}
              </div>
              
              </>
            )}

            {activeAction === 'skills' && (
              <>
                <div className='flex px-6 py-4 my-1 justify-between'>
                  <h1 className='font-bold text-2xl text-blue-500'>SKills</h1>
                  <div className='mx-32'>
                    <button className='mx-16 px-4 py-2 font-semibold rounded-md bg-blue-700 '>NEW+</button>
                    <button className='px-4 py-2 bg-blue-700 font-semibold rounded-md'>Modify</button>
                  </div>
              </div>
              <div className='border-t border-t-gray-800 flex'>
                {skills.map((item,index) => (
                  <div key={index} className='mx-4 my-8 shadow rounded-md bg-gray-950 p-4 hover:scale-105 cursor-pointer'>
                    <div className=''>
                      <img src={item.imageUrl} alt="skill" className='w-40'/>
                      <h1 className='text-center mt-4 text-gray-300'>{item.name}</h1>
                      <p className='text-center text-gray-300 mt-2'>{item.proficiency}</p>
                    </div>
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