import React from 'react';

const FooterImages = () => {
  return (
    <div>
      <svg
        width='24'
        height='18'
        viewBox='0 0 24 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='24' height='18' fill='url(#pattern0_776_511)' />
        <defs>
          <pattern
            id='pattern0_776_511'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              href='#image0_776_511'
              transform='matrix(0.0075 0 0 0.01 0.125 0)'
            />
          </pattern>
          <image
            id='image0_776_511'
            width='100'
            height='100'
            href='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export default FooterImages;
