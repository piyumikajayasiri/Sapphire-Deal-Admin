// TableCard.tsx
import React from 'react';

import { SearchBar } from '@/components/table/searchbar';
import { Table } from '@/components/table/table';
import { Column } from '@/components/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TableCardProps<T> {
  title: string;
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  onSearch: (query: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showSearch?: boolean;
  rowsPerPage: number;
  onRowsPerPageChange: (newRowsPerPage: number) => void;
}

export function TableCard<T>({
  title,
  columns,
  data,
  onRowClick,
  onSearch,
  currentPage,
  totalPages,
  onPageChange,
  showSearch = true,
  rowsPerPage,
  onRowsPerPageChange,
}: TableCardProps<T>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {showSearch && (
          <div className='mt-4'>
            <SearchBar onSearch={onSearch} />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <Table
          columns={columns}
          data={data}
          onRowClick={onRowClick}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
          totalRows={data.length}
        />
      </CardContent>
    </Card>
  );
}
