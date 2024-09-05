import { ChangeEventHandler, FormEventHandler } from 'react';

const GenderModal = (props: {
  action: FormEventHandler<HTMLFormElement> | undefined;
  changeFunction: ChangeEventHandler<HTMLSelectElement> | undefined;
  tempGender: string;
  closeModal: () => void;
}) => {
  const closeModal = () => {
    props.action;
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div
        className='fixed inset-0 bg-black opacity-50'
        onClick={closeModal}
      ></div>
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
            <h3 className='text-xl font-semibold text-gray-900'>Edit Gender</h3>
            <button
              type='button'
              className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
              onClick={closeModal}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div className='p-4 md:p-5'>
            <form className='space-y-4' onSubmit={props.action}>
              <div>
                <label
                  htmlFor='gender'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your gender
                </label>
                <select
                  name='gender'
                  id='gender'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  value={props.tempGender}
                  onChange={props.changeFunction}
                  required
                >
                  <option value=''>Select gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Prefer not to say'>Prefer not to say</option>
                </select>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderModal;
