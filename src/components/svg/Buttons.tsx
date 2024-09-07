import React from 'react';

export const Raffle = () => {
  return (
    <div>
      <svg
        width='26'
        height='28'
        viewBox='0 0 26 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='26' height='28' fill='url(#pattern0_516_1008)' />
        <defs>
          <pattern
            id='pattern0_516_1008'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              href='#image0_516_1008'
              transform='matrix(0.01 0 0 0.00928571 0 0.0357143)'
            />
          </pattern>
          <image
            id='image0_516_1008'
            width='100'
            height='100'
            href='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </div>
  );
};

export function Disable() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='25' height='25' fill='url(#pattern0_1078_1278)' />
        <defs>
          <pattern
            id='pattern0_1078_1278'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_1078_1278' transform='scale(0.01)' />
          </pattern>
          <image
            id='image0_1078_1278'
            width='100'
            height='100'
            href='data:image/png;base64,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'
          />
        </defs>
      </svg>
    </>
  );
}

export const Trigger = () => {
  return (
    <>
      <svg
        width='25'
        height='37'
        viewBox='0 0 25 37'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='25' height='37' fill='url(#pattern0_516_1009)' />
        <defs>
          <pattern
            id='pattern0_516_1009'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              href='#image0_516_1009'
              transform='matrix(0.02 0 0 0.0135135 0 0.162162)'
            />
          </pattern>
          <image
            id='image0_516_1009'
            width='50'
            height='50'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYElEQVR4nO2Zy0tVURTGj5plIYL0sBIKR2E2z4mIjW3gsKCoHFVSg0J6Ufagggp7DoqoRqGV9RdISqFJJhTUQMmBkBiNepeRv9i1Tq6ud1/P8Zx91LgLNlzu/s73rXXu/vY5d23Py0Y2shFbAAXAKeAkkOOAP0e4jUZB3Py+SCnwlPEoc6BRpviNVqkLgUElcjlWgX+1LimdwdhuGLAY6BfiMaApFuLMmruBn6qYkqiEc4EnQmiINwS4pghYD5wB2oBOGffku1qDCcCzURXTbXKJUsg59TPvmwRbDlwDvjB5GMxVYNUknPvVNWenWkSluiOttl0KmAecAEZTku2XX+GKDPN5IAVjrjlmu9v82cXuqBWxNmwRhuCZELwBCi24RUCPSuydJLYiA/dK4Lhg/TDLd6EFXyg5mOgNte0DdUpkmwVTArxSuJtAcQiNYuCWuv4lsMSCrVe4ujCFdMlFz4G8NPNzgIfqJ98ZmHwiV4Nawu0WvTzghWC6ghKvUdVvsmCOKEzDVItQfLsU3yELZrPCVAQhbRLw13TbJLAM+CSY21GLULwtwvkRWGrZ1k1OBHqWqedGm2W+WeZNMctjfgX6nGmrleeSiZ4ghG2yLVanmcsFhoXsfEw1aP6Lwm12qdw089WS290gZLm2Jy9QpdZpZUz5pz67/KiyYIrSFRlWyPfPiMPX+BHRcPdOB3SISItDjVbR6HD5p8rfNbY7EfF+6+wQjW/AfBcCNX9XL5THLjCus1rp1LgQ8P3x1oU/EvMJCfjDuU+S8odznyTlD+c+Scofzn2SpD+c+SRpfzjzSdL+sPhknTfb/GHxyVFvNvojjU86vdnojzQ++Q4s8GabP2L3iWkEuPz/EdInh6MQmV6ViUexZhguh8eSw40oJBeEZCDy38up6ecCryP3CKSr7seeWLMMpr9X6ddGvSN+1xH5bNpBpx2P5hTd7jgaDqbH28f0RV/kgx5VTL5pZgP3pfvem2b4xwrDlnk9/N7YqGW+R7SMZn4sRYQo1jSgAzWZZamYaPdmWgBb1XLYkgFXHwQ3bSHLzz8c+gEc0K/f5hUDOChzCDbZZRPyGHtI3fH3svuY8UF9P+TinD7WMEcCwAM5yk6NMTHxhGODGRtABdAIXJfRGOiAJhve/xG/AF9K0PYG62mCAAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>
    </>
  );
};

export const Vouchers = () => {
  return (
    <>
      <svg
        width='30'
        height='41'
        viewBox='0 0 30 41'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='30' height='41' fill='url(#pattern0_516_1000)' />
        <defs>
          <pattern
            id='pattern0_516_1000'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              href='#image0_516_1000'
              transform='matrix(0.02 0 0 0.0146341 0 0.134146)'
            />
          </pattern>
          <image
            id='image0_516_1000'
            width='50'
            height='50'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACnUlEQVR4nO2YTUjUQRjGR73kHj1pHjIi7JCnulUQeSnMU6c6i56igxrWpcA8CeK1i7fAAr14Ctogo+jjkJcy+rhEEJJQWtBa0i9GHmma9ntnd/9/mOcyO+887+z7/OfjnRljIiIiIiIiAgE4C2SB7yQX3xTjQCERN0gfJvONhEUOGAO6TEIBdAHjipV/Rga4L+OYSQmAy4o56xrtvLPoNCkB0KmYN13jDkzKgB93rUK0xtZtGSrIZglZVhcPqu2j6UKAg8BvZ0vsDRlsI4VMyX1b5VQ1/TRVCNAKfJD7FZUfgbbQQddbyBm5vgFagFXVT5uUCbmzOxqqX1X9duCYaxMC9AHDwChwDZgGbgLzwJKOCXZtdIvfrXpO7fPiT8t/VP31mQYLWaM0FjyfhTJ81hotZMLZWjf0Ve0XPQ8MAieBds+nXfZB8YblZ/1RfxMNFeJk7a+ivAB6TAXQdHsqf3umO1eJfzAhau91dqTPwKmi//DX7xjwSX7vgMMmIKhUiDgdwF1RfwJDJfhD4iG/joAaqhciXhswI/pWCe6WeDP1SpBUK8RLgs9K8J7XOzlSo5BZ/76srH7Alo5tUrzZ8BLCCHkt+nHVrYB7sj0EDsl+QrZVUydQwxrpEXVD+eJSnqejH8B1IAN8kW1/0oSMiPoSWHES3JxGZs5JoCviWYwkTcii9/XfA/0ep185w8Vigf4e2elY7u8gQnT32D1mbOsgmCnAzaj9lzMVW/Pw7JpaLvd3KCEt2lLtceNoMa7jcwR4Yrdqd0dr+tRK4Ivjf+9amzumBD+V+gAuKObHrtG+bluMmxQA2AO8UswX3YYBGXN6U91rEgpgn5OA3/r3IfdIkRasF7wya2SyzqN2UgXcqvSCFxERERERYYrgDxvXV4UdIDC4AAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>
    </>
  );
};

export const Delete = () => {
  return (
    <>
      <div>
        {' '}
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='26' height='26' fill='url(#pattern0_776_440)' />
          <defs>
            <pattern
              id='pattern0_776_440'
              patternContentUnits='objectBoundingBox'
              width='1'
              height='1'
            >
              <use href='#image0_776_440' transform='scale(0.02)' />
            </pattern>
            <image
              id='image0_776_440'
              width='50'
              height='50'
              href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVR4nO2av2sUURDHV1N4mpAiQWw0phG3EiRYiKJtKuMfkDbHlbGIhfgDhJBCSBCJYCwsAykFOYiFmmBQSEy00LMQwSIiKFGwUAs/MpcRnufb2x+3e3l77BcGbubNm3nfnX2zu7freQUKuA/gLPAEeBcij4EznosA+oDvwCawECKb6tvnuQbgCts4FcH3tPpe9lwCsAf4CDyPMWcF+ASUsl2dV0/WBfjAUIhc0iN8LYLvXxFfdG6Yry9rSUriMPAWd1ADBpIQuQv8AiaA8g7LhK5lLgmRR8CGoe9uGI+ltxoD2JA1JSWybugPgFlDX5NOZeylD3L0VO8FvgAjhv95tfWqXtY59XMfuCoxDf/bktPQ19Mi8gaoGvoWcE9/l/Q8nlJ9UPVxw39cbYOqT6le71oSC9gy/KuSMwsiUSoy1qQiIyEVkeuQWZHZNCvSEXtkzqGudVHXcicJkQHdF67gNXAoNhHLlf293lYMtUlWNGdrV3YLqX+6VtagoWulGbgg4nxFgH0BvqWg9ht0294Yi3YRAfYDP4FzFt8XwLTFPiNjFrtcLH9IzJ0gIp1EULH4ykPWvMU+L2MWe0Vj+QURRyoyprGO5P3UOgBcAHblmkhAvmruiAAngCWgO+9Eiq4VG51ckb3AfeBYrok0Q66IsP3QdR04mHciRzV5Oe9E/E7Z7H6nEOkHvgLDFt+nwKTFPiljFvuw/nPZ33YiavvvKbCZPc4cXGi/KeWrFkQiVOQbsJqCPANOGi+UzLFKOyryGXiYgsgij2vcGw1jo1kTeQUspx44ON8y8DKLwLeA38BihA8CWpVFzXUzCyI9+jqsFuETjValpi96elInUqCAFwt/AAhNhkQMfalwAAAAAElFTkSuQmCC'
            />
          </defs>
        </svg>
      </div>
    </>
  );
};

export const CreateTrigger = () => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='30' height='30' fill='url(#pattern0_1093_1582)' />
      <defs>
        <pattern
          id='pattern0_1093_1582'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_1093_1582' transform='scale(0.0333333)' />
        </pattern>
        <image
          id='image0_1093_1582'
          width='30'
          height='30'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVElEQVR4nO2VO0oDURSGR8F0ESGF4h608gGuwGCvixCXYCyC6A4EHzvRJjFaioUKxsrE3kQt4ycHzuDl5DqZZ7DIBxfCf5j/Y+7MnQTBhP8MsAV0gQ5QHae4wy+v4xAuAHWGkWy+KOkO0ONvZLZdhHTAaAaJ5cA00JJl8sURd2p5l0diOlpAUxw+cVUvfDb5Icmpm4625ps+8bkO901+n0J8Zzpqmp/5xE86XDH5Vwrxp+lY0/zBJ/7QYdnkqTAdZY37PnFfh7MFiOc07vnEjzpcdbKptGK51ulZj9rq8OWqOVklg7ji9Bxodhp1nNpOtpxBvOT0vEQdp/AD0nCyvQziXafnWtfwB8QHcJVBfBlLYtGz9002NoIkADPALdm5ka4k4hPy4yKuVF6wvGnGEcvfV940Ym/3hBDgzbOV3aBogGOP+Ggc4pLK5c5lye9S4eK8+AHmhsINZO+xIAAAAABJRU5ErkJggg=='
        />
      </defs>
    </svg>
  );
};
export const Details = () => {
  return (
    <svg
      width='22'
      height='21'
      viewBox='0 0 22 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='0.5' width='21' height='21' fill='url(#pattern0_614_62)' />
      <defs>
        <pattern
          id='pattern0_614_62'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use href='#image0_614_62' transform='scale(0.0111111)' />
        </pattern>
        <image
          id='image0_614_62'
          width='90'
          height='90'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR4nO3cO07DQBSFYYsCKbADtsAG3OZcp3ObnlUQOpeElodIx6rYAY8OKACJymhQaBJssOPcMcn/SSMhyxrwYRij4YgkAQAAAAAA2GLj8XjXzM4kPZhZ2WRIujezaZgj9nP0XgiqacC2PKaxn6P32qxkWx6PsZ+j9zoIuQwj9nP0HkE7IWgnNb9RfEg6zrLsIAxJk3Ct6daR5/mepCtJLy2+qc9mdpmm6SDW/B5BTxbvDdeaBm1msw5+amax5u9M1ScPq3jx3nCtSdBFUeyY2fuqQUh6C3N5z98pgra4Qf+0dWRZdhJp67iONb/Xy3Cy6sswTdOBmV3MXzxNA3iSdF73slr3/J3pYDWUdUGDoH2xop3MjzpX3TruvL7erT4mlXQa+zn+y8H/tM3KFgf/AAAAfUOvwwm9Dif0OpxwqOSEoJ0QdH+CvpmPVn9hyel1/Cno29FotB9G+LhN0Eavoz5oSa/D4fDwO7DwcbjWJOiCXsfvW4eko8XgwjWCbqlqX665/ybC1rGRvY6vfbnq/qr9OqlAr6M66FYjQeMVTdDrQNBO6HU4odfhhF4HAADARqHX4YRehxN6HU44VHJC0E4I2kmL+kBJr6OHQRu9jvUHXdDr8FnRBUH7BB3Q63AKOuX/ddQHR6+jYwTthKCd0OtwQq/DCb0OAAAAAACAZOt9AuQRksmRSF9TAAAAAElFTkSuQmCC'
        />
      </defs>
    </svg>
  );
};

export function Next() {
  return (
    <>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='15' height='15' fill='url(#pattern0_4583_4277)' />
        <defs>
          <pattern
            id='pattern0_4583_4277'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_4583_4277' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_4583_4277'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WsQ2AMAxEUS9BBPtvQoMUqKBgnI+spKMljoB7C5x0si2biZgZMAMbkEILATLFERoODMBew09gUnhzqPZCAxcDSPW4uPXbwdzXa1ToY1RvU/xmep0fhV6vz9Ll2ZNXuwDGhWxO00J2+wAAAABJRU5ErkJggg=='
          />
        </defs>
      </svg>
    </>
  );
}
export function Previous() {
  return (
    <>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='15'
          y='15'
          width='15'
          height='15'
          transform='rotate(-180 15 15)'
          fill='url(#pattern0_4583_4289)'
        />
        <defs>
          <pattern
            id='pattern0_4583_4289'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_4583_4289' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_4583_4289'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nO3WsQ2AMAxEUS9BBPtvQoMUqKBgnI+spKMljoB7C5x0si2biZgZMAMbkEILATLFERoODMBew09gUnhzqPZCAxcDSPW4uPXbwdzXa1ToY1RvU/xmep0fhV6vz9Ll2ZNXuwDGhWxO00J2+wAAAABJRU5ErkJggg=='
          />
        </defs>
      </svg>
    </>
  );
}

export function SalesButtonSVG() {
  return (
    <>
      <svg
        width='23'
        height='26'
        viewBox='0 0 23 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='23' height='26' fill='url(#pattern0_1078_1286)' />
        <defs>
          <pattern
            id='pattern0_1078_1286'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use
              href='#image0_1078_1286'
              transform='matrix(0.02 0 0 0.0176923 0 0.0576923)'
            />
          </pattern>
          <image
            id='image0_1078_1286'
            width='50'
            height='50'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2YMWsUQRiGVwkiMQpq7ki0shBs02hnYmJhIUiCXTrxB6goIZ16TTpLwUJbUxliYX6AYKNRcwELC7GKYhETRVTUJ3y5b8m47s7O7t66ezAvLFy+eXdmnp2Zb2YSBF5eXl5edRLQBFrAS+CrPsvAbaBRYrvOcqnsIrBpqWMDmKo1CB2IP+p9BIwC+/QZAxa07DcwWQZMnIA+4LETiE6ncCRuWHwz6vkMDAYlC9gFPNA2P7mAtMKRMGJ7gHvAfMS7qN5bJXMEwJy2Jev0pAvIK/WMGhDhcK5FvGc0vlwyxFVt5ydwTmOpIOG0GjDm5UHgYwzIfvVuFuikTOWmpXxa16s800Y8G4gRX4sBOaDejZwQDWAFeAMMx5RPAD+0jWuRslQQ2TNEYw4g4+p9kXMk2kYCapsjA5zS9SCai3k/FUQ2O9FCJD4fs9jDtXOzAEQ78rsJnDAy033JWHlAGrrZiWYsvln1rAOHC0A0I7FV4L3+lg/Vl1CPHURNU7rZoSlWstOAPuPGSIjnQhGIhDLRU6DftW5bo5O62SVpvVsQMZ5VyZSFIYyKB2Wzk8UMfNGM9lzWhDmdgEMpKTQVIuI9avy9ra5BWRoeAl5bUmiYYlHPUMb6t9XVTsc0cgx4y47+gikKIQorDhzjmQWMAB+0vmcpmcg6nSoDAU4biWBJj/fWvaFAW+WAAOeBb8ZdZW/CVIqdTkkd6FbcSXqAkxOo6C6wO+X89M+aqBwEuGLcGlt5T7SVgrBzGxSQ65lergMInevlHX3nF3ApP0JFIHRuhg/V/z3pPyZZh/i/ggD9wBP1ytHkbFUdIy+IXmvl5IlueCOJ5pqDXFbPO+C4DaLWIEaqPRI4qNYgvdBhPEjNvjwJ8VT1HAg16xgepGZfmIzxyjvgQby8vLyCXtUWBGsW+cA65c4AAAAASUVORK5CYII='
          />
        </defs>
      </svg>
    </>
  );
}
