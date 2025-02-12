'use client'
import React from 'react'
 import StatisticsSection from '@/components/Counter'
import Home from '@/components/Home'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Home/>
      <StatisticsSection/>
      <Footer/>
    </div>
  )
}

export default page
