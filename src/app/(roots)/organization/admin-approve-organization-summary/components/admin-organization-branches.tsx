// /* eslint-disable unused-imports/no-unused-vars */
// /* eslint-disable @next/next/no-img-element */
// 'use client';
// import { Search } from 'lucide-react';
// import { useState } from 'react';

// import DetailsButton from '@/components/buttons/details-button';
// import Previous, { Next } from '@/components/svg/userNotifications';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table';

// interface User {
//   address: string;
//   coordinates: string;
// }

// const initialUsers: User[] = [
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
//   {
//     address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
//     coordinates: '7.101241, 79.992355',
//   },
// ];

// const AdminOrganizationBranches = () => {
//   const [users, setUsers] = useState<User[]>(initialUsers);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setCurrentPage(1);
//   };

//   const totalPages = Math.ceil(users.length / rowsPerPage);
//   const currentPageData = users.slice(
//     (currentPage - 1) * rowsPerPage,
//     currentPage * rowsPerPage
//   );
//   const startIndex = (currentPage - 1) * rowsPerPage + 1;
//   const endIndex = Math.min(currentPage * rowsPerPage, users.length);

//   return (
//     <>
//       <div className='flex flex-row py-5'>
//         <input className='border border-gray-300 rounded-xl mr-4 basis-5/6' />
//         <button className='bg-gray-500 text-[14px] text-white px-4 rounded-md w-full sm:w-auto basis-1/6'>
//           <div className='flex flex-row justify-center items-center text-[14px]'>
//             Search <Search className='ml-1' />
//           </div>
//         </button>
//       </div>
//       <div className='overflow-x-auto'>
//         <Table>
//           <TableHeader className='bg-gray-100 text-[12px]'>
//             <TableRow>
//               <TableHead>ADDRESS</TableHead>
//               <TableHead>coordinates</TableHead>
//               <TableHead>VIEW</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {currentPageData.map((user, index) => (
//               <TableRow key={index}>
//                 <TableCell>{user.address}</TableCell>
//                 <TableCell>{user.coordinates}</TableCell>
//                 <TableCell>
//                   <DetailsButton command={undefined} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <div className='mt-4 flex justify-end items-center'>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className='p-2  rounded disabled:opacity-50 mr-4'
//         >
//           <Previous />
//         </button>
//         <div className='flex items-center space-x-2'>
//           <label htmlFor='rowsPerPage' className='text-black text-sm'>
//             Rows per page:
//           </label>
//           <select
//             id='rowsPerPage'
//             value={rowsPerPage}
//             onChange={handleChangeRowsPerPage}
//             className='px-5 bg-white border border-gray-300 rounded'
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={15}>15</option>
//             <option value={20}>20</option>
//           </select>
//         </div>
//         <button
//           onClick={() =>
//             setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//           }
//           disabled={currentPage === totalPages}
//           className='p-2  rounded disabled:opacity-50 ml-4'
//         >
//           <Next />
//         </button>
//       </div>
//     </>
//   );
// };

// export default AdminOrganizationBranches;
'use client';
/* eslint-disable @next/next/no-img-element */
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Search } from 'lucide-react';
import { useState } from 'react';

import DetailsButton from '@/components/buttons/details-button';
import Previous, { Next } from '@/components/svg/userNotifications';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface User {
  address: string;
  coordinates: string;
}

const initialUsers: User[] = [
  {
    address: '159/ A, Bandaranayaka Mawatha, Asgiriya, GampahaSri Lanka',
    coordinates: '7.101241, 79.992355',
  },
  {
    address: '159/ A, Eheliyagoda',
    coordinates: '6.849025250952831, 80.16950383300781',
  },
  {
    address: 'Awissawella',
    coordinates: '6.95332008387433, 80.2091466776695',
  },
  {
    address: 'Deraniyagala',
    coordinates: '6.9342481483192815, 80.33777278347809',
  },
  {
    address: 'Anuradhapura',
    coordinates: '8.298087522818546, 80.40921073684345',
  },
  {
    address: 'Vavuniya',
    coordinates: '8.729980329539474, 80.46414237746845',
  },
];

const AdminOrganizationBranches = () => {
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

  // Load Google Maps
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Add your API key here
  });

  if (!isLoaded) return <div>Loading...</div>;

  // Extracting coordinates for the first user to set the initial map center
  const center = {
    lat: parseFloat(users[0].coordinates.split(',')[0]),
    lng: parseFloat(users[0].coordinates.split(',')[1]),
  };

  return (
    <>
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
              <TableHead>ADDRESS</TableHead>
              <TableHead>COORDINATES</TableHead>
              <TableHead>VIEW</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentPageData.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.coordinates}</TableCell>
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
          className='p-2 rounded disabled:opacity-50 mr-4'
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
          className='p-2 rounded disabled:opacity-50 ml-4'
        >
          <Next />
        </button>
      </div>

      {/* Google Map Section */}
      <div className='mt-8'>
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={{ width: '100%', height: '400px' }}
        >
          {users.map((user, index) => {
            const [lat, lng] = user.coordinates.split(',').map(Number);
            return <Marker key={index} position={{ lat, lng }} />;
          })}
        </GoogleMap>
      </div>
    </>
  );
};

export default AdminOrganizationBranches;
