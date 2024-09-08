import React from 'react'

import Casual from '../Assets/CasualModel.svg'
import Gym from '../Assets/GymModel.svg'
import Party from '../Assets/PartyModel.svg'
import Formal from '../Assets/FormalModel.svg'

function DressStyle() {
  return (
    <div className='bg-[#f0f0f0] mx-[148px]  rounded-[40px] flex flex-col justify-center mt-16'>
        <h1 className=' font-integral text-6xl font-extrabold pt-[68px] pb-[61px] tracking-tighter text-center'>BROWSE BY DRESS STYLE</h1>
        <div className='mx-[64px] flex flex-row gap-[57px]'>
            <div className='bg-white w-[407px] h-[289px] rounded-[20px] flex flex-row bg-cover'>
                <p className='font-satoshi-bold font-bold text-[36px]  mt-[25px] ml-[36px]'>Casual</p>
                <img src={Casual} className='w-full h-full object-cover rounded-[20px]'/>
            </div>
            <div className='bg-white w-[684px] h-[289px] rounded-[20px] flex flex-row bg-cover'>
                <p className='font-satoshi-bold font-bold text-[36px]  mt-[25px] ml-[36px]'>Formal</p>
                <img src={Formal} className='w-full h-full object-cover rounded-[20px]' />
            </div>  
        </div>

        
        <div className='mx-[64px] flex flex-row gap-[20px] mt-[20px]'>
             <div className='bg-white w-[600px] h-[289px] rounded-[20px] flex flex-row bg-cover'>
            <p className='font-satoshi-bold font-bold text-[36px] mt-[25px] ml-[36px]'>Party</p>
             <img src={Party} className='w-full h-full object-cover rounded-[20px]' />
        </div>

         <div className='bg-white w-[407px] h-[289px] rounded-[20px] flex flex-row bg-cover mb-[76px]'>
            <p className='font-satoshi-bold font-bold text-[36px] mt-[25px] ml-[36px]'>Gym</p>
            <img src={Gym} className='w-full h-full object-cover rounded-[20px]' />
        </div>
     </div>

            
        </div>
    
  )
}

export default DressStyle