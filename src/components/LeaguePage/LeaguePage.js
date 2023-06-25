import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useGetArticlesByLeagueQuery, useGetLeagueFixturesQuery, useGetLeagueTableQuery, useGetUserQuery } from '../../redux/services/Football';
import GameFixtures from '../Fixtures/GameFixtures';
import TableBody from '../LeagueTable/TableBody';
import TableComp from '../LeagueTable/TableComp';
import NavTab from '../NavTab/NavTab';
import LeagueBody from './LeagueBody';
import LeagueHeader from './LeagueHeader';
import { TailSpin } from "react-loader-spinner";

const LeaguePage = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();
    const { id } = useParams();
    const [tab, setTab] = useState(searchParams.get("tab") || 'Previews');
    const tabHeaders = [ "Previews", "Fixtures", "Results", "Table" ];
    const { isFetching, data } = useGetLeagueFixturesQuery(id || 'Premier League', "");
    const tableHeaders = [ "Pos", "Team", "P", "W", "D", "L", "GD", "PTS", "FORM" ];
    const { isFetching: isFetchingTable, data: leagueTableData } = useGetLeagueTableQuery(id || 'Premier League');
    const leagueData = useMemo(()=> data?.fixtures, [data?.fixtures]);
    const leagueStandingsData = useMemo(()=> leagueTableData?.standings, [leagueTableData?.standings])
    const { isSuccess, isLoading, isError, error } = useGetUserQuery("", { skip: !localStorage.getItem("token") })
    const { isLoading: isLoadingLeaguePreviews, data: leaguePreviews } = useGetArticlesByLeagueQuery(id || 'Premier League')
    const allLeaguePreviews = useMemo(() => leaguePreviews?.articles, [leaguePreviews?.articles])

    useEffect(() => {
      if(isError){
          if(error?.data?.error==="Token has expired"){
            navigate("/auth/article/login")
          }
      }
    }, [isError, error, navigate])

    const handleNavTab = (navTab, index) => {
        setSearchParams({tab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.leaguepagetab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
    
  const handleViewTab = () => {
      switch (tab) {
        case "Previews":
          
          return <LeagueBody allLeaguePreviews={allLeaguePreviews}  />
      
        case "Fixtures":
        
          return <GameFixtures isSuccess={isSuccess} leaguepage fixtures={leagueData} gameWeek={leagueData?.[0]?.gameWeek} />
        
        case "Results":
      
          return <GameFixtures isSuccess={isSuccess} result={true} leaguepage fixtures={leagueData} gameWeek={leagueData?.[0]?.gameWeek} />

        case "Table":
    
          return <TableComp headers={tableHeaders} >
              <TableBody isFetching={isFetching} data={leagueStandingsData} />
          </TableComp>
      
        default:
          return <LeagueBody />
      }
  }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        {(isFetchingTable || isFetching || isLoading || isLoadingLeaguePreviews) ? <div className='flex justify-center items-center h-[80vh]' ><TailSpin
          height="80"
          width="80"
          color="#000A0F"
        /></div> : <><LeagueHeader league={leagueData?.[0]?.league} />
        <NavTab className={'leaguepagetab'} tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
         {handleViewTab()}</>}
    </div>
  )
}

export default LeaguePage