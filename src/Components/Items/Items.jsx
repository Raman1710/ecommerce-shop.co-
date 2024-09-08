import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

function Items(props) {
  return (
    <div className='flex flex-col items-start  hover:bg-[#F2F0F1] rounded-3xl p-3 w-[310px]'>
        <img src={props.image} className='w-[340x] h-[360px] rounded-xl'/>
        <p className=' font-satoshi-bold font-bold text-[20px] mt-4 mb-2 text-center w-full leading-tight h-[60px]'>{props.name}</p>
        <div className='flex flex-row gap-3 justify-center w-full'>
            <div className=' font-satoshi-bold font-bold text-[24px]'>
                {props.new_price}
            </div>
            <div className='font-satoshi-bold font-bold text-[20px] line-through text-black/40 flex items-center'>
                {props.old_price}
            </div>
        </div>
        
    </div>
  )
}

export default Items