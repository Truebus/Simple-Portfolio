import React from 'react'

export const About = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div className='container mx-auto px-8md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src='https://th.bing.com/th/id/OIP.Fn8t0lBwCe7lLXdp2Wh9JwHaQ3?rs=1&pid=ImgDetMain' alt='not'
                className='w-72 h-80 object-cover mb-8 md:mb:0'/>
                <div className='flex-1'>
                <p className='text-lg mb-8'>I am a passionate full-stack developer with a focus on building modern and responsive web applications.With a strong foundation in both
                    frontend and backend technologies.I strive to create seamless and efficient user experiences.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor='htmmlandcss' className='w-2/12'>Html&CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-300 to-blue-500 h-2.5 rounded-full
                            transform transistion-transform duration-300 hover:scale-105 w-10/12'>
                         </div>
                         </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmmlandcss' className='w-2/12'>React JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-300 to-blue-500 h-2.5 rounded-full
                            transform transistion-transform duration-300 hover:scale-105 w-10/12'>
                         </div>
                         </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor='htmmlandcss' className='w-2/12'>Node JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-300 to-blue-500 h-2.5 rounded-full
                            transform transistion-transform duration-300 hover:scale-105 w-10/12'>
                         </div>
                         </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}