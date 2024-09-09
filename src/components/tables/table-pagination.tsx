'use client';

import React, { useMemo } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TablePaginationProps {
  currentPage: number;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
  totalRows: number;
  className?: string;
}

export function TablePagination({
  currentPage,
  rowsPerPage,
  onRowsPerPageChange,
  totalRows,
  className = '',
}: TablePaginationProps) {
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);

  const rowsPerPageOptions = useMemo(() => {
    const options = [];
    for (let i = 5; i <= totalRows; i += 5) {
      options.push(i);
      if (i >= 50) break; // Cap at 50 to prevent too many options
    }
    return options;
  }, [totalRows]);

  return (
    <div
      className={`flex items-center justify-end px-4 py-3 bg-white border-t border-gray-200 sm:px-6 ${className}`}
    >
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
            {rowsPerPageOptions.map((option) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
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
