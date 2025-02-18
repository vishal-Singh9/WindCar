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
import Testimonials from '@/components/Customer'
import Newsletter from '@/components/Newsletter'
import DealOfTheWeek from '@/components/Deal'
import GallerySection from '@/components/GallerySection'

const page = () => {
  return (
    <div>
      <Home/>
      <CarSearchForm/>
      <Brands/>
      <FeaturedCars/>
      <DealOfTheWeek/>
      <OurMission/>
      <StatisticsSection/>
      <ServicesSection/>  
      <About/>
      <OurSupport/>
      <Contact/>
      <GallerySection/>
      <Testimonials/>
      <Newsletter subscriberCount={1000}/>
      <Footer/>
    </div>
  )
}

export default page
