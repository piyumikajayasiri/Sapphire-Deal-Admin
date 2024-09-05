import React from 'react';

import ContactInfo from '@/app/(screen)/admin-user-profile/contact-information';
import PersonalDetails from '@/app/(screen)/admin-user-profile/personal-details';

const UserProfile = () => {
  return (
    <div>
      <PersonalDetails />
      <ContactInfo />
    </div>
  );
};

export default UserProfile;
