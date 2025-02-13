'use client'
import React from 'react'
 import StatisticsSection from '@/components/Counter'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import About from './about/page'
import OurMission from '@/components/Mission'
import ServicesSection from '@/components/ServicesSection'
import OurSupport from '@/components/OurSupport'

const page = () => {
  return (
    <div>
      <Home/>
      <OurMission/>
      <StatisticsSection/>
      <ServicesSection/>
      <About/>
      <OurSupport/>
      <Footer/>
    </div>
  )
}

export default page
