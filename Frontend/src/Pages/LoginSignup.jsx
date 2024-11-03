import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../Components/Buttons/PrimaryButton'
import Google from '../Components/Assets/Google.svg'
import Line from '../Components/Assets/Line.svg'


function LoginSignup() {
  return (
    <div className='flex flex-row gap-8 mx-[148px] bg-black/10 rounded-3xl mb-40'>
      <div className='w-1/2 m-8 flex  flex-col items-center  '>
        <div className='flex flex-col' >
          <p className=' font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide'>Welcome Back 👋</p>

          <p className='font-satoshi-regular text-[20px] leading-[150%] tracking-wide'>Sign in to unlock exclusive fashion collections.</p>
        </div>
        <div className='flex flex-col mt-12 '>
          <div className='flex flex-col gap-2'>
            <span className='font-satoshi-regular '>Email</span>
            <input type='email' placeholder='example@email.com' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none' />
          </div>
          <div className='flex flex-col gap-2 mt-6 '>
            <span className='font-satoshi-regular '>Password</span>
            <input type='password' placeholder='At least 8 characters' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none' />
          </div>
          <Link><p className='text-left my-6 font-satoshi-regular hover:underline '>Forgot Password?</p></Link>
          <PrimaryButton className='text-white w-[338px] mt-0'>Sign in</PrimaryButton>
        </div>

        <div className='flex flex-row relative items-center justify-center mt-12 mb-6 gap-2'>
          <div className='flex flex-row'>
            <img src={Line} className='bg-black/10 w-[150px]' />
          </div>
          <span className=' font-satoshi-bold font-medium'>Or</span>
          <div>
            <img src={Line} className='bg-black/10 w-[150px]' />
          </div>
        </div>


        <div className='flex flex-row w-[338px] py-3 rounded-[64px] justify-center items-center bg-black gap-4'>
          <img src={Google} className='' />
          <p className='text-white hover:underline cursor-pointer'>Sign in with Google</p>
        </div>

      </div>

      <div className='w-1/2 m-8 flex  flex-col items-center bg-black text-white rounded-3xl '>
        <div className='flex flex-col' >
          <p className=' font-satoshi-regular text-[36px] font-medium leading-[100px] tracking-wide'>I'm new here 🙂</p>

          <p className='font-satoshi-regular text-[20px] leading-[150%] tracking-wide'>Sign up to start your fashion journey.</p>
        </div>
        <div className='flex flex-col mt-12 '>
          
          <div className='flex flex-col gap-2 '>
            <span className='font-satoshi-regular '>First Name</span>
            <input type='text' placeholder='Ryomen' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
          </div>
          <div className='flex flex-col gap-2 mt-6'>
            <span className='font-satoshi-regular '>Last Name</span>
            <input type='text' placeholder='Sukuna' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
          </div>
          <div className='flex flex-col gap-2 mt-6'>
            <span className='font-satoshi-regular '>Email</span>
            <input type='email' placeholder='example@email.com' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
          </div>
          <div className='flex flex-col gap-2 mt-6 '>
            <span className='font-satoshi-regular '>Password</span>
            <input type='password' placeholder='At least 8 characters' required className='py-3 pl-3 rounded-xl font-satoshi-regular outline-none text-black' />
          </div>
          <PrimaryButton className='text-black bg-white w-[338px] mt-6 mb-8'>Create an account</PrimaryButton>
        </div>

       
      </div>

    
    </div>
  )
}

export default LoginSignup