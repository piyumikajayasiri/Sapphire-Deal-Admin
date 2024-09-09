import React from 'react';

interface IconProps {
  className?: string;
}

const CreateSaleIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='27'
    height='51'
    fill='none'
    viewBox='0 0 27 51'
  >
    <path fill='url(#pattern0_360_2522)' d='M0 0H27V51H0z'></path>
    <defs>
      <pattern
        id='pattern0_360_2522'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.01 0 0 .0053 0 .235)'
          xlinkHref='#image0_360_2522'
        ></use>
      </pattern>
      <image
        id='image0_360_2522'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
);

export default CreateSaleIcon;
