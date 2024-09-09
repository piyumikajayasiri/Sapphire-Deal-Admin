'use client';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';

import EditButton from '@/components/buttons/editButton';

import BirthdayModal from '@/app/(screen)/admin-user-profile/personal-details/components/birthdayModal';
import GenderModal from '@/app/(screen)/admin-user-profile/personal-details/components/GenderModal';
import LanguageModal from '@/app/(screen)/admin-user-profile/personal-details/components/LanguageModal';
import NameModal from '@/app/(screen)/admin-user-profile/personal-details/components/nameModal';

import ProfileImage from '../../../../../public/images/ProfileImage.png';

type Name = {
  firstName: string;
  lastName: string;
};

export default function PersonalDetails() {
  const [name, setName] = useState<Name>({
    firstName: 'Janka',
    lastName: 'Prasad',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [birthday, setBirthday] = useState('2001/2/3');
  const [gender, setGender] = useState('Male');
  const [language, setLanguage] = useState('English');
  const [openBirthdayModal, setOpenBirthdayModal] = useState(false);
  const [openGenderModal, setOpenGenderModal] = useState(false);
  const [openLanguageModal, setOpenLanguageModal] = useState(false);
  const [tempBirthday, setTempBirthday] = useState('');
  const [tempGender, setTempGender] = useState('');
  const [tempLanguage, setTempLanguage] = useState('');

  const handleNameChange = (
    newName: SetStateAction<{ firstName: string; lastName: string }>,
  ) => {
    setName(newName);
    setIsModalOpen(false);
  };

  const toggleBirthdayModal = () => {
    setOpenBirthdayModal(!openBirthdayModal);
    if (!openBirthdayModal) {
      setTempBirthday(birthday);
    }
  };

  const toggleGenderModal = () => {
    setOpenGenderModal(!openGenderModal);
    if (!openGenderModal) {
      setTempGender(gender);
    }
  };

  const toggleLanguageModal = () => {
    setOpenLanguageModal(!openLanguageModal);
    if (!openLanguageModal) {
      setTempLanguage(language);
    }
  };

  const handleBirthdaySubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setBirthday(tempBirthday);
    toggleBirthdayModal();
  };

  const handleGenderSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setGender(tempGender);
    toggleGenderModal();
  };

  const handleLanguageSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLanguage(tempLanguage);
    toggleLanguageModal();
  };

  const changeBirthday = (e: { target: { value: SetStateAction<string> } }) => {
    setTempBirthday(e.target.value);
  };

  const changeGender = (e: { target: { value: SetStateAction<string> } }) => {
    setTempGender(e.target.value);
  };

  const changeLanguage = (e: { target: { value: SetStateAction<string> } }) => {
    setTempLanguage(e.target.value);
  };

  const toggleName = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center p-10'>
        <div className='text-center md:text-left'>
          <p className='text-[33.3px] font-bold'>User Profile</p>
        </div>
      </div>
      <div className='flex flex-col p-10'>
        <h3 className='pl-10'>Personal Details</h3>
        <div className='flex flex-col md:flex-row p-10 shadow-lg rounded-lg'>
          <div className='flex justify-center md:justify-start mb-5 md:mb-0'>
            <Image
              src={ProfileImage}
              alt='Profile Image'
              className='w-[159px] h-[159px] rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <table className='m-3'>
              <tbody>
                <tr className='p-10 '>
                  <td className='w-32'>
                    <label className='mx-3'>
                      <p className='font-bold'>Name</p>
                    </label>
                  </td>
                  <td className='w-64'>
                    <p>{`${name.firstName} ${name.lastName}`}</p>
                  </td>
                  <td className='w-32'>
                    <EditButton command={toggleName} />
                    {isModalOpen && (
                      <NameModal
                        name={name}
                        onNameChange={handleNameChange}
                        onClose={() => setIsModalOpen(false)}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className='w-32'>
                    <label className='mx-3'>Birthday</label>
                  </td>
                  <td className='w-64'>
                    <p>{birthday}</p>
                  </td>
                  <td className='w-32'>
                    <EditButton command={toggleBirthdayModal} />
                    {openBirthdayModal && (
                      <BirthdayModal
                        action={handleBirthdaySubmit}
                        changeFunction={changeBirthday}
                        tempBirthday={tempBirthday}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className='w-32'>
                    <label className='mx-3'>Gender</label>
                  </td>
                  <td className='w-64'>
                    <p>{gender}</p>
                  </td>
                  <td className='w-32'>
                    <EditButton command={toggleGenderModal} />
                    {openGenderModal && (
                      <GenderModal
                        action={handleGenderSubmit}
                        changeFunction={changeGender}
                        tempGender={tempGender}
                        closeModal={function (): void {
                          throw new Error('Function not implemented.');
                        }}
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td className='w-32'>
                    <label className='mx-3'>Language</label>
                  </td>
                  <td className='w-64'>
                    <p>{language}</p>
                  </td>
                  <td className='w-32'>
                    <EditButton command={toggleLanguageModal} />
                    {openLanguageModal && (
                      <LanguageModal
                        action={handleLanguageSubmit}
                        changeFunction={changeLanguage}
                        tempLanguage={tempLanguage}
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
