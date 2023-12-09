import * as React from 'react'
import './App.css'

import Navbar from './Navbar'
import Header from './Header'
import MainPageContainer from './MainPageContainer'
import Footer from './Footer'

const App = () => {

  return (
    <>
      <Navbar title="FutureSports" />
      <Header
        title="Welcome to the club!"
        welcomeMessage="FutureSports is now open to new members!" />
      <MainPageContainer />
      <Footer />
    </>
  )
}

export default App
