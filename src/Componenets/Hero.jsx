import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src='https://th.bing.com/th/id/OIP.Fn8t0lBwCe7lLXdp2Wh9JwHaQ3?rs=1&pid=ImgDetMain' alt='not'
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transistion-transform duration-300
        hover:scale-105'/>
        <h1 className='text-4xl font-bold'>I'm{" "}
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Versha Yourself</span>
        ,Full Stack Developer
        </h1>
        <p className='mt-4n text-lg text-gray-300'>I specialize in building modern and responsive web applications.</p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
            transform transistion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with Me</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
            transform transistion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
    
  )
}
