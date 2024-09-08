import React from 'react'
import Cross from '../Assets/cross.svg'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div className='bg-[#000] flex justify-center items-center gap-[425px]'>
        <div className='bg-[#000000] text-[white] h-[38px] flex justify-center items-center relative'>
            <p className=' font-satoshi-regular flex gap-1'>Sign up and get 20% off to your first order. 
            <Link to='/login' className='underline hover:text-white/90' >Sign Up Now</Link>
            </p>
        </div>
        <div className='flex justify-end absolute right-[30px]'>
            <img src={Cross} />
        </div>
    </div>

  )
}

export default Banner