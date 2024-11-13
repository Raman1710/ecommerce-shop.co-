import React from 'react'
import {Link} from 'react-router-dom'
import AddProduct from '../../assets/addProduct.png'
import ListProduct from '../../assets/ListProduct.png'
const Sidebar = () => {
  return (
    <div className='flex flex-row lg:flex-col py-7 lg:pt-7 gap-5 max-w-[none] lg:max-w-[250px] w-full   lg:h-screen bg-white justify-center lg:justify-normal '>
        <Link to={'/addproduct'}>
            <div className='flex  justify-center items-center rounded-md gap-5 cursor-pointer px-2 py-1 bg-slate-200 mx-5'>
                <img src={AddProduct} className='w-10' />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'}>
            <div className='flex justify-center items-center rounded-md gap-5 cursor-pointer px-2 py-1 bg-slate-200 mx-5'>
                <img src={ListProduct} className='w-10' />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar