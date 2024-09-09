import React from 'react';

interface IconProps {
  className?: string;
}

const AddLocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='28'
    height='28'
    fill='none'
    viewBox='0 0 28 28'
  >
    <path fill='url(#pattern0_1041_1220)' d='M0 0H28V28H0z'></path>
    <defs>
      <pattern
        id='pattern0_1041_1220'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.01)' xlinkHref='#image0_1041_1220'></use>
      </pattern>
      <image
        id='image0_1041_1220'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
);

export default AddLocationIcon;