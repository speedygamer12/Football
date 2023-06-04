import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import TableBody from './TableBody';
import TableComp from './TableComp';

const LeagueTable = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tabletab") || 'Premier League');
    const tabHeaders = [ "Premier League", "Championship", "League One", "League Two", "HomeOutside" ];
    const tableHeaders = [ "Pos", "Team", "P", "W", "D", "L", "GD", "PTS", "FORM" ];

    const handleNavTab = (navTab, index) => {
        setSearchParams({tabletab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.tabletab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full md:pb-10' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] text-[#000A0F]' >Standings</h1>
        <NavTab className="tabletab" tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
        <TableComp headers={tableHeaders} >
            <TableBody />
        </TableComp>
    </div>
  )
}

export default LeagueTable