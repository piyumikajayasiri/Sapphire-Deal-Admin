import React from 'react';

interface IconProps {
  className?: string;
}

const SaveIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='24'
    height='42'
    fill='none'
    viewBox='0 0 24 42'
  >
    <path fill='url(#pattern0_309_403)' d='M0 0H24V42H0z'></path>
    <defs>
      <pattern
        id='pattern0_309_403'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.01 0 0 .00571 0 .214)'
          xlinkHref='#image0_309_403'
        ></use>
      </pattern>
      <image
        id='image0_309_403'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/klEQVR4nO2cS27UQBRFPaG3gPjtB8RGEsHikAJIMOcjSBgixklWkGSWwUFWe5BY3fKnyq+uy/cM06rX99WxncS2XtMYY4wxxhhjjCjADngP/ATu2Bb3wFfgaaMA8Bz4U3pXBPhbXEp3ZliGipTuMmVUpHS/Mx7yEXgxYf0jmpWAqhTgthfk5cT1tQg5k5CSuqEVCdkBHw78/F/7R0+xYNHrS3Eot4SUtQsB3gLXHOcKeDM2dyel3OWrAiFXDHM5JXdRKRUIGcXU3MUuX0PBll6fylJCikmpTUgzMtfY3OFSLGTPwB7FSel/Q/T6VI59/1CuqbnDpFjInpF7tbyUfuXo9akc+/6hXHNzLy7FQvZM3LNj/6d8sZAeYw+0oc9nSrm3kEJCHkhJrpM1WPZAKxKSs062ghbyGAsZyVIHUq462QpmDzQRCxnYkKaC2+9T8BnSo334NCDlEnh9YJ2FKGEhYlDxGXKT8hpRCYBXvcw3NQnpv2j3SVkKexmfe5m/1yTkHevnpNT+ZS/Y3c+5YL38Ap6U2r9FCgLPgHPWx+82e+n9W6Rge5QBp8C3A+8LK3HbZTxJOTNy799yBTcGFqKFhYhhIWJYiBgWIoaFiGEhYliIGBYihqyQFc5KuQN+dHerd6X3L2vBCmalXMy9ydgvNKdG1oIVzUo5n3OzsV9k6vrsBSublXIavX/ZC6bOSilF+5i5e9yc9ChXUUjSrJS1v+ygKCRvoGDk+pcLFIxc/3KBgpHrXy5QMHL9ywUKRq5/uUDByPUvFygYuf7lAgUj179coGDk+pcLFIxc/3KBgpHrXy5QMHL9ywUKRq5/uUDByPUvFygYuf7lAgUj179coGDk+pcLFIxc/3KBgpHrXy5QMHL9ywUKRq5/uUDByPU/VDD1c3VQ618uUDBy/csFCkauf7lAwcj1n1qwdiFDWMgGhCRNhNvyGULGyXTZJsJtVQiZJ9PVNhFu9ZPpapoIV8VkulomwlUzmW7NE+GqnExnjDHGGGOMMc1C/AcmfxiNGTK/FwAAAABJRU5ErkJggg=='
      ></image>
    </defs>
  </svg>
);

export default SaveIcon;
