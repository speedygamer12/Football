import React from 'react'
import Fixtures from '../../components/Fixtures/Fixtures'
import Footer from '../../components/Footer/Footer'
import LeagueTable from '../../components/LeagueTable/LeagueTable'
import NavBar from '../../components/NavBar/NavBar'
import Subscribe from '../../components/Subscribe/Subscribe'
import TopPreviews from '../../components/TopPreviews/TopPreviews'

const Home = () => {
  return (
    <div>
        <NavBar />
        <TopPreviews />
        <Fixtures />
        <LeagueTable />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home