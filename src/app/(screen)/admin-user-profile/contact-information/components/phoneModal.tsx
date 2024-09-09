import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  phone: {
    countryCode: string;
    number: string;
  };
  setPhone: (phone: { countryCode: string; number: string }) => void;
}

interface Country {
  phoneCode: string;
  name: string;
}

const PhoneModal: React.FC<PhoneModalProps> = ({
  isOpen,
  onClose,
  phone,
  setPhone,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URI}/api/1/countries`,
        );
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching countries');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (!isOpen) return null;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setPhone({ ...phone, [name]: value });
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Personal details - Phone</h2>
          <button onClick={onClose} className='text-black'>
            &times;
          </button>
        </div>
        {loading ? (
          <p>Loading countries...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <form>
            <label className='block mb-4'>
              Phone
              <div className='flex items-center mt-1'>
                <select
                  name='countryCode'
                  value={phone.countryCode}
                  onChange={handleChange}
                  className='border rounded-l p-2 w-20'
                >
                  <option value=''>Select country code</option>
                  {countries.map((country) => (
                    <option key={country.phoneCode} value={country.phoneCode}>
                      {country.name} ({country.phoneCode})
                    </option>
                  ))}
                </select>
                <input
                  type='text'
                  name='number'
                  value={phone.number}
                  onChange={handleChange}
                  className='border rounded-r p-2 flex-1'
                  placeholder='7158452525'
                />
              </div>
            </label>
            <button
              type='button'
              onClick={onClose}
              className='bg-blue-500 text-white px-4 py-2 rounded'
            >
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PhoneModal;
