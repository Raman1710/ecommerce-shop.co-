import React from 'react'

import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'

function Nav () {
  return (
    <div  className='navbar flex gap-10'>
          <div className='navlogo'>
               <p className='text-3xl font-bold'>SHOP.CO</p>
          </div>
          <div className=''>
            <ul className='flex justify-between items-center gap-10'>
              <li className='flex justify-between'>Shop <img src= {dropdown} /></li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>
          </div>
          <div className='flex bg-slate-50  w-96'>
            <img  src= {searchicon} className=' w-6 h-6 flex justify-center' />
            <input className='bg-red-50' placeholder='Search for products...' />
          </div>
    </div>
  )
}

export default Nav
