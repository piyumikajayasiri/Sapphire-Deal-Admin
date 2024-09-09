/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';
import { Search } from 'lucide-react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import DetailsButton from '@/components/buttons/details-button';
import Previous, { Next } from '@/components/svg/userNotifications';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import ProfileImage from '../../../../../../public/images/ProfileImage.png';

interface User {
  image: StaticImageData;
  name: string;
  email: string;
  phone: string;
}

const initialUsers: User[] = [
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
  {
    image: ProfileImage,
    name: 'ABC Co. Ltd',
    email: 'anika.v@gmail.com',
    phone: '94 7160123604',
  },
];

const AdminOrganizationApproval = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const currentPageData = users.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );
  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, users.length);

  return (
    <>
      <div>
        <Breadcrumb className='bg-gray-400 py-4'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href='/'>Admin</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href='/components'>Approve</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Organizations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex flex-row py-5'>
        <input className='border border-gray-300 rounded-xl mr-4 basis-5/6' />
        <button className='bg-gray-500 text-[14px] text-white px-4 rounded-md w-full sm:w-auto basis-1/6'>
          <div className='flex flex-row justify-center items-center text-[14px]'>
            Search <Search className='ml-1' />
          </div>
        </button>
      </div>
      <div className='overflow-x-auto'>
        <Table>
          <TableHeader className='bg-gray-100 text-[12px]'>
            <TableRow>
              <TableHead>IMAGE</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>PHONE</TableHead>
              <TableHead>VIEW</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPageData.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  {' '}
                  <img
                    src={user.image.src}
                    alt={user.name}
                    className='w-10 h-10 rounded-full'
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <DetailsButton command={undefined} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className='mt-4 flex justify-end items-center'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='p-2  rounded disabled:opacity-50 mr-4'
        >
          <Previous />
        </button>
        <div className='flex items-center space-x-2'>
          <label htmlFor='rowsPerPage' className='text-black text-sm'>
            Rows per page:
          </label>
          <select
            id='rowsPerPage'
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className='px-5 bg-white border border-gray-300 rounded'
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className='p-2  rounded disabled:opacity-50 ml-4'
        >
          <Next />
        </button>
      </div>
    </>
  );
};

export default AdminOrganizationApproval;
