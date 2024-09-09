/* eslint-disable no-empty */
'use client';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import ForgotPasswordImage from '~/svg/forgot-password/forgot-password';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);

    if (!emailError) {
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-start justify-center p-4 sm:p-10'>
      <ForgotPasswordImage className='ml-3' />
      <div className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Forgot password?</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Input
                  id='email'
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                  className={cn(
                    emailError &&
                      'border-red-500 placeholder-red-500 text-red-500'
                  )}
                />
                {emailError && (
                  <p
                    id='email-error'
                    className='text-sm text-red-500'
                    role='alert'
                  >
                    {emailError}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type='submit'
              className='w-full bg-blue-600 text-white rounded-xl'
            >
              Send
            </Button>
          </CardFooter>
          <p className='text-sm text-center'>
            <Link
              href='/sign-in'
              className='text-sm text-center text-blue-600 hover:underline'
            >
              HAVE AN ACCOUNT ALREADY? LOG IN
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
