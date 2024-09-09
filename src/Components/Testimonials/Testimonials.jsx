import React from 'react'
import Carousel from './Carousel'

function Testimonials() {
  return (
    <div className=' mt-20 '>
        <div className='mx-[148px]'>
            <p className=' font-integral font-black text-[48px] tracking-tighter'>OUR HAPPY CUSTOMERS</p>
        </div>

        <div className='flex flex-row mt-4'>
        <Carousel name='Sarah M.' message= 'I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.' />
        <Carousel name='Alex K.' message= 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.' />
        <Carousel name='James L.' message= "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
        <Carousel name='Sarah M.' message= 'I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.' />
        </div>

    </div>
  )
}

export default Testimonials