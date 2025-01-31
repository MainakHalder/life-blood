import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { userTypes } from '../../constants/constants';

const SignupHospital = () => {
  const [hospitalInput, setHospitalInput] = useState({
    email: '',
    name: '',
    password: '',
    location: '',
  });
  const { hospitalSignupHandler, token, userType } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (token && userType === userTypes.HOSPITAL) {
      navigate('/hospital');
    }
  }, [token, userType]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    hospitalSignupHandler(
      hospitalInput.name,
      hospitalInput.email,
      hospitalInput.location,
      hospitalInput.password
    );
    setHospitalInput({ name: '', email: '', password: '', location: '' });
  };
  return (
    <div className='mt-28 w-full min-h-screen flex  flex-col bg-white'>
      <div className='w-full md:w-1/2 bg-white mt-10 px-12 self-center'>
        <h2 className='text-center text-4xl text-red-600 font-display font-semibold'>
          Hospital Sign Up
        </h2>
        <div className='mt-12'>
          <form onSubmit={onSubmitHandler}>
            <div className='flex flex-col'>
              <div className='text-sm font-bold text-gray-700 tracking-wide'>
                Hospital Name
              </div>
              <div className='border-b border-gray-300'>
                <input
                  className='w-full text-lg p-2 focus:outline-none'
                  type='text'
                  value={hospitalInput.name}
                  onChange={(e) => {
                    setHospitalInput({
                      ...hospitalInput,
                      name: e.target.value,
                    });
                  }}
                  placeholder='Enter Hospital Name'
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
                  value={hospitalInput.email}
                  onChange={(e) => {
                    setHospitalInput({
                      ...hospitalInput,
                      email: e.target.value,
                    });
                  }}
                  placeholder='example@gmail.com'
                  required
                />
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
                  value={hospitalInput.location}
                  onChange={(e) => {
                    setHospitalInput({
                      ...hospitalInput,
                      location: e.target.value,
                    });
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
                  value={hospitalInput.password}
                  onChange={(e) => {
                    setHospitalInput({
                      ...hospitalInput,
                      password: e.target.value,
                    });
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
              to={'/login/hospital'}
              replace={true}
              //   state={location.state}
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
export default SignupHospital;
