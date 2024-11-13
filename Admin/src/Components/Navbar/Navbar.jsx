import React from 'react'
import ProfilePic from '/src/assets/blank-profile-picture-973460_1280.webp'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-10 lg:px-[148px] my-6 border-b-2 bg-white pb-2 '>
      <div className=''>
        <h1 className='uppercase text-3xl font-black font-integral'>Shop.co</h1>
        <h3 className='font-integral leading-none'>Admin Panel</h3>
      </div>
      <div>
        <img src={ProfilePic} className='rounded-full w-10' />
      </div>
    </div>
  )
}

export default Navbar