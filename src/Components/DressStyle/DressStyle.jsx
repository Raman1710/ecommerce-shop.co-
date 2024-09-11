import React from 'react'

import Casual from '../Assets/CasualModel.svg'
import Gym from '../Assets/GymModel.svg'
import Party from '../Assets/PartyModel.svg'
import Formal from '../Assets/FormalModel.svg'
import { Form, Link } from 'react-router-dom'

function DressStyle() {
    return (
        <div className='bg-[#f0f0f0] mx-[148px] rounded-[20px] mt-20 py-16 '>

            <h1 className=' font-integral font-black text-[48px] tracking-tighter text-center'>BROWSE BY DRESSSTYLE</h1>

            <div className='flex flex-col  justify-center items-center px-16 mt-[60px] l gap-5'>
            {/* top div  */}
            <div className='flex flex-row gap-5 '>
                        <div className='flex flex-row bg-white rounded-3xl pl-9'>
                            <Link to='casual'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Casual</p>
                            </Link>
                            <div className='w-[354px] h-[289px] bg-auto'>

                            <img src={Casual} className='rounded-r-3xl   w-full' />
                            </div>
                        </div>
                        <div className='flex flex-row bg-white w-[684px] rounded-3xl pl-9 gap-20 '>
                            <Link to='/formal'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Formal</p>
                            </Link>
                            <div className='w-[684px] h-[289px] bg-auto '>
                            <img src={Formal} className='rounded-r-3xl ' />
                            </div>
                        </div>
                </div>
            {/* bottom div  */}
                <div className='flex flex-row gap-5 '>
                        <div className='flex flex-row bg-white w-[684px] rounded-3xl pl-9 gap-20 '>
                            <Link to='/party'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Party</p>
                            </Link>
                            <div className='w-[684px] h-[289px] bg-auto '>
                            <img src={Party} className='rounded-r-3xl' />
                            </div>
                        </div>
                        <div className='flex flex-row bg-white rounded-3xl pl-9 '>
                            <Link to='gym'>
                            <p className='font-saotshi text-[36px] font-bold pt-6'>Gym</p>
                            </Link>
                            <div className='w-[354px] h-[289px] bg-auto'>

                            <img src={Gym} className='rounded-r-3xl   w-full' />
                            </div>
                        </div>
                </div>
            </div>

        </div>


    )
}

export default DressStyle