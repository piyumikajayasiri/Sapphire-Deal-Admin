import React from 'react';

import { Vouchers } from '@/components/svg/Buttons';

const VouchersButton = () => {
  return (
    <div>
      <button className='bg-pink-700 w-[112px] h-[41px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'>
        Triggers
        <span>
          <Vouchers />
        </span>
      </button>
    </div>
  );
};

export default VouchersButton;
