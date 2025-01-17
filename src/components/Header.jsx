import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleActive } from '../store/toggleSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogo = () => {
        navigate("/")
        window.location.reload();
    }

    const handleCli = () => {
        dispatch(toggleActive())
    }

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className='flex justify-between text-gray-100 p-4 text-lg font-semibold sticky top-0 bg-black'>
                <div className='ml-6'>
                    <p className='font-bold text-xl cursor-pointer' onClick={handleLogo}>CP<span className='text-yellow-500'>03</span></p>
                </div>
                <div>
                    <nav>
                        <ul className='flex'>
                            <li className='mx-8 cursor-pointer hover:text-yellow-500 scale-105' onClick={() => handleScroll('home')}>Home</li>
                            <li className='mx-8 cursor-pointer hover:text-yellow-500' onClick={() => handleScroll('about')}>About</li>
                            <li className='mx-8 cursor-pointer hover:text-yellow-500' onClick={() => handleScroll('projects')}>Projects</li>
                            <li className='mx-8 cursor-pointer hover:text-yellow-500' onClick={() => handleScroll('skills')}>Skills</li>
                            <li className='mx-8 cursor-pointer hover:text-yellow-500' onClick={() => handleScroll('contact')}>Contact</li>
                            <li className='hover:text-yellow-500 cursor-pointer' onClick={handleCli}>CLI</li>
                        </ul>
                    </nav>
                </div>
                <div className=''>
                    <button className='p-1 mx-6 rounded-md px-4 cursor-pointer bg-yellow-500 hover:scale-110'><a href="mailto:cpsaw999041@gmail.com" >Hire Me</a></button>
                </div>
            </div>
        </>
    )
}

export default Header
