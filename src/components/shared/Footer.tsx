import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='bg-blue-950 h-18 '>
        <div className='flex text-white items-center justify-end gap-7 p-4 pr-4'>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Terms of Service</Link>
          <p>© sapphire Deal, Inc | v1.52.0 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
