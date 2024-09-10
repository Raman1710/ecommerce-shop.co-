import React from 'react'

import Casual from '../Assets/CasualModel.svg'
import Gym from '../Assets/GymModel.svg'
import Party from '../Assets/PartyModel.svg'
import Formal from '../Assets/FormalModel.svg'
import { Link } from 'react-router-dom'

function DressStyle() {
    return (
        <div className='bg-[#f0f0f0] mx-[148px] rounded-[20px] mt-20 py-16 '>

            <h1 className=' font-integral font-black text-[48px] tracking-tighter text-center'>BROWSE BY DRESSSTYLE</h1>

            <div className='flex flex-col  justify-center px-16 mt-[60px] l gap-5'>
            {/* top div  */}
                <div className='flex flex-row  gap-5 '>
                        <div className='flex flex-row bg-white rounded-3xl pl-9 bg-right'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Casual</p>
                            <img src={Casual} className='rounded-r-3xl w-[354px]'/>
                        </div>
                        <div className='flex flex-row bg-white w-[684px] pl-9 bg-right rounded-3xl'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Formal</p>
                            <img src={Formal} className=' rounded-r-3xl ' />
                        </div>
                </div>
            {/* bottom div  */}
                <div className='flex flex-row gap-5 '>
                        <div className='flex flex-row bg-white w-[684px] rounded-3xl pl-9 bg-right'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Party</p>
                            <img src={Party} className='rounded-r-3xl' />
                        </div>
                        <div className='flex flex-row bg-white rounded-3xl pl-9 bg-right'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Gym</p>
                            <img src={Gym} className='rounded-r-3xl' />
                        </div>
                </div>
            </div>

        </div>


    )
}

export default DressStyle