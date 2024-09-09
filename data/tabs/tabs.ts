// TODO: passing the path is not a good idea
export const RafflesTabsList = [
  { label: 'Summery', value: 'summery', path: '/raffles/[id]/raffle-summery' },
  {
    label: 'Raffle Information',
    value: 'raffleInformation',
    path: '/raffles/[id]/raffle-information',
  },
  { label: 'Status', value: 'status', path: '#' },
  {
    label: 'Prizes',
    value: 'prizeList',
    path: '/raffles/[id]/raffle-prize-list',
  },

  {
    label: 'Locations',
    value: 'locations',
    path: '#',
  },
  { label: 'Gallery', value: 'gallery', path: '/raffles/[id]/raffle-gallery' },
  { label: 'Barcode', value: 'barcode', path: '#' },
  { label: 'Registered Users', value: 'registeredUsers', path: '#' },
  { label: 'Winners', value: 'winners', path: '/raffles/[id]/raffle-winners' },
];

export const SalesTabsList = [
  { label: 'Summery', value: 'summery', path: '/sales/[id]/sale-summery' },
  {
    label: 'Sale Information',
    value: 'saleInformation',
    path: '/sales/[id]/sale-information',
  },
  { label: 'Status', value: 'status', path: '/sales/[id]/sale-status' },
  {
    label: 'Locations',
    value: 'locations',
    path: '/sales/[id]/sale-locations',
  },
  { label: 'Gallery', value: 'gallery', path: '/sales/[id]/sale-gallery' },
];

export const VouchersTabsList = [
  {
    label: 'Summery',
    value: 'summery',
    path: '/vouchers/[id]/voucher-summery',
  },
  {
    label: 'Voucher Information',
    value: 'voucherInformation',
    path: '/vouchers/[id]/voucher-information',
  },
  { label: 'Status', value: 'status', path: '/vouchers/[id]/voucher-status' },
  {
    label: 'Gallery',
    value: 'gallery',
    path: '/vouchers/[id]/voucher-gallery',
  },
  {
    label: 'Locations',
    value: 'locations',
    path: '/vouchers/[id]/voucher-locations',
  },
  {
    label: 'Issue',
    value: 'issue',
    path: '/vouchers/[id]/voucher-issue',
  },
  {
    label: 'Issued Users',
    value: 'issuedUsers',
    path: '/vouchers/[id]/voucher-issued-users',
  },
  {
    label: 'Redeemed Users',
    value: 'redeemedUsers',
    path: '/vouchers/[id]/voucher-redeemed-users',
  },
];
