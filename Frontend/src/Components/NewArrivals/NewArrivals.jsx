import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import new_collections from '../Assets/new_collections'
import Items from '../Items/Items'
import { Link } from 'react-router-dom'

function NewArrivals() {
  return (
    <div className=' my-12 lg:my-16 mx-4 lg:mx-[148px] flex flex-col items-center  border-b-2  '>
      <h1 className='font-bold lg:font-black font-integral text-3xl lg:text-[48px] mb-14 text-center w-fit '>NEW ARRIVALS</h1>

      <div className='flex flex-row flex-wrap lg:flex-nowrap '>
        {new_collections.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
      <Link to='/new-arrivals'  >
        <PrimaryButton className=" bg-white text-black border-2 font-medium  mt-9 mb-16 hover:bg-black hover:text-white text-xs lg:text-base text-nowrap lg:w-auto">View All</PrimaryButton>
      </Link>

    </div>
  )
}

export default NewArrivals