import React from 'react';

const Previous = () => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='30' height='30' fill='url(#pattern0_4315_1580)' />
      <defs>
        <pattern
          id='pattern0_4315_1580'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_4315_1580' transform='scale(0.0333333)' />
        </pattern>
        <image
          id='image0_4315_1580'
          width='30'
          height='30'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR4nO3WMUrEQBTG8UEQKztBsLLwAEKwCciQ/zeB2Gqjd1CvkML1EFZ6hT2AYiOoeAZBwUrsRBBllRGLcVjs3qzCfjBVih/z8vLynJvmP6Su63lJV5I+vs+ZOdr3/YykYYLGc2MOSzpMUeDJe79ijW5JGiXwWwhBpmjbtqvAc3bbXVMUWATus/d6bIpWVTULnGfoRdd1c6YwcJSV9y5WwBSVtJ/d9EXSmikaQlDs2gQdAdumqPd+WdJjVuIDZx3gOivxME4sc1g/53A52I8ptaSBKxFgHXhNm6tpmp0iuKS94p/TLwPkIYSw5KxTTWpkxnjvF4Db7OYnrkTaMb/F2ANF8BDCZroIAO/ARhFc0qD46jPRZS9Zby8T+PTrwTR/KZ9yet4pJbtkOQAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};

export default Previous;

export const Next = () => {
  return (
    <>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='30' fill='url(#pattern0_4315_1579)' />
        <defs>
          <pattern
            id='pattern0_4315_1579'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_4315_1579' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_4315_1579'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO3WMUoEMRTG8bAgVnaCYGXhAYTRZkDC/L83MLba6B1cr5DC9RBWegUPoNgILngGQcFK7EQQRWXAImRbE2TYD1L/eG/eJM+5ef5TJF1J+v4907qul0rBdxHcn4sQwig77L1fk/Sc4BNXIsA28B7BX03THBTBJY2Tqt8kbRXBgdMYB57MbDU7XFXVAnCdVH7Tdd1idtx7vwzcJ5WfuxJp23YDeE0qHxfBzWy3n+6o6k9gpwguaZK0/MV7v54dDiGM+pssafl0uLCkk+KtlrQXD5ekDzNT8d8JOMyKAivAY/Jdz4Z5ZTL7SDz0HciKSjpKn0Uz28yKmpn6qY0XAWC/+OoDHLvBLnuSLiP0tth6O4/7g/wAL/XeLeqeN1QAAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    </>
  );
};

export const Location = () => {
  return (
    <>
      <svg
        width='28'
        height='28'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='28' height='28' fill='url(#pattern0_955_623)' />
        <defs>
          <pattern
            id='pattern0_955_623'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_955_623' transform='scale(0.02)' />
          </pattern>
          <image
            id='image0_955_623'
            width='50'
            height='50'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkklEQVR4nO2aa4hVVRTHb1ppDyNCnQiiB5WV0afSPkQvi8zoQ2DkoCiVkuMUolaGRaZmY9GHjEyNyIiyIvItlVCpVBDzqTIwK/OD9LCwrLSn/WLN/DezOnPvnX3O2XdmghYcuHef//6vte4+e62117mVyv/SXYDhwCRgJbAd2APs1/WlxlYAE4Fhlf4mwBhgI/An8fIHsAG4qj84cKF+5SB/Ax8AbcDNwCjgLOBsYLTGlgDtGae2Ahf0hQNHAHPdCtiv+6QZnYPDnHtKcwPHXcbdWOu7DDgaeMX9mq+ZUSX4zgHWOb7VpiOt1d2VHgVsksK/gJkJuWeJE+2dI1NxV1O2Sop+BsY2gP864BfpeDo1f1Byq9vQNzZESaVDz3jpMJmcmvwU4IDIH8iRU1qApbqm21jk3Ael60egqbQDjvg5EbfHRBVghntEvNhYS8T8AcD7mvNMKidOd2F2TATeViHIu8ACXe+58ekRPBe7sHxaCkceFuGWCGwTcFD4+6rcv9+tTI8lCvCG8IvK+BDIrF4iZoMDc4T9yB6PGo/MDmFmRW58ky/K+GBEIzpo4BAwKAJvydFkXh1MWJVXI/iOAX4VPrpqqEZ0i0jeisRvE765DqZZmG2RnO8IPyWP7VmSR0TyeCR+c0+PDTBbmI2RnE8I35bH9izJCz0ZlsE/JPzmOpjXhVkYyTlb+Ofz2J4lCcXc1Ej8SJeVr61yf6zuGea8SM5pmrO2iA+BJFS5rTnmrHABwkL3lbra3MZdnoNvRmxwqEeyXCTzc5b5L1NbXspTpgPzSxeRFkaD8oKVrJ0tPtT1oo0V4FktG+bmnZs1xmRXpY8E2C0bxpUhGa6NadepBTkGVMvyORPy78DxRTg8WXtsoef2SLMi3ldub9jntcAEO2lGcs3U3LdLOSEyq1xji8ZxwOf0LJ/F7Bdgi/D3pHDkfJEdrvV4qauyxOWQ/Qq91gIaqmu0xn4QxrCLa51v6Dw+HBZuRGlHRGq9qpqnQ7WCgiwDhtThGqI2UJClNXCL89R5sY7cJtJvgWMz91rdit2eg7NFc8ieGuns1nytezeldGQQsFfEd7jxM91BakEB3oWaaxxnuPGJLkBEBYa8fSd00OogB64JgQAYWIBzoNvQV7uxnbVOmSkcOQ74LtumUaE4uATvYONw3ydJx/f19lopcae7ncmXvGs1PpWOe1Pze0UnAvukaE4D+FvFva90Jo9QNlXKDqRsngEnqyH3r4DSMFHtFPLKswl5Q5W7o6EN7IzSS5RxLQ+MSsAXop/JFWmszN9G/cTaNiVzVAi3q9JaGWfAUJd9HyvBExoW3wAnpbUy3ojr3SN2ecGXqKFMGd8YK+ONsVfR6PXzCTnmNbkVXdlYK+Mzfkhi62JOg4p8oTT5OFuI9pkAF7lWz6IcFYK9wju30p+ErorV9syEOrgb3EvPtK/WUgnwqCvLu/2jAbhUjTuTZZX+KnQWfetl6CHfNgUuA37SvfVFyv5eFXVR1sjg39SEvlufTd4sk0B7VaxWcrWTlzVlzi59Iuqs3KlO4W6tTO/8z6TyH5Z/AO8qIHZ1E9+kAAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>
    </>
  );
};

export const SelectSVG = () => {
  return (
    <>
      <svg
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='30' fill='url(#pattern0_1093_1461)' />
        <defs>
          <pattern
            id='pattern0_1093_1461'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_1093_1461' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_1093_1461'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvElEQVR4nO2WsQrCMBCGv8W3cBBcHOqko+BqcRF8Id9TtGAEaWf3k8IJnew1nBE1P/xDuCQfd/mHQNY/agtcAXFyAEoLODhCn75YwPIm9yqD5RtGXQMLYJUSXAOF3rFMBW6AuZ6fAbcU4MYAlVjwHtgB9xfjLXTtGq6p1tYd+BCoxIIrYKL1NrEn43hd3vgIjHXPaECnLuGqOp1bO3VL9Rk4aJolJVgi3asMllSjDp/6+pTO8Ba6sYCzfksPRFa8luPaOdMAAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    </>
  );
};
