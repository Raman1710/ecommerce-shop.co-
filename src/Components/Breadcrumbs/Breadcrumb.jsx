import React from 'react'
import arrowIcon from '../Assets/arrow_icon.svg'
const Breadcrumb = (props) => {
    const {product} = props;
  return (
    <div className='flex flex-row'>
        HOME <img src={arrowIcon}/> SHOP <img src={arrowIcon}/> {product.category} <img src={arrowIcon}/> {product.sub_category} <img src={arrowIcon}/> {product.name}
    </div>
  )
}

export default Breadcrumb