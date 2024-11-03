import React from 'react'
import { Link } from 'react-router-dom';

function Items(props) {
  const newPrice = parseFloat(props.new_price);
  const oldPrice = parseFloat(props.old_price);
  const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;

  return (
    <div className='flex flex-col items-center  lg:items-start hover:bg-black hover:text-white hover:border-2 hover:scale-105 rounded-3xl p-3 w-[198px] lg:w-[310px]  '>
       <Link to={`/product/${props.id}`}>
            <img src={props.image} className='rounded-xl flex justify-center w-full h-[250px] lg:h-[429.5px] ' onClick={window.scrollTo(0,0) } loading='lazy'/>
       </Link> 
        <p className=' font-satoshi-bold font-bold text-base lg:text-2xl mt-4 mb-2 text-center w-full leading-tight h-[60px] text-clip capitalize'>{props.name}</p>
        <div className='flex flex-row gap-1 lg:gap-3 justify-center w-full'>
            <div className=' font-satoshi-bold font-bold text-xl lg:text-2xl !hover:text-white'>
            ₹{newPrice.toFixed(0)}
            </div>
            <div className='font-satoshi-bold font-bold  text-base lg:text-xl line-through    flex items-center'>
            ₹{oldPrice.toFixed(0)}
            </div>
            <div className='bg-[#ff3333]/10 text-[#ff3333]/100 flex justify-center items-center  rounded-[62px]  text-[10px] lg:text-xs px-[13.5px] py-[6px] font-satoshi-regular font-medium'>
              -{discountPercentage.toFixed(1)}%
            </div>
        </div>

    </div>
  )
}

export default Items