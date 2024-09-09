import React from 'react';

interface IconProps {
  className?: string;
}

const RemoveIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='15'
    height='15'
    fill='none'
    viewBox='0 0 15 15'
  >
    <path fill='url(#pattern0_2428_3561)' d='M0 0H15V15H0z'></path>
    <defs>
      <pattern
        id='pattern0_2428_3561'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.03333)' xlinkHref='#image0_2428_3561'></use>
      </pattern>
      <image
        id='image0_2428_3561'
        width='30'
        height='30'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO2WSwqEMBBEvYSi9z9OXI0Lj/NkUJDJwv6kBmHGgqy0eN1tUqbrHv2lgAGYjzU0+IvbD/TAi1MrMAWgOT97pbUWT+VHp+93a5Us2IRfQN3gvhoV1tgcntEER+EyaAQuhzq/22I8Cx/DDxldaTttgOugAbgeGgC7E+4bo9bAyW2uNjh3HCcc4ZCJ10tFEkkGJxGDEjg3/hbnKNQBL9mrizuRmvzslZfQZU3of/Qb2gDIApP3EFwGCQAAAABJRU5ErkJggg=='
      ></image>
    </defs>
  </svg>
);

export default RemoveIcon;
