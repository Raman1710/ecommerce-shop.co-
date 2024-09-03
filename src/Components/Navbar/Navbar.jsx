import React from 'react'

import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'
import profile from '../Assets/profile.svg'
import shopcart from '../Assets/shopcart.svg'

function Nav () {
  return (
    <div  className='navbar flex gap-10 mx-[148px] my-6 w-[1240px] justify-center'>
          <div className='navlogo flex justify-center items-center  '>
               <p className='text-[32px] font-integral font-extrabold tracking-tighter '>SHOP.CO</p>
          </div>
          <div className='flex justify-center'>
            <ul className='flex justify-center items-center gap-6'>
              <li className='flex justify-between text-base gap-2  font-satoshi-regular'>Shop <img src= {dropdown} className='flex justify-center items-center' /></li>
              <li className='text-base font-satoshi-regular'>On Sale</li>
              <li className='text-base font-satoshi-regular'>New Arrivals</li>
              <li className='text-base font-satoshi-regular'>Brands</li>
            </ul>
          </div>
          <div className='flex bg-[#f0f0f0]  w-[582px] rounded-[67px]'>
            <img  src= {searchicon} className=' m-3 w-6 h-6 flex justify-center items-center ' />
            <input className='bg-[#f0f0f0] outline-none w-[513px] ' placeholder='Search for products...' />
          </div>
          <div className='flex justify-center items-center gap-[14px] my-3'>
                <img src= {shopcart} className='w-6  h-6' />
                <img src= {profile} className=' w-6 h-6' />
          </div>
          
    </div>
  )
}

export default Nav
