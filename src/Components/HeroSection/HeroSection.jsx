import React from 'react'

import Model from '../Assets/model.svg'
import Calvin from '../Assets/calvin-logo.svg'
import Gucci from '../Assets/gucci-logo.svg'
import Prada from '../Assets/prada-logo.svg'
import Versace from '../Assets/versacelogo.svg'
import Zara from '../Assets/zara-logo.svg'



function HeroSection() {
  return (
    <div>
    <div className='bg-[#F2F0F1] flex flex-row'>
        <div className='ml-[148px] pt-[103px]  w-1/2'>
            <p className='font-integral font-extrabold tracking-tighter text-6xl w-[577px] '>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
            <p className='text-black/60 mt-8 font-satoshi-regular '>
            Browse through our diverse range of meticulously crafted garments, designed<br></br>
            to bring out your individuality and cater to your sense of style.
            </p>
            <button className='mt-[37px] bg-black text-white px-[67.5px] py-[15px] rounded-[62px]'>Shop Now</button>
            <div className=' mt-[48px] flex flex-row'>
                <div className=' pr-8 border-r-2 border-black/10'>
                  <p className=' text-[40px] font-bold font-satoshi-bold'>200+</p>
                  <p className=' text-black/60'>International Brands</p>
                </div>
                <div className='px-8 border-r-2 border-black/10'>
                  <p className='text-[40px] font-bold font-satoshi-bold'>2,000+</p>
                  <p className='text-black/60'>High Quality Products</p>
                </div>
                <div className='px-8 '>
                  <p className='text-[40px] font-bold font-satoshi-bold'>30,000+</p>
                  <p className='text-black/60 '>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
          <img src = {Model}  />
        </div>
    </div>




    </div>

  )
}

export default HeroSection