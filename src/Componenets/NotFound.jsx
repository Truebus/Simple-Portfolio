import React from 'react'

export const NotFound = () => {
  return (
    <div className='h-80 w-full  flex-col items-center justify-center text-center'>
        <h1 className='text-red-600 text-6xl mt-32'>404 Not Found</h1>
        <div>
        <p className='text-red-600  text-xl'>The page you are looking for does not exit.</p>
    </div>
    </div>
  )
}