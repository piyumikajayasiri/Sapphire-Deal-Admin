// TableHeader.tsx
import React from 'react';

import { Column } from '../types';

interface TableHeaderProps<T> {
  columns: Column<T>[];
}

export function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
      <tr>
        {columns.map((column, index) => (
          <th key={index} scope='col' className='px-6 py-3'>
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
