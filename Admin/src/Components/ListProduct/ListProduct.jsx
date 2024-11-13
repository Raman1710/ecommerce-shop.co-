import React, { useEffect, useState } from 'react'
import cross from '../../assets/cross.svg'

const ListProduct = () => {
  
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts').then((res) => res.json()).then((data) =>{setAllProducts(data)});
  }
  
  useEffect(() =>{
    fetchInfo();
  },[])

  const remove_product = async (id) =>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }


  return (
    <div className='flex flex-col items-center w-11/12 lg:w-full sm:h-full min-h-[740px] py-[10px] px-[30px] lg:py-2 lg:px-12 lg:m-7 rounded-md bg-white my-5 mx-auto '>
      <h1 className='text-2xl font-bold'>All Products List</h1>
      <div className='grid grid-cols-7 gap-3 w-full  py-[15px] lg:py-5 text-[#454545] text-bas font-semibold text-xs lg:text-base items-center '>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Brand</p>
        <p>Remove</p>
      </div>
      <div>
        <hr/>
        {allproducts.map((product,index) =>{
          return <> 
          <div key={index} className='grid grid-cols-7 gap-3 w-full py-5 text-[#454545] text-bas font-semibold text-xs lg:text-base items-center'>
          <img src={product.image} className='w-80 rounded-lg' />
          <p>{product.name}</p>
          <p>₹{product.old_price}</p>
          <p>₹{product.new_price}</p>
          <p>{product.category}</p>
          <p>{product.brand}</p>
          <img src={cross} className='w-3 lg:w-5 cursor-pointer ' onClick={() =>{remove_product(product.id)}}/>
          </div>
          <hr className='border-2'/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct