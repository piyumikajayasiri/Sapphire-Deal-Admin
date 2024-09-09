import React from 'react';

interface IconProps {
  className?: string;
}

const CreateIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='25'
    height='25'
    fill='none'
    viewBox='0 0 20 20'
  >
    <path fill='url(#pattern0_1041_1156)' d='M0 0H20V20H0z'></path>
    <defs>
      <pattern
        id='pattern0_1041_1156'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.02)' xlinkHref='#image0_1041_1156'></use>
      </pattern>
      <image
        id='image0_1041_1156'
        width='50'
        height='50'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/klEQVR4nO2ZeYhNcRTH74x9H4zsYpRkF3/4g/iDbFFolDCelISikEaWoawl+1ZEIVn+QAqF8YdI2cmSnT9kyZZ9++hwpk6vd++77829cx/NqdO7v+X9zu977znnd875OU45OQ7QFpgIzA6JZwGDgaxQ3jeQDawBflE2tCssEDtUwF39lbeWFwK3NrKahAViMzBen7sEJiSOgFigMhKAyApcSAIKVEYiEIELcZcdC0SGG4hAhXjLj5VahheIwISUEZCtusjaRL78nwACjCjx4UA9oG4cS99GndM8cAQBAtmLPzqYloAyBFIMPAeWufBiYBRQMfDdhwDkshMxUVZAgNppCcgEIEBLoBOwGvgBNND+WsA4jYj9cO+ogWwFfqqA7aZ/DKnRy2QhOiEDaQycV/ebbfol/uoIdPPJDX3sI1Zu7H6NXQ/GMaFlcE74qjUMmCvjwHcgV/vbA3uAfUlY5rTLBCCLdHEBMdL09wHuAPeT8G2ZmwlAsoE5wKC0Fk9tH7FyY0/B2HsC+4EaTkhEyKolQeMF4APwqAQIMAT45vMwfAu0iBrIUDV0AdHK9DfXqHiZD54HVI0UiJDGWn9irP8l+q2UlgD/+4iFqVoNtRJYBHwyB2I1Vbv8BDzQTxLG33XFifSXQxOYHCaQbcaoD5g619gkBt7LZb2mwCrgscd/ZwAVggbSSk/w3Va15I3LZoG+CbhHgnKSRMuF+lUlrzmlFXgpfAwACoB1wBMFcx3oHBiQIEhegClwHJc4zXGfW1ETsVfAR1HTTAKySUEstTmNF2l1/hbwGejuRA0EGK4gNntcIBV6pNkv9EqjSmRAVE3Evh66bQSYr0DruIxLGUpoWpRA+ukmJnjMKdI5OS7jWWr4t6IEsk5dd910gcR9tTwnIiAngWtJ5hT5ACIuXWiEbyB6uh42YwukJGTaG4Alpi2h/XTTPi25vT7fFHcbl/ffA14bFq8k9Cauf7H5n5z6QpNSAbJdFjVjR61+au5ebNrPJC83baFV+nxJgMWdJyuALYYlRUDl2v7B5n9ddU5BKkBWylszY3LVcMa0T0ioYto3gPWmLQfZXH0+AjwIQLWG6Zy+qQCpZI1T8ghb8wVqSsBo2jlAZdOuXxInaUgi1KaUQDYBX91ctJ24U2OgfJfYKV2eoptcni4QoI5+5WOeIHRyBz1Bw6JPNruMkz1TXXR1l3GxKfyWlEpUZIBLflEajmnwd0XUMoHc6pKBetiGFND3O5lAwGjd0EWgmc//TFC7uBH2vUxKpHcpX4B3WvDLdQlHJJc5pup0FmjkZBpJCguc003+0GdxNHKvfwh4qmNSelroK+KNkuT2Sl3qVeC9fimJkOVLTE12l/IbOoQQXORdDLIAAAAASUVORK5CYII='
      ></image>
    </defs>
  </svg>
);

export default CreateIcon;
