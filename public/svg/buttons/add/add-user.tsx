import React from 'react';

interface IconProps {
  className?: string;
}

const AddUserIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='22'
    height='19'
    fill='none'
    viewBox='0 0 22 19'
  >
    <path fill='url(#pattern0_1070_3239)' d='M0.001 0H22.001V19H0.001z'></path>
    <defs>
      <pattern
        id='pattern0_1070_3239'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.00864 0 0 .01 .068 0)'
          xlinkHref='#image0_1070_3239'
        ></use>
      </pattern>
      <image
        id='image0_1070_3239'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
);

export default AddUserIcon;
