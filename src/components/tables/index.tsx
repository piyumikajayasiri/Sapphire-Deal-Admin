'use client';

import { FC } from 'react';

import { TablePagination } from '@/components/tables/table-pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type TableHeader = {
  label: string;
  key: string;
};

type TableRow = {
  id: number;
  [key: string]: string | number | React.ReactNode;
};

type Props = {
  tableHeaders: TableHeader[];
  tableRows: TableRow[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Tables: FC<Props> = ({ tableHeaders, tableRows }) => {
  return (
    <div>
      <Table className='p-10 w-full bg-white'>
        <TableHeader className='bg-gray-100 hidden md:table-header-group'>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead key={header.key}>{header.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.id} className='block md:table-row'>
              {tableHeaders.map((header) => (
                <TableCell
                  key={`${row.id}-${header.key}`}
                  className='block md:table-cell'
                >
                  {row[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        currentPage={0}
        rowsPerPage={0}
        onRowsPerPageChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        totalRows={0}
      />
    </div>
  );
};

export { TableHeader, TableRow };
