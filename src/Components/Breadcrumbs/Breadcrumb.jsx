import React from 'react'
import arrowIcon from '../Assets/arrow_icon.svg'
const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='flex flex-row mt-6 mb-9 font-satoshi-regular '>
        HOME <img src={arrowIcon}/> SHOP <img src={arrowIcon}/> {product.category.toUpperCase()} <img src={arrowIcon}/> {product.sub_category.toUpperCase()} <img src={arrowIcon}/> {product.name.toUpperCase()}
    </div>
  )
}

export default Breadcrumb