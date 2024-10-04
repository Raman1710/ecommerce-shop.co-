import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import email from '../Assets/Email.svg'
import twitter from '../Assets/twitter.svg'
import facebook from '../Assets/facebook.svg'
import instagram from '../Assets/instagram.svg'
import github from '../Assets/github.svg'
import applepay from '../Assets/ApplePay.svg'
import googlepay from '../Assets/GooglePay.svg'
import mastercard from '../Assets/mastercard.svg'
import visa from '../Assets/visa.svg'
import paypal from '../Assets/paypal.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' mt-40 relative  '>
        <div className='flex flex-row justify-center gap-[221px] bg-black py-11 px-16 mx-[148px] rounded-[20px] h-[208px] absolute top-[-100px] '>
            <div className='w-[551px] '>
                <p className=' font-integral font-black text-[40px] text-white tracking-tighter'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            </div>
            <div className='w-[349px] '>
                <div className='flex flex-row justify-start gap-3 bg-white py-4 rounded-[64px] pl-4'>
                <img src={email}/>
                <input type='text' placeholder='Enter your email address' className=' text-black outline-none '></input>
                </div>

                <PrimaryButton className=' bg-white !text-black	font-satoshi font-medium !w-[349px] !mt-[14px] '>Subscribe to Newsletter</PrimaryButton>
            </div>
        </div>
        <div className='bg-[#f0f0f0] pt-[140px] px-[148px] pb-[50px] flex flex-row gap-[113.5px] border-b-2  border-black/10 '>
            <div className='flex flex-col w-[248px]'>
                <h1 className=' font-integral font-black text-[34px] mb-[25px] tracking-tighter'>SHOP.CO</h1>
                <p className='mb-[35px] font-satoshi-regular text-[14px] text-black/60'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex flex-row gap-3'>
                    <img src={twitter} className=''/>
                    <img src={facebook} className=''/>
                    <img src={instagram} className=''/>
                    <img src={github} className=''/>
                </div>
            </div>
            <div className=' '>
                <p className=' font-satoshi-regular font-medium leading-[18px] tracking-[3px]'>COMPANY</p>
                <div className='mt-[26px]  flex flex-col gap-[25px]'>
                <Link to = '/about'>
                 <p className=' font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>About</p>
                </Link>
                <Link to = '/features'>
                     <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Features</p>
                </Link>
                <Link to = '/works'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Works</p>
                </Link>
                <Link to = '/career'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Career</p>
                </Link>
                </div>

            </div>
            <div>
                <p className='font-satoshi-regular font-medium leading-[18px] tracking-[3px]'>HELP</p>
                <div className='mt-[26px]  flex flex-col gap-[25px]'>
                <Link to = '/customer-support' >
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Customer Support</p>
                </Link>
                <Link to = '/delivery-details'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Delivery Details</p>
                </Link>
                <Link to = '/terms-&-conditions' >
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</p>
                </Link>
                <Link to = '/privacy-policy'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Privacy Policy</p>
                </Link>




                </div>

            </div>
            <div>
                <p className='font-satoshi-regular font-medium leading-[18px] tracking-[3px]'>FAQ</p>
                <div className='mt-[26px]  flex flex-col gap-[25px]'>
                <Link to = '/login'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Account</p>
                </Link>
                <Link to = '/manage-delivery'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Manage Deliveries</p>
                </Link>
                <Link to = '/orders'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Orders</p>
                </Link>
                <Link to = '/payments'>
                        <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline' onClick={() => window.scrollTo(0, 0)}>Payments</p>
                </Link>
                




                </div>

            </div>
            <div>
                <p className='font-satoshi-regular font-medium leading-[18px] tracking-[3px]'>SHOP</p>
                <div className='mt-[26px]  flex flex-col gap-[25px]'>
                <Link to = '/new-arrivals'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline'>New Arrivals</p>
                </Link>
                <Link to='/on-sale'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline'>Top Selling </p>
                </Link>
                <Link to ='/mens'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline'>Men</p>
                </Link>
                <Link to = '/women'>
                    <p className='font-satoshi-regular text-[16px] leading-5 text-black/60 text-left hover:underline'>Women</p>
                </Link>
                </div>

            </div>

        </div>
        <div className='bg-[#f0f0f0] px-[148px] flex flex-row pt-[25px] justify-center gap-[690px] pb-[40px]'>
        <div className='flex flex-row justify-center w-full items-center'>
            <p className='font-satoshi  text-[14px] w-full text-center text-black/60'>Shop.co © 2000-2024, All Rights Reserved</p>
        </div>
        <div className='flex flex-row justify-center w-full'>
            <img src={visa} className='' />
            <img src={mastercard} className='' />
            <img src={paypal} className='' />
            <img src={applepay} className='' />
            <img src={googlepay} className='' />
        </div>
        </div>

    </div>
  )
}

export default Footer