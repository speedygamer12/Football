import React from 'react'
// import CarouselImage from "../../assets/Ball.svg"
// import Moura from "../../assets/Moura.svg"
// import Spurs from "../../assets/Spurs.svg"
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const CarouselPreview = ({data, isSuccess}) => {
  return (
    <div className='smallLaptop:py-5 pt-5 pb-5 smallLaptop:h-[580px] flex flex-col smallLaptop:w-2/3 w-full group' >
        <Carousel animationHandler="fade" swipeable={false} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} >
            {data?.map((article, index) => {
                return (
                    <Link to={(isSuccess && localStorage.getItem("token")) ? `/article/admin/${article?.fixture}` : `/article/${article?.fixture}`} key={`${index}${article?._id}`} >
                        <img src={article?.image} alt='Advert' className='object-cover w-full md:h-[457px] h-[160px] cursor-pointer' />
                        <div className='p-5 bg-[#F9FBFC] h-[123px] rounded-b-[4px] border-b border-x border-[#EAECED]' >
                            <p className='h-[60%] truncate text-[#000A0F] font-semibold text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] group-hover:text-[#003049] text-left' >{article?.title}: {article?.description}</p>
                            <div className='flex justify-between items-center py-3 h-[40%]' >
                                <span className='text-[#4E575C] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] font-semibold' >{article?.league}</span>
                                <span className='text-[#6A767D] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px]' >{dayjs(article?.createdAt).format("DD MMMM, YYYY")}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </Carousel>
    </div>
  )
}

export default CarouselPreview