import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      email: email.current.value,
      password: password.current.value,
    }

    try {
      const response = await fetch('https://cp-portfolio-te4a.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const json = await response.json();
      localStorage.setItem('user',json.token)
      navigate('/admin/dashboard')
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <div className='text-white min-h-screen flex items-center justify-center'>
      <form
        className='flex flex-col shadow-cyan-700 shadow p-16 rounded-md w-[30%] bg-gray-900'
        onSubmit={handleLogin}
      >
        <h1 className='text-center font-bold text-3xl text-yellow-600'>Sign In</h1>

        <label className='text-lg font-semibold my-2 text-yellow-500'>Email</label>
        <input
          type='email'
          required
          placeholder='Ex: user@gmail.com'
          className='bg-gray-900 px-2 py-2 border border-cyan-800 rounded-md outline-none text-gray-300'
          ref={email}
        />

        <label className='font-semibold text-lg mt-4 text-yellow-500'>Password</label>
        <input
          type='password'
          required
          placeholder='Ex: 12345'
          className='bg-gray-900 p-2 border border-cyan-800 rounded-md outline-none text-gray-300'
          ref={password}
        />

        <button
          type='submit'
          className='my-8 p-2 rounded-md cursor-pointer bg-yellow-700 font-semibold text-lg hover:bg-yellow-600 active:scale-95'
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default Admin;
