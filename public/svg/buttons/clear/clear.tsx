import React from 'react';

interface IconProps {
  className?: string;
}

const ClearIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='23'
    height='37'
    fill='none'
    viewBox='0 0 23 37'
  >
    <path fill='url(#pattern0_1041_1159)' d='M0 0H23V37H0z'></path>
    <defs>
      <pattern
        id='pattern0_1041_1159'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.01 0 0 .00622 0 .19)'
          xlinkHref='#image0_1041_1159'
        ></use>
      </pattern>
      <image
        id='image0_1041_1159'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
);

export default ClearIcon;
