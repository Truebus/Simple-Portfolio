import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-black text-white py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-start md:space-x-12'>
          <div className='flex-1'>
            <h3>Let's Talk</h3>
            <p>I'm open to discussing web development projects and partnership opportunities.</p>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center'>
              <FaEnvelope className='inline-block text-gray-400 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>youremail@example.com</a>
            </div>
            <div className='flex items-center'>
              <FaPhone className='inline-block text-gray-400 mr-2' />
              <span>+91 76483738292</span>
            </div>
            <div className='flex items-center'>
              <FaMapMarkedAlt className='inline-block text-gray-400 mr-2' />
              <span>Mohali</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <div className='space-y-4'>
             <div>
                <label htmlFor='name'>Your Name</label>
                <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400' placeholder='enter it'/>
             </div>
             <div>
                <label htmlFor='email' className='block mb-2'>Your Email</label>
                <input type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400' placeholder='enter it'/>
             </div>
             <div>
                <label htmlFor='message'>Your Message</label>
                <textarea type='text' className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                focus:border-green-400' rows="5" placeholder='enter it'/>
             </div>
             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
            transform transistion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
