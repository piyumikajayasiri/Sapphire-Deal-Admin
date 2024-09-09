import React from 'react';

interface IconProps {
  className?: string;
}

const DetailsIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='22'
    height='21'
    fill='none'
    viewBox='0 0 22 21'
  >
    <path fill='url(#pattern0_1038_355)' d='M0.5 0H21.5V21H0.5z'></path>
    <defs>
      <pattern
        id='pattern0_1038_355'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.01111)' xlinkHref='#image0_1038_355'></use>
      </pattern>
      <image
        id='image0_1038_355'
        width='90'
        height='90'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR4nO3cO07DQBSFYYsCKbADtsAG3OZcp3ObnlUQOpeElodIx6rYAY8OKACJymhQaBJssOPcMcn/SSMhyxrwYRij4YgkAQAAAAAA2GLj8XjXzM4kPZhZ2WRIujezaZgj9nP0XgiqacC2PKaxn6P32qxkWx6PsZ+j9zoIuQwj9nP0HkE7IWgnNb9RfEg6zrLsIAxJk3Ct6daR5/mepCtJLy2+qc9mdpmm6SDW/B5BTxbvDdeaBm1msw5+amax5u9M1ScPq3jx3nCtSdBFUeyY2fuqQUh6C3N5z98pgra4Qf+0dWRZdhJp67iONb/Xy3Cy6sswTdOBmV3MXzxNA3iSdF73slr3/J3pYDWUdUGDoH2xop3MjzpX3TruvL7erT4mlXQa+zn+y8H/tM3KFgf/AAAAfUOvwwm9Dif0OpxwqOSEoJ0QdH+CvpmPVn9hyel1/Cno29FotB9G+LhN0Eavoz5oSa/D4fDwO7DwcbjWJOiCXsfvW4eko8XgwjWCbqlqX665/ybC1rGRvY6vfbnq/qr9OqlAr6M66FYjQeMVTdDrQNBO6HU4odfhhF4HAADARqHX4YRehxN6HU44VHJC0E4I2kmL+kBJr6OHQRu9jvUHXdDr8FnRBUH7BB3Q63AKOuX/ddQHR6+jYwTthKCd0OtwQq/DCb0OAAAAAACAZOt9AuQRksmRSF9TAAAAAElFTkSuQmCC'
      ></image>
    </defs>
  </svg>
);

export default DetailsIcon;
