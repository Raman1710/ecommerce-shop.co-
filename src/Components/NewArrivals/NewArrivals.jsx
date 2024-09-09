import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import new_collections from '../Assets/new_collections'
import Items from '../Items/Items'

function NewArrivals() {
  return (
    <div className=' my-16 mx-[148px] flex flex-col items-center border-b-2'>
      <h1 className=' font-black font-integral text-[48px] mb-14'>NEW ARRIVALS</h1>
      <div className='flex flex-row'>
        {new_collections.map((item, i) => {
            return <Items key= {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
      <PrimaryButton className=" bg-white text-black border-2 font-medium  mt-9 mb-16 hover:bg-black hover:text-white ">View All</PrimaryButton>
        
    </div>
  )
}

export default NewArrivals