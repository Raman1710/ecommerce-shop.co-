import React from 'react'

const DescriptionBox = () => {
  return (
    <div className=' mt-20'>
        <div className='flex flex-row justify-evenly border-b-2 pb-6'>
            <div className=' font-satoshi-regular text-[20px] font-medium '>
                Product Details
            </div>
            <div className=' font-satoshi-regular text-[20px] text-black/60'>
                Rating & Reviews
            </div>
        </div>
        <div className='mt-8'>
            <p className='font-satoshi-regular '>
            Add a classic edge to your wardrobe with the Slim Fit Denim Jacket, crafted from durable, high-quality denim. Designed with a tailored fit, it offers both style and comfort for any casual occasion. Featuring button closures, chest pockets, and a timeless wash, this jacket is a versatile must-have for layering through all seasons.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox