import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { userTypes } from '../../constants/constants';
const SignupDonor = () => {
  const [donorInput, setDonorInput] = useState({
    email: '',
    name: '',
    password: '',
    location: '',
    bloodGroup: '',
  });
  const { donorSignupHandler, token, userType } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && userType === userTypes.DONOR) {
      navigate('/donor');
    }
  }, [token, userType]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    donorSignupHandler(
      donorInput.name,
      donorInput.email,
      donorInput.password,
      donorInput.bloodGroup
    );
    setDonorInput({ name: '', password: '', email: '', bloodGroup: '' });
  };

  return (
    <div className='mt-28 w-full min-h-screen flex  flex-col bg-white'>
      <div className='w-full md:w-1/2 bg-white mt-10 px-12 self-center'>
        <h2 className='text-center text-4xl text-red-600 font-display font-semibold'>
          Blood Bank Sign Up
        </h2>
        <div className='mt-12'>
          <form onSubmit={onSubmitHandler}>
            <div className='flex flex-col'>
              <div className='text-sm font-bold text-gray-700 tracking-wide'>
                Name
              </div>
              <div className='border-b border-gray-300'>
                <input
                  className='w-full text-lg p-2 focus:outline-none'
                  type='text'
                  value={donorInput.name}
                  onChange={(e) => {
                    setDonorInput({ ...donorInput, name: e.target.value });
                  }}
                  placeholder='Enter your Name'
                  required
                />
              </div>
            </div>
            <div className='mt-8 flex flex-col'>
              <div className='text-sm font-bold text-gray-700 tracking-wide'>
                Email Address
              </div>
              <div className='border-b border-gray-300'>
                <input
                  className='w-full text-lg p-2 focus:outline-none'
                  type='email'
                  value={donorInput.email}
                  onChange={(e) => {
                    setDonorInput({ ...donorInput, email: e.target.value });
                  }}
                  placeholder='example@gmail.com'
                  required
                />
              </div>
            </div>
            <div className='mt-8 flex flex-col'>
              <div className='flex flex-row space-x-5'>
                <select
                  value={donorInput.bloodGroup}
                  onChange={(e) => {
                    setDonorInput({
                      ...donorInput,
                      bloodGroup: e.target.value,
                    });
                  }}
                  className='w-1/3'
                >
                  <option value={''} disabled>
                    -Enter Blood Group-
                  </option>
                  <option value={'A+'}>A+</option>
                  <option value={'A-'}>A-</option>
                  <option value={'B+'}>B+</option>
                  <option value={'B-'}>B-</option>
                  <option value={'O+'}>O+</option>
                  <option value={'O-'}>O-</option>
                  <option value={'AB+'}>AB+</option>
                  <option value={'AB-'}>AB-</option>
                </select>
              </div>
            </div>
            <div className='mt-8 flex flex-col'>
              <div className='text-sm font-bold text-gray-700 tracking-wide'>
                Location
              </div>
              <div className='border-b border-gray-300'>
                <input
                  className='w-full text-lg p-2 focus:outline-none'
                  type='text'
                  value={donorInput.location}
                  onChange={(e) => {
                    setDonorInput({ ...donorInput, location: e.target.value });
                  }}
                  placeholder='Enter your Location'
                  required
                />
              </div>
            </div>
            <div className='mt-8 flex flex-col'>
              <div className='flex justify-between items-center'>
                <div className='text-sm font-bold text-gray-700 tracking-wide'>
                  Password
                </div>
              </div>
              <div className='flex items-center border-b border-gray-300'>
                <input
                  className='w-full text-lg p-2  focus:outline-none'
                  type={'password'}
                  value={donorInput.password}
                  onChange={(e) => {
                    setDonorInput({ ...donorInput, password: e.target.value });
                  }}
                  placeholder='Enter your password'
                  required
                />
              </div>
            </div>
            <div className='mt-10 flex flex-col gap-4'>
              <button
                className='bg-red-400 text-white p-3 sm:p-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline active:bg-blue-500
                                shadow-lg'
                type='submit'
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className='mt-12 text-sm font-display font-semibold text-gray-700 text-center'>
            Do have an account ?{' '}
            <Link
              to={'/login/donor'}
              replace={true}
              className='cursor-pointer text-red-400 hover:text-red-600'
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupDonor;
