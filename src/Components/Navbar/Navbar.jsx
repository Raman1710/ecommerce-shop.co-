import React from 'react'
import { useState } from 'react'
import dropdown from '../Assets/dropdown.svg'
import searchicon from '../Assets/searchicon.svg'
import profile from '../Assets/profile.svg'
import shopcart from '../Assets/shopcart.svg'
import { Link, NavLink } from 'react-router-dom'

function Nav () {

    const [menu, setMenu] = useState("shop")

  return (
    <div  className='navbar flex gap-10 mx-[148px] my-6 w-[1240px] justify-center  '>
          <div className='navlogo flex justify-center items-center  '>
               <p className='text-[32px] font-integral font-extrabold tracking-tighter '>SHOP.CO</p>
          </div>
          <div className='flex justify-center '>
            <ul className='flex justify-center items-center gap-6 '>
              <li className='relative flex justify-between text-base gap-2  font-satoshi-regular' onClick={()=>{setMenu("shop")}} > <Link to='/' className='flex '  >Shop<img src= {dropdown} className='flex justify-center items-center' /></Link>{menu==='shop'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-36px] left-0'/>:<></>} </li>
              <li className='relative text-base font-satoshi-regular' onClick={()=>{setMenu("on-sale")}}><Link to='/on-sale'>On Sale</Link>{menu==='on-sale'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-36px] left-0'/>:<></>}</li>
              <li className='relative text-base font-satoshi-regular' onClick={()=>{setMenu("new-arrivals")}} > <Link to='/new-arrivals'>New Arrivals</Link>{menu==='new-arrivals'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-36px] left-0'/>:<></>} </li>
              <li className='relative text-base font-satoshi-regular' onClick={()=>{setMenu("brands")}}><Link to='/brands'>Brands</Link>{menu==='brands'?<hr className=' border-0 bg-black w-11/12 h-1 absolute bottom-[-36px] left-0'/>:<></>}</li>
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
