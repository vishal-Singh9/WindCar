'use client'
import React from 'react'
 import StatisticsSection from '@/components/Counter'
import Home from '@/components/Home'
import Footer from '@/components/Footer'
import About from './about/page'
import OurMission from '@/components/Mission'
import ServicesSection from '@/components/ServicesSection'
import OurSupport from '@/components/OurSupport'
import Contact from './contact/page'
import CarSearchForm from '@/components/CarSearchForm'
import FeaturedCars from '@/components/FeaturedCars'
import Brands from '@/components/Brands'

const page = () => {
  return (
    <div>
      <Home/>
      <CarSearchForm/>
      <Brands/>
      <FeaturedCars/>
      <OurMission/>
      <StatisticsSection/>
      <ServicesSection/>  
      <About/>
      <OurSupport/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
