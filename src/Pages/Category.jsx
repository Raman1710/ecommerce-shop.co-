import React, { useContext } from 'react'
import dropdown from '../Components/Assets/dropdown.svg'
import {ShopContext} from '../Context/ShopContext.jsx'
import Items from '../Components/Items/Items.jsx'
import SecondaryButton from  '../Components/Buttons/SecondaryButton.jsx'

const Category = (props) => {
  const {all_product} = useContext(ShopContext);

  const filteredProducts = all_product.filter((item) => {
    if (props.category && item.category === props.category) {
      return true;
    } else if (props.sub_category && item.sub_category === props.sub_category) {
      return true;
    } else if (props.on_sale && item.on_sale === true) {
      return true;
    } else if (props.new_arrival && item.new_arrival === true) {
      return true;
    }
    return false;
  });
  
  return (
    <div className=' mx-[148px] '>

        <div className='flex flex-row justify-between items-center px  w-full '>
            <p className='font-satoshi font-semibold '>
            <span className='font-satoshi font-semibold'>Showing 1-12</span> out of 40 products
            </p>
            <div className='flex flex-row gap-1 justify-center items-center px-6 py-3 rounded-3xl border-2 font-satoshi-regular font-semibold'>
                Sort by <img src = {dropdown} />
            </div>
        </div>
       
        <div className='mt-5 grid grid-cols-4 gap-y-20'>
        {filteredProducts.map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

       <div className='flex justify-center mt-8'>
          <SecondaryButton className= 'flex justify-center items-center '>Explore More</SecondaryButton>
        </div>

    </div>
  )
}

export default Category;