import { Bell, Globe } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import Avatar from '../../../public/images/logo.jpg';

const Header = () => {
  return (
    <div>
      <div className='bg-blue-950 h-18'>
        <div className='flex items-center justify-end mx-4 sm:mx-6 lg:mx-8'>
          <Globe className='mx-3 text-white' />
          <Bell className='mx-3 text-white' />
          <div className='ml-3'>
            <Image
              src={Avatar}
              alt='Bordered avatar'
              width={40}
              height={40}
              className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
