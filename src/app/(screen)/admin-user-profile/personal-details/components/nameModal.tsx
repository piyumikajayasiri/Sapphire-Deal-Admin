import { useState } from 'react';

type Name = {
  firstName: string;
  lastName: string;
};

type NameModalProps = {
  name: Name;
  onNameChange: (newName: Name) => void;
  onClose: () => void;
};

export default function NameModal({
  name,
  onNameChange,
  onClose,
}: NameModalProps) {
  const [firstName, setFirstName] = useState(name.firstName);
  const [lastName, setLastName] = useState(name.lastName);

  const handleSave = () => {
    onNameChange({ firstName, lastName });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Personal details - Name</h2>
          <button onClick={onClose} className='text-black'>
            &times;
          </button>
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            First Name
          </label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700'>
            Last Name
          </label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md'
          />
        </div>
        <button
          onClick={handleSave}
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Save
        </button>
      </div>
    </div>
  );
}
