import React from 'react'
import Footer from './Footer'

const Contact = () => {

  const handleForm =(e) => {
    e.preventDefault()
  }
  return (
    <>
      <div id='contact' className='h-full text-white border-t-2 border-t-gray-800'>
        <h1 className='font-bold text-4xl text-center my-8 text-white'>Contact <span className='text-yellow-500'>Me</span></h1>
        <p className='text-center text-xl'>I like to connect with like-minded people. If you just want to connect with me, please send me Message</p>

        <div className='mx-[25%] my-4 rounded-lg'>
            <form action="" className='flex flex-col text-white ' onSubmit={handleForm}> 
              <input type="text" 
                placeholder='Your Name '
                required
                className='p-4 rounded-md outline-none my-2 bg-gray-800'
                />
                <input type="email" 
                placeholder='Your Email '
                required
                className='p-4 rounded-md outline-none my-2 bg-gray-800'
                />
                <input type="text" 
                placeholder='Subject '
                required
                className='p-4 rounded-md outline-none my-2 bg-gray-800 '
                />
                <textarea name="" id="" className='p-4 outline-none my-2 bg-gray-800' placeholder='Write Message'></textarea>
              <button className='rounded-md p-2 bg-gray-900 font-semibold my-2 active:scale-105 '>SEND MESSAGE</button>

            </form>

        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Contact