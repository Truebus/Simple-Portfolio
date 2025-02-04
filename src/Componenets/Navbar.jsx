import { Link } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>YoursOf</div>
            <div className='space-x-6'>
                <Link to="/hero" className='hover:text-gray-400'>Home</Link>
                <Link to="/about" className='hover:text-gray-400'>About</Link>
                <Link to="/services" className='hover:text-gray-400'>Services</Link>
                <Link to="/blog" className='hover:text-gray-400'>Blog</Link>
                <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
            transform transistion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar