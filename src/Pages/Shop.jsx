import React from 'react'

import HeroSection from '../Components/HeroSection/HeroSection'
import Brand from '../Components/Brand/Brand'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import DressStyle from '../Components/DressStyle/DressStyle'


function Shop() {
  return (
    <>
      <HeroSection/>
      <Brand/>
      {/* <NewArrivals/> */}
      <DressStyle/>
    </>
  )
}

export default Shop