import React from 'react'
import Header from '../../component/Header/Header'
import Hero from '../../component/Hero/Hero'
import  Dashboard from '../../component/Dashboard/Dashboard'
import LineChart from '../../component/Charts/LineChart/LineChart'
function Home() {
  return (
    
    <>
    <Header />
        <Hero/>
        <Dashboard/>
          <LineChart/>
    </>
  )
}

export default Home