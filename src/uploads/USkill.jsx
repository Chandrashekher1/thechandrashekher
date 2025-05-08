import React, { useState } from 'react';
import { X, SendHorizontal } from 'lucide-react';

const USkill = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    proficiency: '',
    imageUrl: ''
  });

  const [message, setMessage] = useState('');
  const token = localStorage.getItem('user')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://cp-portfolio-te4a.onrender.com/api/skill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Skill added successfully!');
        setFormData({ name: '', proficiency: '', imageUrl: '' });
        onClose && onClose();
      } else {
        setMessage(data.message || '❌ Failed to add skill.');
      }
    } catch (err) {
      setMessage('⚠️ Internal server error.');
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
        <h1 className='text-center text-2xl font-bold mb-6 text-white'>Add a New Skill</h1>
        {message && <p className="text-center text-green-400 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-white'>

          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          />

          <select
            name="proficiency"
            value={formData.proficiency}
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          >
            <option value="">Select Proficiency</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">advanced</option>
          </select>

          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className='p-2 bg-gray-800 rounded-md'
          />

          <button
            type="submit"
            className='mt-4 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md flex items-center justify-center gap-2 font-semibold'
          >
            Upload Skill <SendHorizontal size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default USkill;
