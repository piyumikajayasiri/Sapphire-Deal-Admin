import React from 'react';

import { Raffle } from '@/components/svg/Buttons';

const RaffleButton = () => {
  return (
    <div>
      <button className='bg-blue-600 w-[112px] h-[41px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'>
        Raffle
        <span>
          <Raffle />
        </span>
      </button>
    </div>
  );
};

export default RaffleButton;
