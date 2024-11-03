import React from 'react'
import data_product from '../Assets/data'
import Items from '../Items/Items'
const RelatedProducts = () => {
  return (
    <div>
        <p className=' text-center my-16 font-integral font-extrabold text-4xl'>YOU MIGHT ALSO LIKE</p>
        <div className='flex flex-row'>
            {data_product.map((item, i) =>{
                return <Items key= {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts