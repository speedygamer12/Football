import React from 'react'
import CarouselPreview from './CarouselPreview'
import SmallPreviews from './SmallPreviews'

const TopPreviews = () => {
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] ' >Top Previews</h1>
        <div className='flex md:flex-row flex-col w-full' >
            <CarouselPreview />
            <SmallPreviews />
        </div>
    </div>
  )
}

export default TopPreviews