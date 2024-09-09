import { MouseEventHandler } from 'react';

import Edit from '@/components/svg/userProfile';

export default function EditButton(props: {
  command: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <>
      <button
        onClick={props.command}
        className='bg-blue-600 w-[78px] h-[28px] text-white-[17px] p-2 rounded-[12px] flex items-center justify-center gap-2 text-white'
      >
        Edit
        <span>
          <Edit />
        </span>
      </button>
    </>
  );
}
