import React from 'react';

interface IconProps {
  className?: string;
}

const CreateRaffleIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='26'
    height='28'
    fill='none'
    viewBox='0 0 26 28'
  >
    <path fill='url(#pattern0_276_584)' d='M0 0H26V28H0z'></path>
    <defs>
      <pattern
        id='pattern0_276_584'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use
          transform='matrix(.01 0 0 .00929 0 .036)'
          xlinkHref='#image0_276_584'
        ></use>
      </pattern>
      <image
        id='image0_276_584'
        width='100'
        height='100'
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGqElEQVR4nO2ce6gVRRzHV1Ozm6WWVpYmiElPKrPS8g9JCbSMkMoiSzEye78gKpIeVoaQaCmFSpZl9iBKyFKjLDIo0KiEwgtm7yiTur3M5ycGZ/N3pz3n7pmd3bPX8/vAAb1n57HznZ35ze/32xNFiqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIo7R2gBzBgH/80Jdz3fkD/nNrr4SvGRGAn+z5bgZHivpuAz3Jsz4zpFT6CrKJxeFzc99kFtLfKR5DVNAZfAYPFfY8ooM3VWQWZFDUItBZkU8B6J6kgHqggJQN9QsoFKkhNg3UkMBTooILUGeAY4De7Mc5QQeovyBJhpWw3J+mc2lErK8UgDQR2OLb83EYT5A1RwbVRHQGeqeDyOKodCXKTqHeZTwVPigrmhepYgKdjm/j3nHYkyAui3lm+zsWYX4BDQ3Wuxn48JfrRDNwi/v830KfsggCn2X0vZrRPJQcCLaKSlUmu6jxhj7ta3ohZh7sC32eabQUKApwJ/CDq3AB09K1sKq1Zm5d1U6H9BaLtjUAn+/ebxd//Ag4vmyDmrATc7iyx5t9Do4yVLnZE2Qyc4V1p+rb7O0/HVeK7A4AfxXczyySImTgJ42aMkMtCdNCIMsup/HfgrMyVpzcqNgGdne9vE9//CfQugyB2vJ53xuvrTE9GhYZucCKIZqMfFLQRC9DPedSnJFxjIns/iWtmlESQ+xwx3gJ6huhbUmPn20cv5lNg/8BtdAHmO7OrS4Vr73Ce2qPrKYhZyp1J+2bo8Ulq9BJgt2j0Yc811pwvRtsNeq614r5MiONXPJQC3eyeJtkCfAg8B0wz6zYwBOiepyB2qfpYlP0CODgqAnMgEw2bJ6ZflWtPBa6z+9Bya/bJzboa37Y1w4C7SI9Z4tbYs40pN86Y0YEEuUCU25X3Hus2bqyc79o6MdunyYftNvNjRIq+dLWOx18921oTSBCzV8S8HBWNWUqcDf5/Mxl4oMpA7LLWk8lumWdP4GOsm72zZ596AcOsl+FB4EW7jPxRpR8tWQUxFp7j3hkWFQ1wkDU3Y0YmXHOEPdBJ3gGOz32zSw5uTbETIcbshdcEEORixwjJLYBWi0d4WoVr+tp9QzK9Dn09wTlM7k4yGDwFmSHKLMnlBlJ25H7RkcVVrusDfO6IMrPAfp4M/Cza3iVP/gEEWSrK3B3VC2s9xSxv49rD7LlF8kTejzd7rDxpGhuzemKV630EWSHKtFoCCwW4XnTk9RTX9wQ+ckSZ7+39TOf23uKIMaGNMj6CmANgzNSo7EtWClEWhhaFPTm6MnxgXDHjUpRr10tWm5t6hXLdgQ8cURab1wAC9WuEY+r+A4ytoWz729SNW8Axe8+psbxxe7zriPJ0oICQiZFIT0LqCJ2nIBeJMt/Uxex1NvTEg2GKOpqcEy5ZQ7LAs+zFCDOqxvI+gvRyDobFuU3EQErXyewMdR3nmKNNGftmTugx73mU93WdyPdpXomKBHjMSTTom6GuC0VdzQH6ZlzgMWbWHlKQIGOdiTU8KgJgvON+fyhjffeIul4N0L+OTlLBhBrLZ3G/rxNlN6R1+YcMUH2S1SflmIzTA/VTBrheKjBAdboTz1npuvfzDOGa0+/AAPWuF3WODzhxYloqRRxzCuGaoJjk7VqXzTRLgJvk0BIiaG/c7E7s/MQq1w63M67ZRhk7tRGvkSb5uQUnOcjE8NgUzu6St5WbUKjEOOmGBPTAxmxLioMAp9hIo8v6agEs4DWfxOxAaUDmPfdFTn/N4fRyn/oqBaHiRLnMiQSOgfDfAEetvxtk82GlAZHE0iQrD5gsrnm/TolytzorwHbvJyUhlXRF6FRSs4nLgY32xk8WJLx+gI2HL3KCTNjl6U5pYFhPwDo7IBPrnEoqU1+bvfx2zvsMuSRbGzNXtDEbeNSx4qQ1d55jzZjMEpdm101Sba8pMNl6sPOkjMmaOZjXyzFmAKvRDFyaNKOssTHZSZaLWWYStUv2OsLSrK8j5PrCjnW/7KyS/nN1mtltfyBnTsISt9UmWTSVRJAb5YQp3S85ACclCLHZ5ux29azP9R5j4+hra/hsKOsrbXkL0lsYDSYN9F6TyZKxzg42U1E6PrOwsWEEsW0ca3xNxn0duN5uwCPORurDwoYSpKBcrHE2b6rWz6hQEUzbFxWkTKggJUMFKRkqyD4uiBIWL0Ea6Ucwi8brRzCvrOBxVbKxo9Y4f6P9kPKAgj9+P6SsKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIoSlYh/AbGZhK/gc4KzAAAAAElFTkSuQmCC'
      ></image>
    </defs>
  </svg>
);

export default CreateRaffleIcon;
