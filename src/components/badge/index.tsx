// badge.tsx
'use client';

import { cva } from 'class-variance-authority';
import React, { FC } from 'react';

import { cn } from '@/lib/utils';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      status: {
        editing:
          'pl-5 pr-5 h-8 border-transparent bg-[#0000FF] text-white font-Inter text-sm leading-6',
        pending_approval:
          'pl-5 pr-5 h-8 border-transparent bg-[#FF8000] text-white font-Inter text-sm leading-6',
        approved:
          'pl-5 pr-5 h-8 border-transparent bg-[#999900] text-white font-Inter text-sm leading-6',
        upcoming:
          'pl-5 pr-5 h-8 border-transparent bg-[#99CCFF] text-white font-Inter text-sm leading-6',
        ongoing:
          'pl-5 pr-5 h-8 border-transparent bg-[#009900] text-white font-Inter text-sm leading-6',
        finished:
          'pl-5 pr-5 h-8 border-transparent bg-[#660000] text-white font-Inter text-sm leading-6',
        rejected:
          'pl-5 pr-5 h-8 border-transparent bg-[#FF0000] text-white font-Inter text-sm leading-6',
        disabled:
          'pl-5 pr-5 h-8 border-transparent bg-[#999999] text-white font-Inter text-sm leading-6',
      },
    },
    defaultVariants: {
      status: 'editing',
    },
  },
);

export type BadgeProps = {
  className?: string;
  status?:
    | 'editing'
    | 'pending_approval'
    | 'approved'
    | 'upcoming'
    | 'ongoing'
    | 'finished'
    | 'rejected'
    | 'disabled';
  onClick?: () => void;
  children: React.ReactNode;
};

const Badge: FC<BadgeProps> = ({
  className,
  status = 'editing',
  onClick,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(badgeVariants({ status }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
