'use client';
import React, { useState } from 'react';

import EditButton from '@/components/buttons/editButton';

import AddressModal from '@/app/(roots)/admin-user-profile/contact-information/components/addressModal';
import PhoneModal from '@/app/(roots)/admin-user-profile/contact-information/components/phoneModal';

const ContactInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [address, setAddress] = useState({
    line1: '254/17',
    line2: 'Main Rd.',
    city: 'Gampaha',
    province: 'Western',
    country: 'Sri Lanka',
  });
  const [phone, setPhone] = useState({
    countryCode: '+94',
    number: '7158452525',
  });
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [email, setEmail] = useState('123@gmail.com');
  const toggleAddress = () => {
    setIsModalOpen(true);
  };
  const togglePhone = () => {
    setIsPhoneModalOpen(true);
  };

  return (
    <>
      <div className='flex flex-col p-10 px-10'>
        <h3 className='pl-10'>Contact Details </h3>
        <div className='flex flex-row pl-5 p-5 shadow-lg rounded-lg'>
          <div className='flex flex-col p-5 gap-3'>
            <div className='grid grid-cols-3 gap-4 content-center'>
              <div className='w-32'>Email</div>
              <div className='w-64'>{email}</div>
              <div className='flex flex-col justify-center items-center w-32'></div>
            </div>

            <div className='grid grid-cols-3 gap-4 content-center'>
              <div className='w-32'>Phone</div>
              <div className='w-64'>
                {phone.countryCode} {phone.number}
              </div>
              <div className='flex flex-col justify-center items-center w-32'>
                <EditButton command={togglePhone} />
                <PhoneModal
                  isOpen={isPhoneModalOpen}
                  onClose={() => setIsPhoneModalOpen(false)}
                  phone={phone}
                  setPhone={setPhone}
                />
              </div>
            </div>

            <div className='grid grid-cols-3 gap-4 content-center'>
              <div className='w-32'>Address</div>
              <div className='w-64'>
                {address.line1} {address.city}
              </div>
              <div className='flex flex-col justify-center items-center w-32'>
                <EditButton command={toggleAddress} />
                <AddressModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  address={address}
                  setAddress={setAddress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
