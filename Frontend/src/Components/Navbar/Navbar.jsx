import React, { useContext } from 'react'
import { useState } from 'react'
import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'
import profile from '../Assets/profile.svg'
import shopcart from '../Assets/shopcart.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import HamburgerMenu from '../Assets/HamburgerMenu.svg';

function Nav() {

  const [menu, setMenu] = useState("shop")

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='flex gap:1 lg:gap-10 mx-0 lg:mx-[148px] my-3 lg:my-6 lg:w-[1240px] justify-around lg:justify-center  '>
      <div className=' flex justify-between gap-3 lg:gap-0 lg:justify-center items-center  '>
        <button className='lg:hidden'>
          <img src={HamburgerMenu}/>
        </button>
        <Link to='/' onClick={() => { setMenu("/") }}>

          <p className=' text-2xl lg:text-[32px] font-integral font-extrabold tracking-tighter '>SHOP.CO</p>
          {menu === '/' ? <></> : <></>}
        </Link>
      </div>
      <div className='flex justify-center '>
        <ul className=' hidden lg:flex justify-center items-center gap-6 '>

          <li className='relative flex justify-between text-base gap-2 font-satoshi-regular hover:font-semibold group'>
            <div onClick={() => { setMenu('shop') }} className='flex items-center'>
              <Link to='/' className='flex'>
                Shop
              </Link>
              <img src={dropdown} className='ml-2 flex justify-center items-center' />
            </div>
            {menu === 'shop' ? <hr className='border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0' /> : <></>}

            <div className='absolute hidden group-hover:block top-[30px] bg-white shadow-lg rounded-lg py-2 w-[150px]'>
              <Link to='mens' className='block px-4 py-2 hover:bg-gray-200'>Men</Link>
              <Link to='women' className='block px-4 py-2 hover:bg-gray-200'>Women</Link>
            </div>
          </li>
          <li className='relative text-base font-satoshi-regular hover:font-semibold ' onClick={() => { setMenu("on-sale") }}><Link to='/on-sale'>On Sale</Link>{menu === 'on-sale' ? <hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0' /> : <></>}</li>
          <li className='relative text-base font-satoshi-regular hover:font-semibold' onClick={() => { setMenu("new-arrivals") }} > <Link to='/new-arrivals'>New Arrivals</Link>{menu === 'new-arrivals' ? <hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0' /> : <></>} </li>
          <li className='relative text-base font-satoshi-regular hover:font-semibold group'>
            <div onClick={() => { setMenu('brands') }} className='flex items-center'>
              <p className='flex cursor-pointer'>
                Brands
              </p>

            </div>
            {menu === 'brands' ? <hr className='border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0' /> : <></>}

            <div className='absolute hidden group-hover:block top-[30px] bg-white shadow-lg rounded-lg py-2 w-[150px]'>
              <Link to='/calvin-klein' className='block px-4 py-2 hover:bg-gray-200'>Calvin Klein</Link>
              <Link to='/gucci' className='block px-4 py-2 hover:bg-gray-200'>Gucci</Link>
              <Link to='/prada' className='block px-4 py-2 hover:bg-gray-200'>Prada</Link>
              <Link to='/zara' className='block px-4 py-2 hover:bg-gray-200'>Zara</Link>
              <Link to='/versace' className='block px-4 py-2 hover:bg-gray-200'>Versace</Link>
            </div>
          </li>

        </ul>
      </div>
      {/* Search Bar  */}
      <div className='lg:flex hidden lg:bg-[#f0f0f0]  lg:w-[582px] rounded-[67px]'>
        <img src={searchicon} className='hidden lg:m-3 lg:w-6 lg:h-6 lg:flex justify-center items-center  ' />
        <input className='bg-[#f0f0f0] outline-none lg:w-[513px]  lg:block text-sm  ' placeholder='Search for products...' />
      </div>
      {/* Shop cart and Profile  */}
      <div className='flex justify-center items-center gap-[14px] my-3'>
        <Link to='/cart'>
          <div className="relative">
            <img src={shopcart} className='w-6 h-6' onClick={() => { setMenu("cart") }} />
              <span className="absolute top-[-12px] right-[-12px] inline-flex items-center justify-center px-2 py-1 text-xs  leading-none text-red-100 bg-[#ff3333] rounded-full">
               {getTotalCartItems()}
              </span>
          </div>
        </Link>

        <Link to='/login'><img src={profile} className=' w-6 h-6' onClick={() => { setMenu("login") }} />{menu === 'login' ? <></> : <></>}</Link>
      </div>

    </div>
  )
}

export default Nav
