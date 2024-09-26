import React from 'react'
import { useState } from 'react'
import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'
import profile from '../Assets/profile.svg'
import shopcart from '../Assets/shopcart.svg'
import { Link } from 'react-router-dom'

function Nav () {

    const [menu, setMenu] = useState("shop")

  return (
    <div  className='navbar flex gap-10 mx-[148px] my-6 w-[1240px] justify-center  '>
          <div className='navlogo flex justify-center items-center  '>
              <Link to='/' onClick={()=>{setMenu("/")}}>

               <p className='text-[32px] font-integral font-extrabold tracking-tighter '>SHOP.CO</p>
               {menu==='/'?<></>:<></>}
              </Link>
          </div>
          <div className='flex justify-center '>
            <ul className='flex justify-center items-center gap-6 '>

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
              <li className='relative text-base font-satoshi-regular hover:font-semibold ' onClick={()=>{setMenu("on-sale")}}><Link to='/on-sale'>On Sale</Link>{menu==='on-sale'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0'/>:<></>}</li>
              <li className='relative text-base font-satoshi-regular hover:font-semibold' onClick={()=>{setMenu("new-arrivals")}} > <Link to='/new-arrivals'>New Arrivals</Link>{menu==='new-arrivals'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0'/>:<></>} </li>
              <li className='relative text-base font-satoshi-regular hover:font-semibold group'>
            <div onClick={() => { setMenu('brands') }} className='flex items-center'>
              <p className='flex cursor-pointer'>
                Brands
              </p>

            </div>
            {menu === 'brands' ? <hr className='border-0 bg-black w-11/12 h-1 absolute bottom-[-6px] left-0' /> : <></>}

            <div className='absolute hidden group-hover:block top-[30px] bg-white shadow-lg rounded-lg py-2 w-[150px]'>
              <Link to='/brands/calvin-klein' className='block px-4 py-2 hover:bg-gray-200'>Calvin Klein</Link>
              <Link to='/brands/gucci' className='block px-4 py-2 hover:bg-gray-200'>Gucci</Link>
              <Link to='/brands/prada' className='block px-4 py-2 hover:bg-gray-200'>Prada</Link>
              <Link to='/brands/zara' className='block px-4 py-2 hover:bg-gray-200'>Zara</Link>
              <Link to='/brands/versace' className='block px-4 py-2 hover:bg-gray-200'>Versace</Link>
            </div>
          </li>
              
            </ul>
          </div>
          <div className='flex bg-[#f0f0f0]  w-[582px] rounded-[67px]'>
            <img  src= {searchicon} className=' m-3 w-6 h-6 flex justify-center items-center ' />
            <input className='bg-[#f0f0f0] outline-none w-[513px] ' placeholder='Search for products...' />
          </div>
          <div className='flex justify-center items-center gap-[14px] my-3'>
              <Link to='/cart'><img src= {shopcart} className='w-6  h-6'onClick={()=>{setMenu("cart")}}  />{menu==='cart'?<></>:<></>}</Link>  
              <Link to='/login'><img src= {profile} className=' w-6 h-6'onClick={()=>{setMenu("login")}} />{menu==='login'?<></>:<></>}</Link>  
          </div>
          
    </div>
  )
}

export default Nav
