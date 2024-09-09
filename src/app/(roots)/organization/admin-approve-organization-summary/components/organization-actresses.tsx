const OrganizationAddresses = () => {
  return (
    <>
      <div className='shadow-xl rounded-lg p-5'>
        <div className='flex flex-row items-center gap-5 py-5'>
          <p className='font-semibold text-2xl'>Addresses</p>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td className='w-[25%] pb-5'>Address line 1</td>
                <td className=' pb-5 pl-20'>350/1, Galle Road, </td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Address line 2</td>
                <td className=' pb-5 pl-20'>Colombo 07</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>State</td>
                <td className='pb-5 pl-20'>-</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>City</td>
                <td className='pb-5 pl-20'>Colombo 07</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Postal code</td>
                <td className='pb-5 pl-20'>01112</td>
              </tr>
              <tr>
                <td className='w-[25%] pb-5'>Country</td>
                <td className='pb-5 pl-20'>Sri Lanka</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrganizationAddresses;
