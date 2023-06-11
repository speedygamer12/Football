import React from 'react'
import MiniCard from '../TopPreviews/MiniCard'

const RelatedPreviews = () => {
  return (
    <div className='md:py-16 py-8 bg-[#EAECED] p-5 md:px-10 w-full'>
        <h1 className='md:pb-8 pb-4 font-bold md:text-[2rem] text-[1.5rem] leading-[120%] text-[#000A0F]' >Related</h1>
        <div className='flex w-full flex-col md:flex-row' >
            <div className='md:w-1/3 w-full py-3 md:py-0' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
            <div className='md:w-1/3 w-full md:ml-5' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
            <div className='md:w-1/3 w-full pt-3 md:pt-3 md:ml-5' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
        </div>
    </div>
  )
}

export default RelatedPreviews