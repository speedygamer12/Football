import React from 'react';
import FixtureComp from './FixtureComp';


const GameFixtures = () => {
  return (
    <div className='pt-5 md:pt-10' >
        <div className='md:w-4/5 w-full' >
            <div className='flex justify-between pb-3 md:pb-10' >
                <h1 className='font-bold text-[20px] leadimg-[24px] md:text-[24px] md:leadimg-[28.8px] text-[#000A0F]' >Game week 15</h1>
                <button className='text-white bg-[#003049] font-semibold text-[16px] leading-[24px] rounded-[4px] h-[40px] w-[121px] md:h-[48px] md:w-[129px]' >League page</button>
            </div>
            {[...new Array(9)].map((val, index) => <FixtureComp key={index} />)}
        </div>
    </div>
  )
}

export default GameFixtures