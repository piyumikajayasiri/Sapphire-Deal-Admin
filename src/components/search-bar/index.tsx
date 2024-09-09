// SearchBar.tsx

'use client';

import { Search } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
}
//onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='flex space-x-2 m-10 mb-0'>
      <Input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='flex-grow'
      />
      <Button
        onClick={handleSearch}
        className='bg-gray-300 hover:bg-gray-200 text-black'
      >
        Search
        <Search className='h-4 w-4 ml-2 text-gray-600' />
      </Button>
    </div>
  );
}
