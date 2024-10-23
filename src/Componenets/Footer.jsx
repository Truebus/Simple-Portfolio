import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='font-bold mb-2 text-2xl'>Yousof</h3>
            <p className='text-gray-400'>
              Full-stack Developer based in the USA, specializing in web and software development.
            </p>
          </div>
          <div className='flex-grow mb-4 md:mb-0'>
            <form className='flex items-center justify-center'>
              <label className='sr-only' htmlFor='email'>Email address</label>
              <input
                id='email'
                type='email'
                className='flex-grow p-2 rounded-l-lg bg-gray-800 border border-gray-600
                focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition'
                placeholder='Enter your email'
              />
              <button
                type='submit'
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 rounded-r-lg transition
                hover:opacity-80 focus:outline-none'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}