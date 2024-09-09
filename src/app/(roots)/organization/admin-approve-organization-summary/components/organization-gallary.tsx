'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Picture1 from '../../../../../../public/images/imageslide1.png.jpg';
import Picture2 from '../../../../../../public/images/imageslider2.jpg';
import Picture3 from '../../../../../../public/images/imageslider3.jpg';
const images = [Picture1, Picture2, Picture3, Picture1, Picture2, Picture3];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden'>
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className='w-full flex-shrink-0'>
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className='items-center w-[300px] h-[300px] m-10 object-cover'
            />
          </div>
        ))}
      </div>

      {/* Left and right navigation buttons */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
        className='absolute top-1/2 transform -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow-md'
      >
        &#8592;
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className='absolute top-1/2 transform -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow-md'
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
