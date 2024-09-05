import React from 'react'
 

function Card({image, title, price, discountPrice, rating}) {
    const product = {
        image: 'path/image.png',
        title: "T-shirt with Tape Details",
        price:"$200",
        discountPrice:140,
        rating: 5
    }
  return (
    <div>
        <div className='w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] flex items-center justify-center'>
            <img src={product.image} alt={product.title} />
        </div>
        <h3 className=' font-satoshi-bold text-[20px] font-bold m-4'>{product.title}</h3>
        <p className=' m-2'>{product.rating}</p>
        <p className='m-2 font-satoshi-bold text-[24px] font-bold'>{product.price}</p>
    </div>
  )
}

export default Card