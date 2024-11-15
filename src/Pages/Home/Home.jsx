import React from 'react'
import Header from '../../component/Header/Header'
import Hero from '../../component/Hero/Hero'
import  Dashboard from '../../component/Dashboard/Dashboard'

import BirthDay from '../../component/Birthday/Birthday'
function Home() {
  return (
    
    <>
    <Header />
        <Hero/>
        <Dashboard/>
          
          <BirthDay/>

    </>
  )
}

export default Home