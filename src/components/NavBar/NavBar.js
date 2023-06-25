import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.svg"
import MobileLogo from "../../assets/MobileLogo.svg"
import Vector from "../../assets/Vector.svg"
import Cancel from "../../assets/Cancel.svg"

const NavBar = () => {
    const navTabs = ["Premier League", "Championship ", "League One", "League Two",]
    const [ openNav, setOpenNav ] = useState(false)
  return (
    <>
        <nav className={` ${openNav && " md:flex"} sticky z-[50] top-0 flex bg-[#FDFDFD] w-full h-[68px] md:h-[120px] p-5 md:px-10 md:py-7 items-center justify-between`} >
            <div className='' >
                <Link to="/" >
                    <img className='w-[200px] h-[72px] md:block hidden' src={Logo} alt="Comapny logo" />
                    <img className='w-[100px] h-[36px] block md:hidden' src={MobileLogo} alt="Comapny logo" />
                </Link>
            </div>
            <div className='md:mx-auto hidden md:block' >
                <ul className="flex md:flex-row flex-col list-none">
                    {navTabs?.map(item => <li className='text-[18px] text-[#000A0F] font-medium leading-[27px] ml-3 smallLaptop:ml-[24px] hover:text-[#1D5775]' key={item} ><Link to={`/league/${item}`} >{item}</Link></li>)}
                </ul>
            </div>
            <div className='ml-auto hidden verySmallLaptop:block' >
                <button className='text-white bg-[#F77F00] hover:text-[#F77F00] hover:border hover:border-[#F77F00] hover:bg-transparent font-semibold text-[16px] leading-[24px] rounded-[4px] h-[52px] w-[170px]' >Subscribe for free</button>
            </div>
            <div className='mr-3 md:hidden block' >
                <img onClick={()=> setOpenNav(true)} className='w-[18px] h-[16px]' src={Vector} alt="Comapny logo" />
            </div>
        </nav>
        <nav className={`bg-[#FDFDFD] w-full h-screen fixed top-0 left-0 z-[55] p-5 ${openNav ? "block" : "hidden"} md:hidden`} >
            <div className='flex w-full' >
                <div className='ml-auto' >
                    <img onClick={()=> setOpenNav(false)} className='w-[24px] h-[24px] cursor-pointer' src={Cancel} alt="close-nav" />
                </div>
            </div>
            <ul className="flex md:flex-row flex-col list-none">
                {navTabs?.map(item => <li onClick={()=> setOpenNav(false)} className='text-[18px] text-[#000A0F] font-medium leading-[27px] my-3' key={item} ><Link to={`/league/${item}`} >{item}</Link></li>)}
            </ul>
            <button className='mt-3 text-white bg-[#F77F00] font-semibold text-[16px] leading-[24px] rounded-[4px] h-[52px] w-[170px]' >Subscribe for free</button>
        </nav>
    </>
  )
}

export default NavBar