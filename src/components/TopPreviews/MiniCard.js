import React from 'react';
import CarouselImage from "../../assets/Ball.svg";

const MiniCard = ({ cardHeight, maxCardWidth, imageHeight, textHeight }) => {
  return (
    <div className={`group border-[1px] border-[#EAECED] md:border-none md:h-[${cardHeight}px] ${maxCardWidth && "md:max-w-[421px]"} w-full flex md:flex-col flex-row bg-[#F9FBFC] md:bg-inherit rounded-[4px] md:rounded-[0px] md:justify-normal justify-between`} >
        <img src={CarouselImage} alt='Advert' className={`mt-5 md:mt-0 pr-2 md:pr-0 object-cover md:h-[${imageHeight}px] h-[64px] w-[74px] md:w-full order-last md:order-none`} />
        <div className={`p-5 md:bg-[#F9FBFC] md:h-[${textHeight}px] md:rounded-b-[4px] md:border-b md:border-x md:border-[#EAECED] md:order-none`} >
            <p className='text-[#000A0F] font-semibold text-[16px] leading-[24px] md:text-[16px] md:leading-[24px] group-hover:text-[#1D5775] ' >Luton Vs Wrexham: All you need to know</p>
            <div className='flex justify-between items-center py-3' >
                <span className='text-[#4E575C] text-[14px] leading-[21px] md:text-[14px] md:leading-[21px] font-semibold' >Premier league</span>
                <span className='text-[#6A767D] text-[14px] leading-[21px] md:text-[14px] md:leading-[21px]' >2 hours ago</span>
            </div>
        </div>
    </div>
  )
}

export default MiniCard