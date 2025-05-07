import React, { useState } from 'react'
import { X, SendHorizontal } from 'lucide-react'

const AboutModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    bio: '',
    github: '',
    linkedin: '',
    twitter: '',
    portfolio: '',
    resume: '',
    image: null
  })
  const token = localStorage.getItem('user')
  console.log(token);
  

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append('name', formData.name)
    form.append('email', formData.email)
    form.append('bio', formData.bio)
    form.append('profession', JSON.stringify([formData.profession]))
    form.append('image', formData.image)
    form.append('socialLinks', JSON.stringify({
      github: formData.github,
      linkedin: formData.linkedin,
      twitter: formData.twitter,
      portfolio: formData.portfolio,
      resume: formData.resume
    }))

    try {
      const res = await fetch('https://cp-portfolio-te4a.onrender.com/api/about', {
        method: 'POST',
        'Authorization': `${token}`,
        body: form
      })
      const result = await res.json()
      console.log(result)
      alert("About data submitted successfully!")
      onClose()
    } catch (err) {
      console.error(err)
      alert("Submission failed.")
    }
  }

  return (
    <div className='absoulte inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 '>
      <div className='bg-gray-900 p-8 rounded-lg w-[90%] max-w-2xl relative'>
        <button onClick={onClose} className='absolute top-4 right-4 text-white'>
          <X />
        </button>
        <h1 className='text-center text-2xl font-bold mb-6 text-white'>Fill All the Details</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white ' encType="multipart/form-data">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <textarea name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' rows={4} />
          <input type="file" name="image" onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />

          <h2 className='mt-4 font-semibold text-lg text-blue-400'>Social Links</h2>
          <input type="url" name="github" placeholder="GitHub URL" value={formData.github} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="url" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="url" name="twitter" placeholder="Twitter URL" value={formData.twitter} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="url" name="portfolio" placeholder="Portfolio URL" value={formData.portfolio} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />
          <input type="url" name="resume" placeholder="Resume URL" value={formData.resume} onChange={handleChange} required className='p-2 bg-gray-800 rounded-md' />

          <button type="submit" className='mt-4 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold'>
            Submit <SendHorizontal size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AboutModal
