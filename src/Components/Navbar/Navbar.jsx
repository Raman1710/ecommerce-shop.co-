import React from 'react'

import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'
import profile from '../Assets/profile.svg'
import shopcart from '../Assets/shopcart.svg'

function Nav () {
  return (
    <div  className='navbar flex gap-16 mx-16 my-9'>
          <div className='navlogo flex justify-center items-center '>
               <p className='text-[32px] font-integral font-extrabold tracking-tighter '>SHOP.CO</p>
          </div>
          <div className='flex justify-center'>
            <ul className='flex justify-center items-center gap-10'>
              <li className='flex justify-between text-base gap-1'>Shop <img src= {dropdown} className='flex justify-center items-center' /></li>
              <li className='text-base'>On Sale</li>
              <li className='text-base'>New Arrivals</li>
              <li className='text-base'>Brands</li>
            </ul>
          </div>
          <div className='flex bg-[#f0f0f0]  w-[577px] rounded-[67px]'>
            <img  src= {searchicon} className=' m-3 w-6 h-6 flex justify-center items-center ' />
            <input className='bg-[#f0f0f0] outline-none w-[513px]' placeholder='Search for products...' />
          </div>
          <div className='flex justify-center items-center gap-6 '>
                <img src= {shopcart} className='w-8  h-8' />
                <img src= {profile} className=' w-8 h-8' />

          </div>
    </div>
  )
}

export default Nav
