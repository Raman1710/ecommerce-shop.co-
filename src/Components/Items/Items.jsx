import React from 'react'

function Items(props) {
  const newPrice = parseFloat(props.new_price);
  const oldPrice = parseFloat(props.old_price);
  const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;

  return (
    <div className='flex flex-col items-start  hover:bg-[#F0EEED] hover:border-2 hover:scale-105 rounded-3xl p-3 w-[310px]'>
        <img src={props.image} className='rounded-xl flex justify-center w-full h-full'/>
        <p className=' font-satoshi-bold font-bold text-[24px] mt-4 mb-2 text-center w-full leading-tight h-[60px]'>{props.name}</p>
        <div className='flex flex-row gap-3 justify-center w-full'>
            <div className=' font-satoshi-bold font-bold text-[24px]'>
            ₹{newPrice.toFixed(0)}
            </div>
            <div className='font-satoshi-bold font-bold text-[20px] line-through text-black/40 flex items-center'>
            ₹{oldPrice.toFixed(0)}
            </div>
            <div className='bg-[#ff3333]/10 text-[#ff3333]/100 flex justify-center items-center  rounded-[62px] text-[12px] px-[13.5px] py-[6px] font-satoshi-regular font-medium'>
              -{discountPercentage.toFixed(0)}%
            </div>
        </div>
        
    </div>
  )
}

export default Items