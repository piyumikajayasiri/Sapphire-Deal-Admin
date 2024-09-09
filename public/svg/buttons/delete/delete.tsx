import React from 'react';

interface IconProps {
  className?: string;
}

const DeleteIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='15'
    height='16'
    fill='none'
    viewBox='0 0 15 16'
  >
    <path fill='url(#pattern0_1041_1266)' d='M0 0.49H15V15.49H0z'></path>
    <defs>
      <pattern
        id='pattern0_1041_1266'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.01)' xlinkHref='#image0_1041_1266'></use>
      </pattern>
      <image
        id='image0_1041_1266'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO3dL4tUURyH8YNYZJPFIChoN2rQ4AaDL0BsBg2iFhHjCi6CMsGmYFJhxRdgMIi4azRuEcRmEcHqLqgrjwxM3Dswemfu95x9PnDbcn977jN/b5hTiiRJkvYI4ARwB3gBvAHezni8Bp4B14DDQ6+nWsBJ4D392gGeGmb2GFeBX8zPd+DsfB5KjQFusBjb42fh0Out4WXqN4vzBVgaet2xgHUW7+7Q607+NDXNOvAQGM14PAI+TjnvN2Df0OuPA6xMuWiX//Pc+ycffbuc7m8ljZh8z9jNu57OvwT86JhxpY8ZTZl8idvNqMcZHzpmrPQ1oxnARsfFWq1pRjMM0gPgOHCup2Oz49G7VtmMg0MGWe1Y4F62bJAsBgljkDAGCWOQMMMF6TL+p2hcqYlBwhgkjEHCGCSMQdoIcrvjZt1ax99vTrnB19eMTmUPBFme8QbmxpT5fc3oVGpikDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgljkDAGCWOQMAYJY5AwBgnjj8+EMUgYg4QBTtG2rVIT4Aht+1xqMt7TCfhKu16W2gBPaNfFUhvgGPCT9nwabzJWagTcpy07499oLLWavJe8oh23Su0mewg+pm7bwKXSEuDMeE9C4A/12AKeA0dLq4BDwAXgJvDgH7ZSHc35uAdcB84DB4a+XpIkSZIkSVKpwF+7tThTYsqZFgAAAABJRU5ErkJggg=='
      ></image>
    </defs>
  </svg>
);

export default DeleteIcon;
