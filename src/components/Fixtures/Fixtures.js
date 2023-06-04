import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tip from "../../assets/Tip.svg"
import NavTab from '../NavTab/NavTab';
import GameFixtures from './GameFixtures';

const Fixtures = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tab") || 'Premier League');
    const tabHeaders = [ "Premier League", "Championship", "League One", "League Two", "HomeOutside" ];

    const handleNavTab = (navTab, index) => {
        setSearchParams({tab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.tab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] text-[#000A0F]' >Fixtures</h1>
        <div className='flex items-center' >
            <img src={Tip} alt="Tip" height={21} width={16} />
            <p className='text-[#000A0F] text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] pl-3 py-1' >Pro tip: Click on any fixture to read the preview.</p>
        </div>
        <NavTab className={'tab'} tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
        <GameFixtures />
    </div>
  )
}

export default Fixtures