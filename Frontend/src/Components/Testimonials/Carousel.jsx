import React from 'react'
import verified from '../Assets/verified.svg'


function Carousel({name, message}) {
  return (
    <div className='w-[400px] h-[240px] border-2 rounded-3xl mx-[10px] flex-shrink-0 '>
        <div className='mx-8 mt-16 '>
               <p className='flex flex-row justify-start gap-1 font-satoshi-bold font-semibold text-[20px] '> {name} <img src={verified} className=''/></p>
                <p className=' font-satoshi-regular text-[16px] text-black/60 mt-3'>&quot;{message}&quot;</p>
        </div>

    </div>
  )
}

export default Carousel