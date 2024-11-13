import React, { useState } from 'react'
import uploadImage from '../../assets/uploadImage.svg'
const AddProduct = () => {

const[image, setImage] = useState(false);
const[productDetails, setProductDetails] = useState({
  name: "",
  image: "",
  category: "women",
  new_price:"",
  old_price:"",
  brand:"none"
})
const imageHandler = (e) =>{
  setImage(e.target.files[0]);
}

const changeHandler = (e) =>{
  setProductDetails({...productDetails,[e.target.name]:e.target.value})
}

const Add_Product = async () =>{
  console.log(productDetails);
  let responseData;
  let product = productDetails;

  let formData = new FormData();
  formData.append('product',image);

  await fetch('http://localhost:4000/upload',{
    method: 'POST',
    headers:{
      Accept: 'application/json',
    },
    body:formData,
  }).then((resp) => resp.json()).then((data) => {responseData = data});

  if(responseData.success){
    product.image = responseData.image_url;
    console.log(product);
    await fetch('http://localhost:4000/addproduct',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(product),
    }).then((resp) => resp.json()).then((data) =>{
      data.success?alert("Product Added"):alert("Failed")
    })
  }
}

  return (
    <div className='sm:w-auto lg:w-full max-w-[800px] bg-white  py-7 px-12 my-5 mx-7 rounded-md '>
        <div className='mb-4'>
            <p className=' font-integral text-[#7b7b7b]  mb-2'>Product Title</p>
            <input type='text' placeholder='Product Name' name='name' className='outline-none rounded-lg  h-12 text-sm border-2 w-full'  value={productDetails.name} onChange={changeHandler}/>
        </div>
        <div className='mb-4 flex gap-10'>
            <div>
                <p className='font-integral text-[#7b7b7b]  mb-2'>Price</p>
                <input type='text' placeholder='100' name='old_price' className='outline-none rounded-lg h-12 text-sm border-2 w-full' value={productDetails.old_price} onChange={changeHandler} />
            </div>
            <div>
              <p className='font-integral text-[#7b7b7b]  mb-2'>Offer Price</p>
              <input type='text' placeholder='50' name='new_price'  className='outline-none rounded-lg h-12 text-sm border-2 w-full' value={productDetails.new_price} onChange={changeHandler}/>
            </div>
        </div>
        <div className='mb-4'>
          <p className='font-integral text-[#7b7b7b]  mb-2'>Product Category</p>
          <select name='category'className='outline-none rounded-lg p-2 border-2 text-[#7b7b7b] text-sm' value={productDetails.category} onChange={changeHandler}>
            <option value='women'>Women</option>
            <option value='men'>Men</option>
          </select>
        </div>
        <div className='mb-4'>
          <p className='font-integral text-[#7b7b7b]  mb-2'>Brand Category</p>
          <select name='brand'className='outline-none rounded-lg p-2 border-2 text-[#7b7b7b] text-sm'value={productDetails.brand} onChange={changeHandler}>
            <option value='none' defaultChecked  >None</option>
            <option value='ck'>Calvin Klein</option>
            <option value='zara'>Zara</option>
            <option value='versace'>Versace</option>
            <option value='prada'>Prada</option>
            <option value='gucci'>Gucci</option>
          </select>
        </div>
        <div className='mb-6'>
          <p className='font-integral text-[#7b7b7b]  mb-2'>Add Image</p>
          <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):uploadImage} className='w-28 rounded-lg my-2 object-fit'/>
          </label>
          <input type='file' name='image' id='file-input' onChange={imageHandler}/>
        </div>
        <button className='px-20 py-4 bg-black text-white rounded-lg mt-5' onClick={() =>{
          Add_Product()
        }}>Add</button>
    </div>
  )
}

export default AddProduct