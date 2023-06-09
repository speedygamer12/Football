import React from 'react'
import twitterFilled from '../../assets/twitterFilled.svg'
import whatsappFilled from '../../assets/whatsappFilled.svg'
import facebookFilled from '../../assets/facebookFilled.svg'
import shareLink from '../../assets/ShareLink.svg'
import CarouselImage from "../../assets/Ball.svg"

const ArticleItem = () => {
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full md:w-4/5'>
      <div className='flex flex-col'>  {/* Top ctn */}
        <div> 
          <h1 className='font-bold md:text-[3rem] text-[1.5rem] md:leading-[120%] leading-[120%] text-[#000A0F] md:text-[#000A0F]'>Manchester United Vs Manchester City: Everything you need to know about this weekend’s showdown</h1>
        </div>

        <div className='py-6 flex md:flex-row md:justify-between flex-col gap-y-[1rem] '>
          <div className=' flex flex-row items-center md:justify-start gap-[2rem] justify-between'  >
            <p className='font-semibold md:text-[1rem] text-[1rem] md:leading[150%] leading-[150%] text-[#4E575C] md:text-[#4E575C]'>Joshua Ojele</p>
            <p className='font-normal md:text-[1rem] text-[1rem] md:leading-[150%] leading-[150%] text-[#4E575C] md:text-[#4E575C]'>10 May, 2023</p>
          </div>  
            
          <div className='flex flex-row md:gap-[8px] gap-[6px] items-center'>
            <div className='bg-[#CFD5D8] md:w-[40px] md:h-[40px] w-[34px] h-[34px] flex items-center justify-center rounded-full ' >
              <img src={twitterFilled} alt='Share to Twitter' className='md:w-[24px] md:h-[24px] w-[18px] h-[18px] '  />
            </div>
            <div className='bg-[#CFD5D8] md:w-[40px] md:h-[40px] w-[34px] h-[34px] flex items-center justify-center rounded-full ' >
              <img src={whatsappFilled} alt='Share to Whatsapp' className='md:w-[24px] md:h-[24px] w-[18px] h-[18px] '  />
            </div>
            <div className='bg-[#CFD5D8] md:w-[40px] md:h-[40px] w-[34px] h-[34px] flex items-center justify-center rounded-full ' >
              <img src={facebookFilled} alt='Share to Facebook' className='md:w-[24px] md:h-[24px] w-[18px] h-[18px] '  />
            </div>
            <div className='bg-[#CFD5D8] md:w-[40px] md:h-[40px] w-[34px] h-[34px] flex items-center justify-center rounded-full ' >
              <img src={shareLink} alt='Share link' className='md:w-[24px] md:h-[24px] w-[18px] h-[18px] '  />
            </div>
          </div> 

         
        </div>

        <div className='flex flex-row md:gap-[8px] gap-[6px] items-center justify-start'> 
          <div className='bg-[#DBE0E2] md:p-2 p-1.5 rounded-[4px] md:block hidden' >
            <p className='text-[#4E575C] font-normal md:text-[1rem] text-[0.875rem] md:leading-[150%] leading-[150%]'>Premier League</p>
          </div>
          <div className='bg-[#DBE0E2] md:p-2 p-1.5 rounded-[4px]' >
            <p className='text-[#4E575C] font-normal md:text-[1rem] text-[0.875rem] md:leading-[150%] leading-[150%]'>Manchester United</p>
          </div>
          <div className='bg-[#DBE0E2] md:p-2 p-1.5 rounded-[4px]' >
            <p className='text-[#4E575C] font-normal md:text-[1rem] text-[0.875rem] md:leading-[150%] leading-[150%]'>Manchester City</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:gap-5 gap-4 justify-start' > {/* Image ctn */}
        <div className=' md:pt-12 pt-8 md:w-full md:h-[480px] w-full h-[160px] flex items-center justify-start'>
          <img src={CarouselImage} alt='Manchester United players' className='object-cover w-full md:h-[480px] h-[160px]'/>
        </div>

        <div className='pt-2 md:pt-3'>
          <p className='font-normal md:text-[1rem] md:text-[1rem] text-[0.75rem] md:leading-[150%] leading-[150%] text-[#6A767D]'> Source: <a href='www.' target='_blank' className='underline'>Footy Website</a> </p>
        </div>
      </div>

      <div className='pt-8 w-full' > {/* Body ctn */}
        <p className='font-normal md:text-[1rem] text-[1rem] md:leading-[150%] leading-[150%] text-[#000A0F]'>
        THE BIGGER PICTURE: Mount is out of contract in 12 months' time and there has been little progress made in talks over a new deal. As a result, the likes of Liverpool and Bayern Munich have been credited with an interest in the midfielder, and GOAL revealed that Arsenal have also held talks over the player.
        </p>
      </div>
    </div>
  )
}

export default ArticleItem