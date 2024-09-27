import React from 'react'
import StarIcon from '../Assets/StarIcon.svg'
import DullStarIcon from '../Assets/DullStarIcon.svg'
import SecondaryButton from '../Buttons/SecondaryButton';
import PrimaryButton from '../Buttons/PrimaryButton';

const ProductDisplay = (props) => {
    const {product} = props;

    const newPrice = parseFloat(product.new_price);
    const oldPrice = parseFloat(product.old_price);
    const discountPercentage = ((oldPrice - newPrice) / oldPrice) * 100;

  return (
    <div className='flex flex-row gap-10 '>
    {/* left div  */}
        <div className='flex flex-row gap-4 w-1/2'>
            <div className='flex flex-col gap-4'>
                <img src={product.image} className=' w-[152px] h-[167px] border-2 border-black bg-cover rounded-3xl '/>
                <img src={product.image} className=' w-[152px] h-[167px] border-2 border-black bg-cover rounded-3xl '/>
                <img src={product.image} className=' w-[152px] h-[167px] border-2 border-black bg-cover rounded-3xl '/>
            </div>
            <div className='w-[444px] h-[536px]'>
                <img src={product.image} className='rounded-3xl w-[444px] h-[536px]'/>
            </div>
        </div>

    {/* right div  */}
        <div className='w-1/2'>
            <h1 className=' font-integral font-extrabold text-4xl'>{product.name}</h1>
            
            <div className='flex flex-row gap-2 my-4'>
                <img src={StarIcon}/>
                <img src={StarIcon}/>
                <img src={StarIcon}/>
                <img src={StarIcon}/>
                <img src={DullStarIcon}/>
                <p className='font-satoshi-regular'>(122)</p>
            </div>
            <div className='flex flex-row gap-3 mb-5'>
                <div className='font-satoshi-regular font-bold text-black text-3xl'>₹{product.new_price}</div>
                <div className=' font-satoshi-regular font-bold text-black/30 text-3xl line-through'>₹{product.old_price}</div>
                <div className='bg-[#ff3333]/10 text-[#ff3333]/100 flex justify-center items-center  rounded-[62px]  px-[14px] py-[6px] font-satoshi-regular font-medium'>{discountPercentage.toFixed(1)}%</div>
            </div>
            <div className=' font-satoshi-regular mb-7 '>
            Stay comfortable and stylish with this soft, breathable cotton T-shirt. Perfect for everyday wear, it features a relaxed fit and comes in a variety of colors to suit any occasion.
            </div>
            <div className='border-y-2 py-6'>
                <h1 className=' font-satoshi-regular'>Choose Size</h1>
                <div className='mt-4 flex gap-3 justify-start'>
                    <SecondaryButton className=''>Small</SecondaryButton>
                    <SecondaryButton>Medium</SecondaryButton>
                    <SecondaryButton>Large</SecondaryButton>
                    <SecondaryButton>X-Large</SecondaryButton>
                    <SecondaryButton>XX-Large</SecondaryButton>
                </div>
            </div>
            <PrimaryButton className='text-white w-full'>Add to Cart</PrimaryButton>
        </div>
    </div>
  )
}

export default ProductDisplay