import React from 'react'

import Casual from '../Assets/CasualModel.svg'
import Gym from '../Assets/GymModel.svg'
import Party from '../Assets/PartyModel.svg'
import Formal from '../Assets/FormalModel.svg'
import { Form, Link } from 'react-router-dom'

function DressStyle() {
    return (
        <div className='bg-[#f0f0f0] mx-4 lg:mx-[148px] rounded-[20px] mt-12 lg:mt-20 py-16  '>

            <h1 className=' font-integral font-black text-3xl lg:text-5xl tracking-tighter text-center text-wrap'>BROWSE BY DRESSSTYLE</h1>

            <div className='flex flex-col  justify-center items-center px-16 mt-[60px] l gap-5'>
            {/* top div  */}
            <div className='flex flex-col lg:flex-row gap-5 '>
                        <div className='flex flex-row justify-between bg-white rounded-2xl lg:rounded-3xl pl-6 lg:pl-9 mx-6 lg:mx-0'>
                            <Link to='casual'>
                            <p className='font-saotshi text-2xl lg:text-4xl font-bold pt-6 tracking-tighter'>Casual</p>
                            </Link>
                            <div className='w-[195px] lg:w-[354px] h-[190px] lg:h-[289px] bg-auto'>

                            <img src={Casual} className='rounded-r-3xl  max-h-fit   w-full' />
                            </div>
                        </div>
                        <div className='flex flex-row  bg-white lg:w-[684px] rounded-2xl lg:rounded-3xl pl-9 gap-20 mx-6 lg:mx-0 '>
                            <Link to='/formal'>
                            <p className='font-saotshi text-2xl lg:text-4xl font-bold pt-6 tracking-tighter'>Formal</p>
                            </Link>
                            <div className='w-[195px] lg:w-[684px] h-[190px] lg:h-[289px] bg-auto '>
                            <img src={Formal} className='rounded-r-3xl ' />
                            </div>
                        </div>
                </div>
            {/* bottom div  */}
                <div className='flex flex-col lg:flex-row gap-5 '>
                        <div className='flex flex-row  bg-white lg:w-[684px] rounded-2xl lg:rounded-3xl mx-6 lg:mx-0 pl-9 gap-20 '>
                            <Link to='/party'>
                            <p className='font-saotshi text-2xl lg:text-4xl font-bold pt-6'>Party</p>
                            </Link>
                            <div className='w-[195px] lg:w-[684px] h-[190px] lg:h-[289px] lg:bg-auto '>
                            <img src={Party} className='rounded-r-3xl' />
                            </div>
                        </div>
                        <div className='flex flex-row bg-white rounded-2xl lg:rounded-3xl pl-9 mx-6 lg:mx-0 '>
                            <Link to='gym'>
                            <p className='font-saotshi text-2xl lg:text-4xl font-bold pt-6 w-[98px]'>Gym</p>
                            </Link>
                            <div className='w-[195px] lg:w-[354px] h-[190px] lg:h-[289px] bg-auto'>

                            <img src={Gym} className='rounded-r-3xl   w-full ' />
                            </div>
                        </div>
                </div>
            </div>

        </div>


    )
}

export default DressStyle