import React from 'react';
// import CarouselImage from "../../assets/Ball.svg"
import MiniCard from './MiniCard';

const SmallPreviews = ({data, isSuccess}) => {
  return (
    <div className='smallLaptop:py-5 smallLaptop:pl-8 smallLaptop:h-[580px] flex flex-col w-full smallLaptop:w-1/3' >
        {data?.map((val, index) => <div key={val?._id} className={`${index !== 0 && "smallLaptop:pt-[32px] pt-5"} w-full`} ><MiniCard home isSuccess={isSuccess} data={val} /></div>)}
    </div>
  )
}

export default SmallPreviews