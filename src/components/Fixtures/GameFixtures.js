import React from 'react';
import { useNavigate } from 'react-router-dom';
import FixtureComp from './FixtureComp';


const GameFixtures = ({gameWeek, fixtures, leaguepage, result, tab, isSuccess}) => {
  const navigate = useNavigate();
  return (
    <div className='pt-5 md:pt-10' >
        <div className='smallLaptop:w-4/5 w-full' >
            <div className='flex justify-between pb-3 md:pb-10' >
                <h1 className='font-bold text-[20px] leadimg-[24px] md:text-[24px] md:leadimg-[28.8px] text-[#000A0F]' >Game week {gameWeek}</h1>
                {!leaguepage && <button onClick={()=>navigate(`/league/${tab}`)} className='text-white bg-[#003049] font-semibold text-[16px] leading-[24px] rounded-[4px] h-[40px] w-[121px] md:h-[48px] md:w-[129px] hover:bg-[#1D5775]' >League page</button>}
            </div>
            {fixtures?.map((val, index) => <FixtureComp key={val?._id} fixture={val} result={result} isSuccess={isSuccess} />)}
        </div>
    </div>
  )
}

export default GameFixtures