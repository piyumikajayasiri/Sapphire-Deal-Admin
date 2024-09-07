import Image from 'next/image';
import React from 'react';

import ProfilePhoto from '../../../../../../public/images/logo1.png';

const OrganizationInformation = () => {
  return (
    <>
      <div className='shadow-xl rounded-lg p-5'>
        <div className='flex flex-row items-center gap-5 py-5'>
          <Image
            src={ProfilePhoto}
            alt='Profile Image'
            className='rounded-full w-[95px] h-[95px]'
          />
          <p className='font-semibold text-2xl'>Organization Information</p>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td className='w-[25%] pb-5'>Company name</td>
                <td className=' pb-5 pl-20'>ABC Co Ltd.</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Short Description</td>
                <td className=' pb-5 pl-20'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse et turpis sit amet sem varius
                </td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Long Description</td>
                <td className=' pb-5 pl-20'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse et turpis sit amet sem varius pharetra.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Suspendisse et
                  turpis sit amet sem varius pharetra.
                </td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Contact email</td>
                <td className=' pb-5 pl-20'>wijesena@gmail.com</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Contact number</td>
                <td className=' pb-5 pl-20'>8098098090</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Website</td>
                <td className=' pb-5 pl-20'>Service</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Subcategory</td>
                <td className=' pb-5 pl-20'>Hotel</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Keywords</td>
                <td className='pb-5 pl-20'>
                  Hotel, beautiful,lfjlkfj. jldksld{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrganizationInformation;
