import React from 'react'
import aboutus from '../Assets/aboutus.jpg'
import aboutus02 from '../Assets/aboutus02.jpg'
import aboutus03 from '../Assets/aboutus03.jpg'

function AboutUs() {
  return (
    <div className=' mx-[148px]'>
        <p className='font-integral font-extrabold text-2xl tracking-tighter'>ABOUT US</p>
        <div className='flex flex-row mt-6  gap-4  items-center'>
            <div className='w-1/2'>
            <p className='font-satoshi text-lg '>
            Welcome to <span className='font-bold'>Shop.co</span>, your ultimate destination for premium fashion. We are committed to offering an unparalleled shopping experience, bringing together the finest collections of men’s and women’s clothing. At <span className='font-bold'>Shop.co</span>, we believe in the power of style and quality, and that’s why we’ve partnered with the world’s most renowned brands to curate an exclusive selection for our customers.
            </p>
            <p className='font-satoshi pt-6 text-lg '>
            Our catalog features the latest trends and timeless pieces from luxury brands such as Gucci, Calvin Klein, Versace, Zara, and Prada. Whether you’re dressing up for a special occasion or elevating your everyday wardrobe, we have something that will perfectly suit your fashion needs.</p>
            </div>
            <div className='w-1/2  flex justify-center '>
                <img src={aboutus} className='rounded-xl w-[500px] ' />
            </div>
        </div>

        <div className='flex flex-row mt-8 gap-4'>
        <div className='w-1/2  flex justify-center items-center'> 
            <img src= {aboutus02} className='rounded-xl w-[500px] h-[324px]' />
        </div>
        <div className='w-1/2'>
                <p className='font-satoshi-regular font-bold text-2xl'>Why choose us?</p>
                <ul className='pt-6'>
                    <li className='font-satoshi text-lg pb-4'><span className='font-bold'>Diverse Selection: </span>From casual everyday wear to high-end luxury fashion, our wide range of products caters to various styles and preferences. Explore our men’s and women’s collections for the perfect outfits.</li>
                    <li className='font-satoshi text-lg pb-4'><span className='font-bold'>Top Brands: </span> We are proud to collaborate with industry-leading fashion houses, ensuring that you always have access to the finest clothing. Every piece in our collection reflects the quality, craftsmanship, and design excellence of these iconic brands.</li>
                    <li className='font-satoshi text-lg pb-4'><span className='font-bold'>Commitment to Quality:  </span>At Shop.co, quality is our top priority. Each product is carefully selected to meet the highest standards, guaranteeing that our customers receive only the best.</li>
                    <li className='font-satoshi text-lg pb-4'><span className='font-bold'>Customer-Centric Approach: </span> Our customers are at the heart of everything we do. From our seamless shopping experience to our responsive customer support, we strive to exceed your expectations. Your satisfaction is our priority, and we’re here to assist you every step of the way.
                    </li>
                </ul>
            </div>
        </div>

        <div className='flex flex-row  mt-8 gap-4 '>
        <div className=' w-1/2 '>
                <p className=' font-satoshi-regular font-bold text-2xl'>Our Vision</p>
                <div className='pt-6'>
                <p className='font-satoshi text-lg'>
                At Shop.co, we aim to redefine the online shopping experience by combining the latest technology with premium fashion. We are constantly evolving to bring you the most relevant trends and the highest quality products. Our vision is to be your trusted partner in fashion, helping you express your personal style with confidence and ease.
                </p>
                <p className='font-satoshi text-lg pt-6'>
                Whether you’re looking for the elegance of Gucci, the sleekness of Calvin Klein, the boldness of Versace, or the chic simplicity of Zara and Prada, you’ll find it all at Shop.co. Our goal is to make fashion accessible, offering styles that suit every occasion, mood, and individual.
                </p>
                </div>
            </div>
            <div className='w-1/2  flex justify-center items-center'>
                <img src= {aboutus03} className='rounded-xl w-[500px] h-[324px]' />
            </div>
        </div>
    </div>
  )
}

export default AboutUs