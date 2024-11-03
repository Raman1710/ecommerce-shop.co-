import React from 'react'
import Cross from '../Assets/cross.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Banner() {
        const [isVisible, setIsVisible] = useState(true)

        if (!isVisible) return null
  return (
    <div className='bg-[#000]  flex justify-center items-center gap-[425px] '>
        <div className='   text-[white] h-9 lg:h-[38px] flex justify-center items-center  mt-1 relative'>
            <p className=' font-satoshi-regular flex  gap-1 text-xs lg:text-base'>Sign up and get 20% off to your first order. 
            <Link to='/login' className='underline hover:text-white/90 text-xs lg:text-base' >Sign Up Now</Link>
            </p>
        </div>
        <div className='hidden md:flex justify-end absolute right-[30px]'>           
                <button
                onClick={() => setIsVisible(false)}
                className=''
                aria-label="Close banner"
                >
                <img src={Cross} />
                </button>
        </div>
    </div>

  )
}

export default Banner