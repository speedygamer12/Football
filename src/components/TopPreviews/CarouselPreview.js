import React from 'react'
import CarouselImage from "../../assets/Ball.svg"
import Moura from "../../assets/Moura.svg"
import Spurs from "../../assets/Spurs.svg"
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css"

const images = [CarouselImage, Moura, Spurs]

const CarouselPreview = () => {
  return (
    <div className='md:py-5 pt-5 pb-5 md:h-[580px] flex flex-col md:w-2/3 w-full group' >
        <Carousel animationHandler="fade" swipeable={false} autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false} >
            {images?.map((image, index) => {
                return <img key={`${index}`} src={image} alt='Advert' className='object-cover w-full md:h-[457px]' />
            })}
        </Carousel>
        <div className='p-5 bg-[#F9FBFC] h-[123px] rounded-b-[4px] border-b border-x border-[#EAECED]' >
            <p className='text-[#000A0F] font-semibold text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] group-hover:text-[#003049] ' >Manchester United Vs Chelsea: Battle of the mid</p>
            <div className='flex justify-between items-center py-3' >
                <span className='text-[#4E575C] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] font-semibold' >Premier league</span>
                <span className='text-[#6A767D] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px]' >2 hours ago</span>
            </div>
        </div>
    </div>
  )
}

export default CarouselPreview