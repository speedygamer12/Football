import React from 'react'
import Fixtures from '../../components/Fixtures/Fixtures'
import LeagueTable from '../../components/LeagueTable/LeagueTable'
import NavBar from '../../components/NavBar/NavBar'
import TopPreviews from '../../components/TopPreviews/TopPreviews'

const Home = () => {
  return (
    <div>
        <NavBar />
        <TopPreviews />
        <Fixtures />
        <LeagueTable />
    </div>
  )
}

export default Home