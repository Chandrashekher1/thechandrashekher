import React from 'react'

const Skills = () => {
  return (
    <>
      <div id='skills' className='h-full text-white my-16'>
      <h1 className='font-bold text-4xl ml-[45%] my-8 text-yellow-500'>Skills</h1>
      <div className='ml-[14%]'>
            <div className='flex my-4 mx-8 flex-wrap'>
              <section className='mx-16'>
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="" />
                <h3 className='ml-8 mt-4'>HTML</h3>
              </section>
              <section className='mx-16'>
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="" />
                <h3 className='ml-8 mt-4'>CSS</h3>
              </section>
              <section className='mx-16'>
                <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="" />
                <h3 className='ml-2 mt-4'>JAVASCRIPT</h3>
              </section>
              <section className='mx-16'>
                <img src="https://1000logos.net/wp-content/uploads/2020/08/Git-Emblem-1080x675.jpg" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="" />
                <h3 className='ml-8 mt-4'>GIT</h3>
              </section>
              <section className='mx-16'>
                <img src="https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="react" />
                <h3 className='ml-8 mt-4'>REACT</h3>
              </section>
              <section className='mx-16 my-8'>
                <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="react" />
                <h3 className='ml-4 mt-4'>GITHUB</h3>
              </section>
              <section className='mx-16 my-8'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s" 
                  className='rounded-full w-24 h-24 border border-teal-500'
                alt="react" />
                <h3 className='ml-2 mt-4'>TailWind CSS</h3>
              </section>
            </div>

      </div>
      
    </div>
  
    </>
  )
}

export default Skills