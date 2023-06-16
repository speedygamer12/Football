import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useGetLeagueTableQuery } from '../../redux/services/Football';
import NavObjTab from '../NavTab/NavObjTab';
import TableBody from './TableBody';
import TableComp from './TableComp';
import { TailSpin } from "react-loader-spinner";

const LeagueTable = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tabletab") || 'Premier League');
    const tabHeaders = [ { title: "Premier League", link: "Premier League" }, { title: "Championship", link: "Championship" }, {title: "League One", link: "League One" }, { title :"League Two", link: "League Two" }, ];
    const tableHeaders = [ "Pos", "Team", "P", "W", "D", "L", "GD", "PTS", "FORM" ];

    const { isFetching, data } = useGetLeagueTableQuery(tab || 'Premier League');

    const leagueData = useMemo(()=> data?.standings, [data?.standings])

    // useEffect(() => {
    //   let index = tabHeaders?.findIndex((item) => item.link === tab);
      
    
    // }, [tab])
    
    const handleNavTab = (navTab, index) => {
        setSearchParams({tabletab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.tabletab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full md:pb-10' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] text-[#000A0F]' >Standings</h1>
        <NavObjTab className="tabletab" tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
        {isFetching ? <div className='flex justify-center items-center h-[40vh]' ><TailSpin
          height="80"
          width="80"
          color="#000A0F"
        /></div> : <TableComp headers={tableHeaders} >
            <TableBody isFetching={isFetching} data={leagueData} />
        </TableComp>}
    </div>
  )
}

export default LeagueTable