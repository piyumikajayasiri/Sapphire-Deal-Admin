// components/StatusLabel.tsx
import React from 'react';

import { cn } from '@/lib/utils';

interface StatusLabelProps {
  status: 'Raning' | 'Pending' | 'Completed' | 'Holding';
}

export function StatusLabel({ status }: StatusLabelProps) {
  const baseClasses =
    'px-2 py-1 rounded-full text-xs font-semibold inline-block min-w-[80px] text-center';
  const statusClasses = {
    Raning: 'bg-[#C200E1] text-white',
    Pending: 'bg-[#EDAD32] text-white', //background: #EDAD32;
    Completed: 'bg-[#0FB11F] text-white', //background: #0FB11F;
    Holding: 'bg-[#4E84D4] text-white', //background: #4E84D4;
  };

  return (
    <span className={cn(baseClasses, statusClasses[status])}>{status}</span>
  );
}
