import React from 'react';

const HospitalRequestSection = ({ hospitalData }) => {
  return (
    <div className='flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg md:w-1/2'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Pending Request</h1>
      </div>
      <div className='w-full flex flex-row p-2 justify-center items-center mx-2'>
        <div className='justify-between border-2 px-2 w-full'>
          <div className='space-x-4 flex flex-row'>
            <h1>Blood Bank</h1>
            <h1>Type</h1>
            <h1>Qt.</h1>
          </div>
          {hospitalData
            ?.filter((el) => !el.isAccepted)
            .map((el) => {
              return (
                <div
                  key={Math.random() * 100}
                  className='space-x-4 flex flex-row'
                >
                  <h1>Life Blood Bank</h1>
                  <h1>{el.bloodGroup}</h1>
                  <h1>{el.quantity}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HospitalRequestSection;
