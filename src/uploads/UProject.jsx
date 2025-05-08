import React, { useState } from 'react';
import { X, SendHorizontal } from 'lucide-react';

const UProject = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    livelink: '',
    repolink: '',
    image: null,
  });

  const token = localStorage.getItem('user');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
  
    const techArray = formData.technologies.split(',').map(t => t.trim());
    techArray.forEach(tech => {
      form.append('technologies', tech)
    });
  
    form.append('livelink', formData.livelink);
    form.append('repolink', formData.repolink);
    form.append('image', formData.image);
  
    try {
      const res = await fetch('https://cp-portfolio-te4a.onrender.com/api/project', {
        method: 'POST',
        headers: {
          'Authorization': `${token}`
        },
        body: form
      });
  
      const result = await res.json();
      console.log(result);
      alert("Project uploaded successfully!");
      onClose && onClose();
    } catch (err) {
    //   console.error(err);
      alert("Failed to upload project.");
    }
  };
  

  return (
    <div className='absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-gray-900 p-8 rounded-lg w-[90%] max-w-2xl relative'>
        {onClose && (
          <button onClick={onClose} className='absolute top-4 right-4 text-white'>
            <X />
          </button>
        )}
        <h1 className='text-center text-2xl font-bold mb-6 text-white'>Add a New Project</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white'>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className='p-2 bg-gray-800 rounded-md'
          />
          <input
            type="text"
            name="technologies"
            placeholder="Technologies (comma-separated)"
            value={formData.technologies}
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          />
          <input
            type="url"
            name="livelink"
            placeholder="Live Site URL"
            value={formData.livelink}
            onChange={handleChange}
            className='p-2 bg-gray-800 rounded-md'
          />
          <input
            type="url"
            name="repolink"
            placeholder="Repository URL"
            value={formData.repolink}
            onChange={handleChange}
            className='p-2 bg-gray-800 rounded-md'
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          />

          <button
            type="submit"
            className='mt-4 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold'
          >
            Upload Project <SendHorizontal size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UProject;
