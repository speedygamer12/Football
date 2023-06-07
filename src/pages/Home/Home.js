import React from 'react';
import Fixtures from '../../components/Fixtures/Fixtures';
import LeagueTable from '../../components/LeagueTable/LeagueTable';
import TopPreviews from '../../components/TopPreviews/TopPreviews';
import GeneralLayout from '../../layouts/GeneralLayout';

const Home = () => {
  return (
    <div>
        <GeneralLayout>
            <TopPreviews />
            <Fixtures />
            <LeagueTable />
        </GeneralLayout>
    </div>
  )
}

export default Home