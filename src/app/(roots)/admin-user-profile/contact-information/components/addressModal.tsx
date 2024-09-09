// components/AddressModal.tsx
import React from 'react';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: {
    line1: string;
    line2: string;
    city: string;
    province: string;
    country: string;
  };
  setAddress: (address: {
    line1: string;
    line2: string;
    city: string;
    province: string;
    country: string;
  }) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  onClose,
  address,
  setAddress,
}) => {
  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-20'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center mb-4 w-[500px]'>
          <h2 className='text-xl font-semibold mb-4'>
            Personal details - Address
          </h2>
          <button onClick={onClose} className='text-black'>
            &times;
          </button>
        </div>
        <form>
          <label className='block mb-2'>
            Address line 1
            <input
              type='text'
              name='line1'
              value={address.line1}
              onChange={handleChange}
              className='mt-1 block w-full border rounded p-2'
            />
          </label>
          <label className='block mb-2'>
            Address line 2
            <input
              type='text'
              name='line2'
              value={address.line2}
              onChange={handleChange}
              className='mt-1 block w-full border rounded p-2'
            />
          </label>
          <label className='block mb-2'>
            City
            <input
              type='text'
              name='city'
              value={address.city}
              onChange={handleChange}
              className='mt-1 block w-full border rounded p-2'
            />
          </label>
          <label className='block mb-2'>
            Province
            <input
              type='text'
              name='province'
              value={address.province}
              onChange={handleChange}
              className='mt-1 block w-full border rounded p-2'
            />
          </label>
          <label className='block mb-4'>
            Country
            <input
              type='text'
              name='country'
              value={address.country}
              onChange={handleChange}
              className='mt-1 block w-full border rounded p-2'
            />
          </label>
          <button
            type='button'
            onClick={onClose}
            className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
