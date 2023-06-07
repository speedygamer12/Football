import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import LeagueHeader from './LeagueHeader';

const LeaguePage = () => {
    const [searchParams, setSearchParams ] = useSearchParams();
    const [tab, setTab] = useState(searchParams.get("tab") || 'Previews');
    const tabHeaders = [ "Previews", "Fixtures", "Results", "Table" ];

    const handleNavTab = (navTab, index) => {
        setSearchParams({tab: navTab});
        setTab(navTab)
        const tabElement = document.querySelector(`.leaguepagetab${index}`);
        tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        <LeagueHeader />
        <NavTab className={'leaguepagetab'} tab={tab} setTab={handleNavTab} tabHeaders={tabHeaders} />
    </div>
  )
}

export default LeaguePage