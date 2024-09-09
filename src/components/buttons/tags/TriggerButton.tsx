import React from 'react';

import { Trigger } from '@/components/svg/Buttons';

export const TriggerButton = () => {
  return (
    <div>
      <button className='bg-green-600 w-[112px] h-[41px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'>
        Triggers
        <span>
          <Trigger />
        </span>
      </button>
    </div>
  );
};
