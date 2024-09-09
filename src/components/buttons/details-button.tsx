import { MouseEventHandler } from 'react';

import { Details } from '@/components/svg/Buttons';

export default function DetailsButton(props: {
  command: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <>
      <button
        onClick={props.command}
        className='bg-white w-[78px] h-[28px] text-black p-2  flex items-center justify-center gap-2'
      >
        Details
        <span>
          <Details />
        </span>
      </button>
    </>
  );
}
