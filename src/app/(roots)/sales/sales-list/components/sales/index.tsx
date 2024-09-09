/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { useRouter } from 'next/navigation'; // Changed from 'next/router'

import Badge, { BadgeProps } from '@/components/badge';
import { SearchBar } from '@/components/table/searchbar';
import { TableHeader, TableRow, Tables } from '@/components/tables';
import { Button } from '@/components/ui/button';

import DetailsIcon from '~/svg/buttons/details/details';

const isValidStatus = (status?: string): status is BadgeProps['status'] => {
  if (!status) return false;
  return [
    'editing',
    'pending_approval',
    'approved',
    'upcoming',
    'ongoing',
    'finished',
    'rejected',
    'disabled',
  ].includes(status.toLowerCase());
};

// Define the type for the sales data
interface Sale {
  id: string;
  title: string;
  startDate: string;
  endDate?: string;
  status?: string;
}

// Define the props type for the SalesTable component
interface SalesTableProps {
  salesData: Sale[];
}

// Define the type for the table row
interface CustomTableRow extends TableRow {
  id: number; // Changed from string to number
  name: string;
  startDate: string;
  endDate: string;
  status: JSX.Element;
  view: JSX.Element;
}

const SalesTable: React.FC<SalesTableProps> = ({ salesData }) => {
  const router = useRouter();

  const headers: TableHeader[] = [
    { key: 'name', label: 'NAME' },
    { key: 'startDate', label: 'START DATE' },
    { key: 'endDate', label: 'END DATE' },
    { key: 'status', label: 'STATUS' },
    { key: 'view', label: 'VIEW' },
  ];

  const rows: CustomTableRow[] = salesData.map((sale) => ({
    id: parseInt(sale.id, 10), // Convert id from string to number
    name: sale.title,
    startDate: sale.startDate,
    endDate: sale.endDate || '',
    status: isValidStatus(sale.status?.toLowerCase()) ? (
      <Badge status={sale.status?.toLowerCase() as BadgeProps['status']}>
        {sale.status?.toUpperCase()}
      </Badge>
    ) : (
      <Badge status='disabled'>{sale.status}</Badge>
    ),
    view: (
      <Button
        variant='ghost'
        className='p-0 hover:bg-none'
        onClick={() => router.push(`/sales/${sale.id}/sale-summery`)}
      >
        Details
        <DetailsIcon className='ml-2 h-6 w-6' />
      </Button>
    ),
  }));

  return (
    <div>
      <SearchBar
        onSearch={function (query: string): void {
          throw new Error('Function not implemented.');
        }}
      />
      <div className='relative bg-white p-10 pt-0 mt-5'>
        <Tables
          tableHeaders={headers}
          tableRows={rows}
          currentPage={0}
          totalPages={0}
          onPageChange={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </div>
  );
};

export default SalesTable;
