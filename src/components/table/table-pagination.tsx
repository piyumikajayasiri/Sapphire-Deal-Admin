'use client';

import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
  totalRows: number;
}

export function TablePagination({
  currentPage,
  // totalPages,
  // onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
}: TablePaginationProps) {
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);

  return (
    <div className='flex items-center justify-end px-4 py-3 bg-white border-t border-gray-200 sm:px-6'>
      <div className='flex items-center mr-4'>
        <span className='text-sm text-gray-700 mr-2'>Rows per page:</span>
        <Select
          value={rowsPerPage.toString()}
          onValueChange={(value) => onRowsPerPageChange(Number(value))}
        >
          <SelectTrigger className='w-[70px]'>
            <SelectValue>{rowsPerPage}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='5'>5</SelectItem>
            <SelectItem value='10'>10</SelectItem>
            <SelectItem value='20'>20</SelectItem>
            <SelectItem value='50'>50</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='flex items-center'>
        <span className='text-sm text-gray-700'>
          {startRow}-{endRow} of {totalRows}
        </span>
      </div>
    </div>
  );
}
