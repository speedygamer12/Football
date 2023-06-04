import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

const NotFound = () => {
  return (
    <div className='h-screen' >
        <NavBar />
        <div className='h-[80%] flex items-center justify-center ' >
          <div className='w-[600px] shadow-[0px_15px_30px_40px_rgba(253,253,253,.5)] rounded-[20px] h-[500px] mx-3 p-5' >
            <div className='flex justify-center items-center h-full' >
                <p className='font-semibold text-[24px] md:text-[32px]' >Page not found</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NotFound