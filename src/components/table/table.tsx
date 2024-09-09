// Table.tsx
import React from 'react';

import { TableHeader } from '@/components/table/table-header';
import { TablePagination } from '@/components/table/table-pagination';
import { TableRow } from '@/components/table/table-row';

interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
  totalRows: number;
}

export function Table<T>({
  columns,
  data,
  onRowClick,
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
}: TableProps<T>) {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500'>
        <TableHeader columns={columns} />
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              columns={columns}
              onClick={() => onRowClick && onRowClick(item)}
            />
          ))}
        </tbody>
      </table>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
        totalRows={totalRows}
      />
    </div>
  );
}
