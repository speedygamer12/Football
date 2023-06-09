import React from 'react'
import MiniCard from '../TopPreviews/MiniCard'

const LeagueBody = () => {
  return (
    <div className='md:py-10 py-5 w-full' >
        <div className='flex w-full flex-col md:flex-row' >
            <div className='md:w-2/3 w-full py-3 md:py-0' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
            <div className='md:w-1/3 w-full md:ml-5' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
        </div>
        <div className='flex w-full flex-col md:flex-row md:my-7' >
            <div className='md:w-1/3 w-full py-3 md:py-0' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
            <div className='md:w-2/3 w-full md:ml-5' >
                <MiniCard cardHeight={320} imageHeight={208} textHeight={112} />
            </div>
        </div>
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
        <div className='flex justify-center pt-5 md:pt-10' >
            <button className='text-white bg-[#003049] font-semibold text-[16px] leading-[24px] rounded-[4px] h-[40px] w-[121px] md:h-[48px] md:w-[129px] hover:bg-[#1D5775]' >Load more</button>
        </div>
    </div>
  )
}

export default LeagueBody