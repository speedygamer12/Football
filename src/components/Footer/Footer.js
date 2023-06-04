import React from 'react';
import FooterLogo from "../../assets/FooterLogo.svg";
import MobileFooterLogo from "../../assets/MobileFooterLogo.svg"
import Mail from "../../assets/Mail.svg";
import Twitter from "../../assets/Twitter.svg";

const Footer = () => {
  return (
    <div className='bg-[#EAECED] p-5 md:p-10' >
        <div className='flex md:flex-row flex-col md:justify-between md:items-start' >
            <div>
                <img className='w-[300px] h-[108px] md:block hidden' src={FooterLogo} alt="Comapny logo" />
                <img className='w-[150px] h-[54px] block md:hidden' src={MobileFooterLogo} alt="Comapny logo" />
            </div>
            <div className='flex md:flex-row flex-col pt-6 md:pt-0' >
                <div className='flex' >
                    <div>
                        <h1 className='font-semibold text-[#000A0F] text-[16px] leading-[24px] pb-1' >Leagues</h1>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >Premier League</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >Championship</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >League One</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >League Two</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >HomeOutside</p>
                    </div>
                    <div className='pl-7 md:pl-12' >
                        <h1 className='font-semibold text-[#000A0F] text-[16px] leading-[24px] pb-1' >Terms</h1>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >Privacy Policy</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px]' >Terms of Use</p>
                    </div>
                </div>
                <div>
                    <div className='pt-6 md:pt-0 md:px-20' >
                        <h1 className='font-semibold text-[#000A0F] text-[16px] leading-[24px] pb-1' >Contact Us</h1>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px] flex items-center' ><img src={Mail} alt="Mail us" className='h-[24px] w-[24px] mr-2' />hello@footballpreviews.co.uk</p>
                        <p className='text-[#4E575C] py-1 text-[16px] leading-[24px] flex items-center' ><img src={Twitter} alt="Mail us" className='h-[24px] w-[24px] mr-2' />Follow us @footballpreviews</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer