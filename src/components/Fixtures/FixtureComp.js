import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';

const FixtureComp = ({fixture, result, isSuccess}) => {
  return (
    <Link to={(isSuccess && localStorage.getItem("token")) ? `/article/admin/${fixture?.fixture?.id}` : `/article/${fixture?.fixture?.id}`} >
        <div className='border-b border-[#CFD5D8] py-3 flex h-[104px] md:h-[74px] justify-between md:justify-center hover:bg-[#F1F3F4]' >
            <div className='flex md:flex-row flex-col md:items-center justify-between md:justify-normal md:mx-auto' >
                <p className='text-[16px] text-[#000A0F] leading-[24px] flex items-center md:justify-end md:w-[240px]' ><span className='md:order-none order-last px-1' >{fixture?.teams?.home?.name}</span> <img src={fixture?.teams?.home?.logo} alt="Gunners" className='w-[32px] h-[32px]' /> {result && <span className='md:order-none order-last px-2 font-semibold' >{fixture?.goals?.home}</span> }</p>
                <p className='w-[12px] h-[2px] bg-[#000A0F] md:block hidden md:mx-3' ></p>
                <p className='text-[16px] text-[#000A0F] leading-[24px] flex items-center md:justify-start md:w-[240px]' ><span className='order-last px-1' >{fixture?.teams?.away?.name}</span> <img src={fixture?.teams?.away?.logo} alt="City" className='w-[32px] h-[32px]' />{result && <span className='md:order-first order-last px-2 font-semibold' >{fixture?.goals?.away}</span>}</p>
            </div>
            <div className='flex md:flex-row flex-col md:items-center justify-between md:justify-normal md:ml-auto' >
                <div className='text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] h-[34px] text-[#4E575C] md:h-[40px] bg-[#DBE0E2] flex justify-center items-center md:mx-3 px-3' >
                    {dayjs(fixture?.fixture?.date).format("ddd MMM DD, YYYY")} 
                </div>
                <div className='text-[12px] leading-[18px] md:text-[16px] md:leading-[24px] h-[34px] text-[#4E575C] md:h-[40px] bg-[#DBE0E2] flex justify-center items-center md:mx-3 px-3' >
                    {dayjs(fixture?.fixture?.date).format("HH:mma")} (UK)
                </div>
            </div>
        </div>
    </Link>
  )
}

export default FixtureComp