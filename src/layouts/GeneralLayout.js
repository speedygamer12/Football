import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import Subscribe from '../components/Subscribe/Subscribe'

const GeneralLayout = ({children}) => {
  return (
    <>
        <NavBar />
        {children}
        <Subscribe />
        <Footer />
    </>
  )
}

export default GeneralLayout