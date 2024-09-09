import Image from 'next/image';
import React from 'react';

import Logo from '../../../../public/images/logo1.png';

const HeroSection = () => {
  return (
    <div className='min-h-screen flex flex-col items-start justify-center bg-blue-950 p-10 sm:p-20'>
      <Image
        alt='Sapphire Deal Logo'
        src={Logo}
        className='w-44 h-auto mb-4 sm:w-[179px] sm:h-[134px]'
      />
      <p className='text-white text-3xl sm:text-[33.3px] font-medium py-4 text-center'>
        Welcome to Sapphire Deal
      </p>
    </div>
  );
};

export default HeroSection;
