import React from 'react';

const FixtureComp = ({fixture}) => {
  return (
    <div className='border-b border-[#CFD5D8] py-3 flex h-[104px] md:h-[64px] justify-between md:justify-center hover:bg-[#F1F3F4]' >
        <div className='flex md:flex-row flex-col md:items-center justify-between md:justify-normal md:mx-auto' >
            <p className='text-[16px] text-[[#000A0F]] leading-[24px] flex items-center' ><span className='md:order-none order-last px-1' >{fixture?.teams?.home?.name}</span> <img src={fixture?.teams?.home?.logo} alt="Gunners" className='w-[32px] h-[32px]' /> </p>
            <p className='w-[12px] h-[2px] bg-[#000A0F] md:block hidden md:mx-3' ></p>
            <p className='text-[16px] text-[#000A0F] leading-[24px] flex items-center' ><span className='order-last px-1' >{fixture?.teams?.away?.name}</span> <img src={fixture?.teams?.away?.logo} alt="City" className='w-[32px] h-[32px]' /></p>
        </div>
        <div className='flex md:flex-row flex-col md:items-center justify-between md:justify-normal md:ml-auto' >
            <div className='text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] h-[34px] text-[#4E575C] md:h-[40px] bg-[#DBE0E2] flex justify-center items-center md:mx-3 px-3' >
                Sat May 13, 2023 
            </div>
            <div className='text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] h-[34px] text-[#4E575C] md:h-[40px] bg-[#DBE0E2] flex justify-center items-center md:mx-3 px-3' >
                17:30pm (UK)
            </div>
        </div>
    </div>
  )
}

export default FixtureComp