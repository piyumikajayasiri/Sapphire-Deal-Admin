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
    </>
  );
};
