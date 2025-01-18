import React from 'react'
import SocialIcons from './SocilIcons'

const Footer = () => {

  return (
    <div className='text-white bg-gray-950 p-8'> 
      <h2 className='text-center font-bold text-xl'>@Chandrashekher Prasad</h2>
      <nav className=' mt-8 md:mx-[38%]'>
        <ul className=''>
          <SocialIcons/>
        </ul>
        {/* <li className='hover:text-yellow-500 cursor-pointer mx-4' onClick={handleCli}>CLI</li> */}

      </nav>
    </div>
  )
}

export default Footer