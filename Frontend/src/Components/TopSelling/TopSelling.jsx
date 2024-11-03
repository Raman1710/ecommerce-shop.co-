import React from 'react'
import data_product from '../Assets/data.js'
import Items from '../Items/Items.jsx'
import PrimaryButton from '../Buttons/PrimaryButton.jsx'
import { Link } from 'react-router-dom'

function TopSelling() {
  return (
    <div className=' mx-4 lg:mx-[148px] mt-16 text-center'>
        <h1 className=' font-integral text-3xl  lg:text-[48px] font-bold lg:font-black tracking-tighter  mb-8 lg:mb-14'>TOP SELLING</h1>
        <div className='flex flex-col items-center flex-wrap lg:flex-nowrap lg:flex-row'>
        {data_product.map((item, i) => {
            return <Items key= {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
        <Link to='/on-sale'>
        <PrimaryButton className=" bg-white text-black border-2 font-medium hover:bg-black hover:text-white text-xs lg:text-base text-nowrap lg:w-auto ">View All</PrimaryButton>
        </Link>


    </div>
  )
}

export default TopSelling