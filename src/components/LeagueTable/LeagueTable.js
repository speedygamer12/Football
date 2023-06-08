import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useGetLeagueTableQuery } from '../../redux/services/Football';
import NavObjTab from '../NavTab/NavObjTab';
import TableBody from './TableBody';
import TableComp from './TableComp';

const LeagueTable = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tabletab") || 'PL');
    const tabHeaders = [ { title: "Premier League", link: "PL" }, { title: "Laliga", link: "PD" }, {title: "Bundesliga", link: "BL1" }, { title :"Ligue 1", link: "FL1" }, { title :"Serie A", link: "SA" } ];
    const tableHeaders = [ "Pos", "Team", "P", "W", "D", "L", "GD", "PTS", "FORM" ];

    const { isFetching, data } = useGetLeagueTableQuery(tab || "PL");

    const leagueData = useMemo(()=> data?.data, [data?.data])
    console.log(data)

    useEffect(() => {
      let index = tabHeaders?.findIndex((item) => item.link === tab);
      const tabElement = document.querySelector(`.tabletab${index}`);
      tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    
    }, [tab])
    
    const handleNavTab = (navTab, index) => {
        setSearchParams({tabletab: navTab});
        setTab(navTab)
        
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full md:pb-10' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] text-[#000A0F]' >Standings</h1>
        <NavObjTab className="tabletab" tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
        <TableComp headers={tableHeaders} >
            <TableBody isFetching={isFetching} data={leagueData} />
        </TableComp>
    </div>
  )
}

export default LeagueTable