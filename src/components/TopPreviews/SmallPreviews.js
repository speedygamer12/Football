import React from 'react';
// import CarouselImage from "../../assets/Ball.svg"
import MiniCard from './MiniCard';

const SmallPreviews = () => {
  return (
    <div className='md:py-5 md:pl-8 md:h-[580px] flex flex-col w-full md:w-1/3' >
        <MiniCard />
        <div className='md:pt-[32px] w-full pt-5' >
            <MiniCard />
        </div>
    </div>
  )
}

export default SmallPreviews