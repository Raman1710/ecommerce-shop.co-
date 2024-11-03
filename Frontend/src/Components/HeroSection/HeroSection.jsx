import React from 'react'
import { Link } from 'react-router-dom'
import Model from '../Assets/model.svg'
import PrimaryButton from '../Buttons/PrimaryButton'

function HeroSection() {
  return (
    <div>
    <div className='bg-[#F2F0F1] flex lg:flex-row flex-col'>
        <div className=' mx-4 lg:ml-[148px] lg:pt-[103px] pt-10  lg:w-1/2'>
            <p className='font-integral font-extrabold tracking-tighter  text-4xl lg:text-6xl lg:w-[577px] w-[315px] lg:leading-[64px] '>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
            <p className='text-black/60 mt-8 font-satoshi-regular '>
            Browse through our diverse range of meticulously crafted garments, designed<br className='hidden lg:block'></br> to bring out your individuality and cater to your sense of style.
            </p>
            <Link to='/on-sale'>

            <PrimaryButton className='text-white w-full'>Shop Now</PrimaryButton>
            </Link>
            <div className=' mt-6 lg:mt-[48px] flex flex-row justify-center '>
                <div className=' pr-2  lg:pr-8 border-r-2 border-black/10 w-fit'>
                  <p className=' text-2xl lg:text-[40px] font-bold font-satoshi-bold'>200+</p>
                  <p className=' text-black/60  text-xs lg:text-base '>International Brands</p>
                </div>
                <div className='pr-2 pl-2 lg:px-8 border-r-2 border-black/10 w-fit'>
                  <p className='text-2xl lg:text-[40px] font-bold font-satoshi-bold'>2,000+</p>
                  <p className='text-black/60 text-xs lg:text-base '>High Quality Products</p>
                </div>
                <div className='pr-2 pl-2 lg:px-8 w-fit'>
                  <p className='text-2xl lg:text-[40px] font-bold font-satoshi-bold'>30,000+</p>
                  <p className='text-black/60 text-xs lg:text-base  '>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <img src = {Model}  />
        </div>
    </div>
    
    </div>

  )
}

export default HeroSection