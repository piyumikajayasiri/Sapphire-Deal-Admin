'use client';
import { Navigation } from 'lucide-react';
import Image from 'next/image';
import LogoImage from 'public/images/logo1.png';
import { useState } from 'react';

import Dashboard, {
  Approve,
  Organization,
  Profile,
  Raffles,
  Sales,
  Users,
  Vouchers,
} from '../../components/svg/NavigationSVG';

export default function SideNavigationBarOrganization() {
  const [isOpen, setIsOpen] = useState(false);
  const [isApproveSubmenuOpen, setIsApproveSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSideBar = () => {
    setIsOpen(isOpen == false);
  };
  const toggleApproveSubmenu = () => {
    setIsApproveSubmenuOpen(!isApproveSubmenuOpen);
  };

  return (
    <div className='flex'>
      {/* Logo in the side nav bar */}
      <button
        data-drawer-target='logo-sidebar'
        data-drawer-toggle='logo-sidebar'
        aria-controls='logo-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        onClick={toggleSidebar}
      >
        <span className='sr-only'>Open sidebar</span>
        <Navigation />
      </button>

      <aside
        id='logo-sidebar'
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label='Sidebar'
        onClick={closeSideBar}
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-blue-950'>
          <a
            href='https://flowbite.com/'
            className='flex items-center justify-center mb-5 p-10'
          >
            <Image src={LogoImage} alt='Logo' width={150} height={150} />
          </a>
          {/* Navigation Bar */}
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Dashboard className={undefined} />

                <span className='ms-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Organization className={undefined} />
                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Organization
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
                onClick={toggleApproveSubmenu}
              >
                <Approve className={undefined} />
                <span className='flex-1 ms-3 whitespace-nowrap'>Approve</span>
              </a>
              {isApproveSubmenuOpen && (
                <ul className='space-y-2 ml-8'>
                  <li>
                    <a
                      href='organization/admin-organization-approval'
                      className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
                    >
                      <Organization className={undefined} />
                      <span className='ms-3'>Organization</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
                    >
                      <Raffles className={undefined} />
                      <span className='ms-3'>Raffles</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
                    >
                      <Sales className={undefined} />
                      <span className='ms-3'>Sales</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
                    >
                      <Vouchers className={undefined} />
                      <span className='ms-3'>Vouchers</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* Raffles */}
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Raffles className={undefined} />

                <span className='flex-1 ms-3 whitespace-nowrap'>Raffles</span>
              </a>
            </li>
            {/* Sales */}
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Sales className={undefined} />

                <span className='flex-1 ms-3 whitespace-nowrap'>Sales</span>
              </a>
            </li>
            {/* Vouchers */}
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Vouchers className={undefined} />

                <span className='flex-1 ms-3 whitespace-nowrap'>Vouchers</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Users className={undefined} />

                <span className='flex-1 ms-3 whitespace-nowrap'>Users</span>
              </a>
            </li>
            <li>
              <a
                href='/admin-user-profile'
                className='flex items-center p-2 text-white rounded-lg hover:bg-blue-900'
              >
                <Profile className={undefined} />

                <span className='flex-1 ms-3 whitespace-nowrap'>Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
