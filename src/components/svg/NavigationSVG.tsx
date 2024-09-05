export default function Dashboard() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.2222 2.77778V5.55556H16.6667V2.77778H22.2222ZM8.33333 2.77778V11.1111H2.77778V2.77778H8.33333ZM22.2222 13.8889V22.2222H16.6667V13.8889H22.2222ZM8.33333 19.4444V22.2222H2.77778V19.4444H8.33333ZM25 0H13.8889V8.33333H25V0ZM11.1111 0H0V13.8889H11.1111V0ZM25 11.1111H13.8889V25H25V11.1111ZM11.1111 16.6667H0V25H11.1111V16.6667Z'
          fill='#F3F3F3'
        />
      </svg>
    </>
  );
}

export function Organization() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='25' height='25' fill='url(#pattern0_2634_847)' />
        <defs>
          <pattern
            id='pattern0_2634_847'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_2634_847' transform='scale(0.0111111)' />
          </pattern>
          <image
            id='image0_2634_847'
            width='90'
            height='90'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFd0lEQVR4nO2dS28cRRCAJ05yCChB/AAIcbgDJzgBpxyAQCAv4MABB64IsDhzASfEEa+gBI6RokBsICG5g3gFgkG8zhgDwXnxEMQxOJI/1NpasVp5vFPVPdMzu/1Jliy7t6u6VFtT01Ndk2WJRCLRnwA3ALuBb4G/5cf9Pgasj61fXwA8A8yTz2VgNLaejYaWFxdld2x9GwmwGVhUGNqNvTu23o0D+Bo93wErYuveGIBbsHNTbP0bA/C4h6F3xda/MQCjHoZ+Krb+jQAYBt73MLT77HDsddQW4Grg2R45c1EWgJeBa2KvqzYAQ8AjwCzhuQg8AazMBhngNuAU5fMVcEc2aADXAYeUNyQhOAFszPodYK3cVv9T0DAuXr/VY3x7TNHYPi+bUWuzPo3DI8o4fBTYIJ/fALwgd35zwCXgG2CP29nrGDOhmH9WdBrK+gHgTomRRfkSuN1D3q3KuN/s+G2IwxdCZQhuv8OQyZxoVP5tyIf/lZx3XT/roomxO4Hj4iVXgHPASeAhYJWM2aX0ool2HC5Zfxe/Jy3x233DZI0nZc1X5P/vyd+HQip5ukBcrSwOW3GxWKmnGzvVY8yUd8ooRj5DOGZjX+mNGVCRdW30UejTQIrM++auLm4CL8lttbtwvugTSyWnH1Pk9L343HQhB+4PpMCEbxwGNgEzS8zt/rYpwG6hJn4vx3aLAr7CvfNTWl78Ro8UcVHGrKs4fi/FcYvgaY8tSu84TL4X5xHCu9vx22UWFn61CP3TKOxiAC9+3WPDyd26X+upw+9G2Zcswn40Cpup0ItL8W7gF2ycsQh72yjscEmxWIs5dgNHqDBGP2AUtiWSFwfzbmArNrZVlUd/ULSAhXK8OIh3y6bUR0oZp80JgKvUVNwZThet7KR8L/b2bsmvZxR3hn57NmLszwoIW18zL/b2bikX7sUX7YcP3shXaTvwbp60Gnuxl3fnfrq1k7mztH2bPKnLjF8NHIjsxXksim6rQ603GFrBwD7qz3io9QZDK1h22urOuVDrDYZWMHCe+tMXht5L/dkTar3BMF4M99bUs8+LbqtCrTcYoQSjnKfs8WXPoyYZukUytEAOmZJQ86iJtQBKHl/2PGqSoVskQwvkkCkJNY+aWAug5PFlz6MmGbpFMrRADpmSUPOoibUASh5f9jxqkqFbJEML5JApCTWP5on4w1J8rRIMXAW85lH5VCZ/APuBNVpDA8eAHSEL0W+UwvFeLPmAEjhI/Tm4zIPpIuW6fn2dXHG1YntzpvuwjXwTLlN/5ro9U8oNipbFuZKM661GXlngWEE3H3YW0DTV0LSe+n+snOMTU/cbOQhjYWsDQ8eBLp23Gee5z2JodwrJwpGuedYAr8qFp2648txXui+GwJvG+Y5aDH3WKOynrOFgL9v9wSLM2qDkt6zhYC9E16/dHROIebQiBgGOVkxbhLqz0T406jA7YQ4LmWK0K+ALwWSdD7Mb2k8sx73Wr1GoNjwLdWsmFbhZFlK0P+Rz+x36KO9IHx5R/tl8Z9h1Gz5VoBi7yH5I1PjtDvob9Oy19lPBelh3tJE4JtnIQkcrhR1yu+7GPKr0lMkK20iY2gDJ2h6U5OCsrN3tbbwjh4pWNCX2LaTGKH4GT61+qqTqZlIMWvOqAFf6iY52bG5veBz4XrY05+T38XaOLnHYnQNvTAZUGvzfjGQ+YINB97/UYLCGLTOHs0EDfTy10j9xuKZtjS+ktsbl7j3EbRTYBEit5ys19qiHN6eXKRQFeMzD0COFBQ06wM0ehk4vvKngFU7u1XvpFU4agHsMLyW7SyUkYXrN3ph8LGEBeLpH/Z7bYHrSNHliyfLZ5yVu/yU/7vfnvJ/VJRKJRFZb/gMx19wMYIt+2AAAAABJRU5ErkJggg=='
          />
        </defs>
      </svg>
    </>
  );
}

export function Approve() {
  return (
    <>
      {' '}
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='25' height='25' fill='url(#pattern0_2634_850)' />
        <defs>
          <pattern
            id='pattern0_2634_850'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_2634_850' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_2634_850'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO3WO04CURSA4VsSC0JpIrAEbFyAdvasYbYAbEATWAANFm5AO8IrMUK0sTGBlopAIxUhhPjKb9BT8DgDRufMNPzlnDPzFZO5Gef27Qh45KcmEHNhxWoXUcFvwGEU8KJcVHAnDDSuwOMw4EsFfrFGj4CZAt9bw9folf/74Af8ewY++XuvQAtIa/Ac+5oaPJJhcu16kE00uCfDjCFc0+C2DE8N4RMNvpVh1hCua/CVDD1DeKrBJRnmDeE7DS7IsGgEP/l9x54sVIzg1gYqQFYWbozgqR98ph36pqfWIuBYFrpuqQDAD6Chvl8BUrI4DBjuq+AScIBNg62w4DWfm7//q4AEUAXef4sC5zvhfc6wL3kkVKHh/2tqAAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>
    </>
  );
}
export function Sales() {
  return (
    <>
      <svg
        width='19'
        height='22'
        viewBox='0 0 19 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.7917 5.25033H14.7083C14.7083 2.37533 12.375 0.0419922 9.5 0.0419922C6.625 0.0419922 4.29167 2.37533 4.29167 5.25033H2.20833C1.0625 5.25033 0.125 6.18783 0.125 7.33366V19.8337C0.125 20.9795 1.0625 21.917 2.20833 21.917H16.7917C17.9375 21.917 18.875 20.9795 18.875 19.8337V7.33366C18.875 6.18783 17.9375 5.25033 16.7917 5.25033ZM9.5 2.12533C11.2292 2.12533 12.625 3.52116 12.625 5.25033H6.375C6.375 3.52116 7.77083 2.12533 9.5 2.12533ZM16.7917 19.8337H2.20833V7.33366H16.7917V19.8337ZM9.5 11.5003C7.77083 11.5003 6.375 10.1045 6.375 8.37533H4.29167C4.29167 11.2503 6.625 13.5837 9.5 13.5837C12.375 13.5837 14.7083 11.2503 14.7083 8.37533H12.625C12.625 10.1045 11.2292 11.5003 9.5 11.5003Z'
          fill='white'
        />
      </svg>
    </>
  );
}
export function Raffles() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.9163 9.62467L15.4268 8.97884L12.4997 2.08301L9.57259 8.98926L2.08301 9.62467L7.77051 14.5518L6.06218 21.8747L12.4997 17.9893L18.9372 21.8747L17.2393 14.5518L22.9163 9.62467ZM12.4997 16.0413L8.58301 18.4059L9.62467 13.9476L6.16634 10.9476L10.7288 10.5518L12.4997 6.35384L14.2809 10.5622L18.8434 10.958L15.3851 13.958L16.4268 18.4163L12.4997 16.0413Z'
          fill='white'
        />
      </svg>
    </>
  );
}
export function Vouchers() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='25' height='25' fill='url(#pattern0_1197_2145)' />
        <defs>
          <pattern
            id='pattern0_1197_2145'
            patternContentUnits='objectBoundingBox'
            width='1'
            height='1'
          >
            <use href='#image0_1197_2145' transform='scale(0.0333333)' />
          </pattern>
          <image
            id='image0_1197_2145'
            width='30'
            height='30'
            href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaElEQVR4nO3WTUtVQRjA8eNLG0HcKC0yQayle8G7ri7tKoRc9CU0XWjroG+gK1HwC0irVhFE7kOMQkPdFFHU0pd+MfAIcjjHe7veqwXnv5o588zzn2fOzOFkWUVFp8F9HOgc+6gXidNAp9krEl8K2f8k3sAiVnCUG3uLV9hut/h5LnbqzNgmutCHrXaLh9GLz7gd8V/wGxPRX24kLRM/LdjCUwbQjxNMRvxHrEX7kcYcJkfRVU4JZksmPYzxCXTjFn7iBkbwvQnxTKE0Eg+VTPqKaYziLt5jAT14ozkGWxHneYdrmItF3IlFPY53/9fiuSakvzCG6/gR254qr0WOByXzZsuk8+ccrrM8ifgl7ES7FgevPw5iEUepsCJxM6xH7DiO8S36aQc+ROU3z0uQtSDeTdVEbPpKnTKdy/Oi3eJPIXyde54qX8UzvGyUJGtxqy9M9i+J96/qR6DeYfke7hXc5IqKrK38ATanfL/x67YBAAAAAElFTkSuQmCC'
          />
        </defs>
      </svg>
    </>
  );
}
export function Users() {
  return (
    <>
      <svg
        width='21'
        height='15'
        viewBox='0 0 21 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.37467 9.32259C4.93717 9.32259 0.0830078 10.5413 0.0830078 12.9684V14.7913H14.6663V12.9684C14.6663 10.5413 9.81217 9.32259 7.37467 9.32259ZM2.52051 12.708C3.39551 12.1038 5.51009 11.4059 7.37467 11.4059C9.23926 11.4059 11.3538 12.1038 12.2288 12.708H2.52051ZM7.37467 7.49967C9.38509 7.49967 11.0205 5.86426 11.0205 3.85384C11.0205 1.84342 9.38509 0.208008 7.37467 0.208008C5.36426 0.208008 3.72884 1.84342 3.72884 3.85384C3.72884 5.86426 5.36426 7.49967 7.37467 7.49967ZM7.37467 2.29134C8.23926 2.29134 8.93717 2.98926 8.93717 3.85384C8.93717 4.71842 8.23926 5.41634 7.37467 5.41634C6.51009 5.41634 5.81217 4.71842 5.81217 3.85384C5.81217 2.98926 6.51009 2.29134 7.37467 2.29134ZM14.708 9.38509C15.9163 10.2601 16.7497 11.4268 16.7497 12.9684V14.7913H20.9163V12.9684C20.9163 10.8643 17.2705 9.66634 14.708 9.38509ZM13.6247 7.49967C15.6351 7.49967 17.2705 5.86426 17.2705 3.85384C17.2705 1.84342 15.6351 0.208008 13.6247 0.208008C13.0622 0.208008 12.5413 0.343424 12.0622 0.572591C12.7184 1.49967 13.1038 2.63509 13.1038 3.85384C13.1038 5.07259 12.7184 6.20801 12.0622 7.13509C12.5413 7.36426 13.0622 7.49967 13.6247 7.49967Z'
          fill='white'
        />
      </svg>
    </>
  );
}
export function Profile() {
  return (
    <>
      <svg
        width='25'
        height='25'
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12.5003 6.25033C13.6462 6.25033 14.5837 7.18783 14.5837 8.33366C14.5837 9.47949 13.6462 10.417 12.5003 10.417C11.3545 10.417 10.417 9.47949 10.417 8.33366C10.417 7.18783 11.3545 6.25033 12.5003 6.25033ZM12.5003 16.667C15.3128 16.667 18.542 18.0107 18.7503 18.7503H6.25033C6.48991 18.0003 9.69824 16.667 12.5003 16.667ZM12.5003 4.16699C10.1982 4.16699 8.33366 6.03158 8.33366 8.33366C8.33366 10.6357 10.1982 12.5003 12.5003 12.5003C14.8024 12.5003 16.667 10.6357 16.667 8.33366C16.667 6.03158 14.8024 4.16699 12.5003 4.16699ZM12.5003 14.5837C9.71908 14.5837 4.16699 15.9795 4.16699 18.7503V20.8337H20.8337V18.7503C20.8337 15.9795 15.2816 14.5837 12.5003 14.5837Z'
          fill='white'
        />
      </svg>
    </>
  );
}
