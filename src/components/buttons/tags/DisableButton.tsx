import React from 'react';

import { Disable } from '@/components/svg/Buttons';

const DisableButton = () => {
  return (
    <div>
      <button className='bg-[#FF4F4F] w-[112px] h-[41px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'>
        Disable
        <span>
          <Disable />
        </span>
      </button>
    </div>
  );
};

export default DisableButton;
