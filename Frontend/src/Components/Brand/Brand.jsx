import React from 'react';
import Calvin from '../Assets/calvin-logo.svg';
import Gucci from '../Assets/gucci-logo.svg';
import Prada from '../Assets/prada-logo.svg';
import Versace from '../Assets/versacelogo.svg';
import Zara from '../Assets/zara-logo.svg';

function Brand() {
  return (
    <div className='bg-black py-[44px] '>
      <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center  items-center gap-5 lg:gap-16'>
        {/* First row of logos */}
        <div className='flex justify-center lg:justify-around items-center gap-8 lg:gap-16'>
          <img src={Versace} className='h-6 lg:h-10' alt='Versace' />
          <img src={Zara} className='h-6 lg:h-10' alt='Zara' />
          <img src={Gucci} className='h-6 lg:h-10' alt='Gucci' />
        </div>
        {/* Second row of logos */}
        <div className='flex justify-center lg:justify-around items-center gap-8 lg:gap-16 mt-4 lg:mt-0'>
          <img src={Prada} className='h-6 lg:h-8' alt='Prada' />
          <img src={Calvin} className='h-6 lg:h-10' alt='Calvin Klein' />
        </div>
      </div>
    </div>
  );
}

export default Brand;