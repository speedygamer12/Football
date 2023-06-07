import React from 'react';
import EPL from "../../assets/EPL.svg"

const LeagueHeader = () => {
  return (
    <div className='py-5 flex items-center' >
        <div className='md:w-[200px] md:h-[200px] h-[64px] w-[64px] rounded-[12px] border border-[#A6AFB4] flex items-center justify-center ' >
            <img src={EPL} alt="League" className='md:w-[160px] md:h-[160px] w-[40px] h-[40px]' />
        </div>
        <h1 className='font-bold text-[24px] md:text-[48px] leading-[28.8px] md:leading-[56px] pl-4 md:pl-16' >English Premier League</h1>
    </div>
  )
}

export default LeagueHeader