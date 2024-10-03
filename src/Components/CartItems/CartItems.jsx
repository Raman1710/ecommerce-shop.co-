import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import removeIcon from '../Assets/removeIcon.svg';
import PrimaryButton from '../Buttons/PrimaryButton';
import arrowDown from '../Assets/arrowdown.svg'
import EmptyCart from '../Assets/EmptyCart.svg'
import PromoCode from '../Assets/PromoCode.svg'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    // Set delivery fee
    const deliveryFee = 199;

    // Calculate subtotal and discount dynamically
    let subtotal = 0;
    let discount = 0;
    let totalItems = 0;

    all_product.forEach((e) => {
        if (cartItems[e.id] > 0) {
            totalItems += cartItems[e.id]; // Count total items in the cart
            // Add product's new price to subtotal
            subtotal += e.new_price * cartItems[e.id];

            // Calculate the discount (old price - new price) for each product
            discount += (e.old_price - e.new_price) * cartItems[e.id];

            
        }
    });

    // Calculate total (Subtotal - Discount + Delivery Fee)
    const total = subtotal + deliveryFee - discount;

    return (
        <div className='mx-[148px] border-t-2'>
            <p className='font-integral font-extrabold text-2xl tracking-tighter pt-6'>YOUR CART</p>

            {/* Check if the cart is empty */}
            {totalItems === 0 ? (
                <div className='mt-6 flex flex-col items-center justify-center'>
                    <img src={EmptyCart} className='' />
                    <p className='text-3xl font-bold text-black'>Cart Empty</p>
                    <p className='text-xl mt-3 text-black/60'>Your cart is empty.</p>
                    <p className='text-xl  text-black/60'>Start adding items to enjoy shopping!</p>
                </div>
            ) : (
                <div className='mt-6 flex flex-row w-full gap-10'>
                    {/* Left div */}
                    <div className='flex flex-col w-1/2 gap-6'>
                        {all_product.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <div className='flex flex-row gap-5' key={e.id}>
                                        <div className='flex flex-row border-2 border-black/10 rounded-3xl p-6 gap-4 w-full'>
                                            <div className='w-32 h-32 flex-shrink-0'>
                                                <img src={e.image} className='w-32 h-32 rounded-xl object-cover' alt={e.name} />
                                            </div>
                                            <div className='flex flex-col justify-between w-full gap-1 items-start'>
                                                <div className='w-full'>
                                                    <p className='font-satoshi-regular font-bold text-2xl'>{e.name.toUpperCase()}</p>
                                                    <p className='font-satoshi font-medium text-sm'>Size:<span className='text-black/60'> Large</span></p>
                                                    <p className='font-satoshi text-xl font-bold'>₹{e.new_price}</p>
                                                </div>
                                                <img
                                                    src={removeIcon}
                                                    onClick={() => removeFromCart(e.id)}
                                                    className='cursor-pointer w-6 h-6 self-end'
                                                    alt="Remove item"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>

                    {/* Right div: Order Summary */}
                    <div className='w-1/2 flex  flex-col ml-10'>
                        <p className='font-satoshi font-bold text-2xl mb-6'>Order Summary</p>
                        <div className='border-b-2 flex flex-col gap-5 w-3/4 '>
                            <div className='flex flex-row justify-between items-center '>
                                <p className='font-satoshi-regular text-xl text-black/60'>Subtotal</p>
                                <p className=' font-satoshi-regular font-bold text-xl '>₹{subtotal}</p>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <p className='font-satoshi-regular text-xl text-black/60'>Discount</p>
                                <p className='text-[#ff3333] font-satoshi-regular font-bold text-xl '>-₹{discount}</p>
                            </div>
                            <div className='flex flex-row justify-between mb-5'>
                                <p className=' text-black/60 font-satoshi-regular text-xl'>Delivery Fee</p>
                                <p className='font-satoshi-regular font-bold text-xl '>₹{deliveryFee}</p>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between font-satoshi font-bold text-xl pt-3 w-3/4'>
                            <p className=' font-normal text-xl'>Total</p>
                            <p className='font-satoshi-regular font-bold text-2xl '>₹{total}</p>
                        </div>

                        <div className='mt-6 flex flex-row items-center gap-3 '>
                            <div className='flex flex-row justify-center items-center gap-3 w-1/2 bg-[#F0f0f0] py-4 rounded-3xl'>
                                <img src={PromoCode} className='w-6 h-6'/>
                                <input placeholder='Add promo code' className=' bg-[#F0f0f0] outline-none' />
                            </div>
                            <PrimaryButton className='text-white !mt-0  text-center'>Apply</PrimaryButton>
                        </div>

                        <PrimaryButton className='mt-5 text-white w-3/4 flex flex-row items-center justify-center gap-4'>Go to Checkout <img src={arrowDown} className='flex items-center justify-center'/></PrimaryButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;
