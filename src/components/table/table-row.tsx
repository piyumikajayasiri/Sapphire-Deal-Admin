// TableRow.tsx
import React from 'react';

import { Column } from '../types';

interface TableRowProps<T> {
  item: T;
  columns: Column<T>[];
  onClick?: () => void;
}

export function TableRow<T>({ item, columns, onClick }: TableRowProps<T>) {
  return (
    <tr
      className='bg-white border-b hover:bg-gray-50 cursor-pointer'
      onClick={onClick}
    >
      {columns.map((column, index) => (
        <td key={index} className='px-6 py-4'>
          {column.render
            ? column.render(item[column.accessor], item)
            : (item[column.accessor] as React.ReactNode)}
        </td>
      ))}
    </tr>
  );
}
