/* eslint-disable no-empty */
import { Card } from '@/components/ui/card';

import SalesTable from '@/app/(roots)/sales/sales-list/components/sales';

const SalesList = async () => {
  async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return json;
    } catch (error) {}
  }

  const data = await getData();

  return (
    <div className='relative min-h-screen w-full bg-white'>
      <div className='p-5 md:p-10 pt-0'>
        <div className='flex flex-col md:flex-row justify-left w-full max-w-screen-md p-5 md:p-10 pb-0'>
          <div className='flex items-center font-h1 font-semibold text-3xl md:text-4xl'>
            <h1>Sales List</h1>
          </div>
        </div>
        <p className='p-5 md:p-10 font-h1 leading-6 font-medium text-lg md:text-xl'>
          Sales
        </p>
        <Card className='mx-4 sm:mx-10 p-4 bg-white shadow-sm rounded-[20px]'>
          <SalesTable salesData={data} />
        </Card>
      </div>
    </div>
  );
};

export default SalesList;
