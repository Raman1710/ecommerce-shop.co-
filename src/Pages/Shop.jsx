import React from 'react'

import HeroSection from '../Components/HeroSection/HeroSection'
import Brand from '../Components/Brand/Brand'
import DressStyle from '../Components/DressStyle/DressStyle'
import TopSelling from '../Components/TopSelling/TopSelling'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Testimonials from '../Components/Testimonials/Testimonials'


function Shop() {
  return (
    <>
      <HeroSection/>
      <Brand/>
      <NewArrivals/>
      <TopSelling/>
      <Testimonials/>
      <DressStyle/>
    </>
  )
}

export default Shop