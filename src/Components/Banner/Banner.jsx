import React from 'react'
import Cross from '../Assets/cross.svg'

function Banner() {
  return (
    <div className='bg-[#000] flex justify-center items-center gap-[425px]'>
        <div className='bg-[#000000] text-[white] h-[38px] flex justify-center items-center relative'>
            <p className=' font-satoshi-regular'>Sign up and get 20% off to your first order. 
            <a href='#' className='underline' >Sign Up Now</a>
            </p>
        </div>
        <div className='flex justify-end absolute right-[30px]'>
            <img src={Cross} />
        </div>
    </div>

  )
}

export default Banner