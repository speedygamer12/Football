import dayjs from 'dayjs';
import React from 'react';
import { Link } from 'react-router-dom';

const MiniCard = ({ cardHeight, maxCardWidth, imageHeight, textHeight, home, league, data, isSuccess }) => {
  return (
    <Link to={(isSuccess && localStorage.getItem("token")) ? `/article/admin/${data?.fixture}` : `/article/${data?.fixture}`} >
    <div className={`group border-[1px] border-[#EAECED] md:border-none ${home ? `md:h-[274px]` : `md:h-[320px]`} ${maxCardWidth && "md:max-w-[421px]"} w-full flex md:flex-col flex-row bg-[#F9FBFC] md:bg-inherit rounded-[4px] md:rounded-[0px] md:justify-normal justify-between`} >
        <img src={data?.image} alt='Advert' className={`mt-5 md:mt-0 pr-2 md:pr-0 object-cover ${home ? `md:h-[185px]` : `md:h-[208px]`} h-[64px] w-[20%] md:w-full order-last md:order-none`} />
        <div className={`p-5 md:bg-[#F9FBFC] ${home ? `md:h-[89px]` : `md:h-[112px]`} md:rounded-b-[4px] md:border-b md:border-x md:border-[#EAECED] md:order-none md:w-full w-[80%]`} >
            <p className='h-[60%] truncate text-[#000A0F] font-semibold text-[16px] leading-[24px] md:text-[16px] md:leading-[24px] group-hover:text-[#1D5775] ' >{data?.title}: {data?.description}</p>
            <div className='flex justify-between items-center py-3 h-[40%]' >
                <span className='text-[#4E575C] text-[14px] leading-[21px] md:text-[14px] md:leading-[21px] font-semibold' >{data?.league}</span>
                <span className='text-[#6A767D] text-[14px] leading-[21px] md:text-[14px] md:leading-[21px]' >{dayjs(data?.createdAt).format("DD MMMM, YYYY")}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default MiniCard