/* eslint-disable no-empty */
'use client';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError) {
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-start justify-center p-5 sm:p-10'>
      <div className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>
            Don't have an account?{' '}
            <Link href='#' className='text-blue-600 hover:underline'>
              Register
            </Link>
          </CardDescription>
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
              <div className='flex flex-col space-y-1.5'>
                <Input
                  id='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  aria-invalid={!!passwordError}
                  aria-describedby={
                    passwordError ? 'password-error' : undefined
                  }
                  className={cn(
                    passwordError &&
                      'border-red-500 placeholder-red-500 text-red-500'
                  )}
                />
                {passwordError && (
                  <p
                    id='password-error'
                    className='text-sm text-red-500'
                    role='alert'
                  >
                    {passwordError}
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
              Login
            </Button>
          </CardFooter>
          <p className='text-sm text-start ml-6'>
            <Link
              href='/forgot-password'
              className='text-sm text-blue-600 hover:underline mt-4'
            >
              Forgot password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
