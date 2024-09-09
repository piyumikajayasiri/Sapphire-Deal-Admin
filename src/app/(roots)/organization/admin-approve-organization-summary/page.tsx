'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import DisableButton from '@/components/buttons/tags/DisableButton';
import RaffleButton from '@/components/buttons/tags/RaffleButton';
import { SalesButton } from '@/components/buttons/tags/SalesButton';
import VouchersButton from '@/components/buttons/tags/VouchersButton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import AdminOrganizationBranches from '@/app/(roots)/organization/admin-approve-organization-summary/components/admin-organization-branches';
import AdminOrganizationEmployees from '@/app/(roots)/organization/admin-approve-organization-summary/components/admin-organization-employees';
import OrganizationAddresses from '@/app/(roots)/organization/admin-approve-organization-summary/components/organization-actresses';
import OrganizationGallery from '@/app/(roots)/organization/admin-approve-organization-summary/components/organization-gallary';
import OrganizationInformation from '@/app/(roots)/organization/admin-approve-organization-summary/components/organization-information';

const AdminApproveOrganizationSummary = () => {
  const [activeTab, setActiveTab] = useState<string>('summary');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Map for breadcrumb page titles
  const breadcrumbLabels: Record<string, string> = {
    summary: 'Summary',
    users: 'Organization Users',
    branches: 'Branches',
  };

  return (
    <div>
      <div className='mb-5'>
        <Breadcrumb className='shadow-md py-4'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href='/'>Admin</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href='/components'>Approve</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href='/components'>Organizations</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{breadcrumbLabels[activeTab]}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex flex-row justify-between py-10'>
        <div>
          <DisableButton />
        </div>
        <div className='flex flex-row gap-2 '>
          <RaffleButton />
          <SalesButton />
          <VouchersButton />
        </div>
      </div>
      <div>
        <p className='text-[33.3px] font-semibold mb-5'>Organization Summary</p>
      </div>
      <div>
        <div className='flex border-b'>
          <button
            className={`py-2 px-4 ${
              activeTab === 'summary'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => handleTabClick('summary')}
          >
            Summary
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'users'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => handleTabClick('users')}
          >
            Organization Users
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 'branches'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => handleTabClick('branches')}
          >
            Branches
          </button>
        </div>
        <div className='mt-4'>
          {activeTab === 'summary' && (
            <div>
              <OrganizationInformation />
              <OrganizationAddresses />
              <OrganizationGallery />
            </div>
          )}
          {activeTab === 'users' && (
            <div>
              <AdminOrganizationEmployees />
            </div>
          )}
          {activeTab === 'branches' && (
            <div>
              <AdminOrganizationBranches />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminApproveOrganizationSummary;
