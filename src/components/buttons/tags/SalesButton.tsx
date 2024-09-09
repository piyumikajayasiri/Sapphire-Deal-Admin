import React from 'react';

import { SalesButtonSVG } from '@/components/svg/Buttons';

export const SalesButton = () => {
  return (
    <div>
      <button className='bg-green-600 w-[112px] h-[41px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'>
        Sales
        <span>
          <SalesButtonSVG />
        </span>
      </button>
    </div>
  );
};
