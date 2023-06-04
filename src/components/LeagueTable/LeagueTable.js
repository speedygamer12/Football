import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

const LeagueTable = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tab") || 'Premier League');
    const tabHeaders = [ "Premier League", "Championship", "League One", "League Two", "HomeOutside" ];

    const handleNavTab = (navTab, index) => {
        setSearchParams({tab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.tab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] text-[#000A0F]' >Standings</h1>
        <NavTab tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
    </div>
  )
}

export default LeagueTable