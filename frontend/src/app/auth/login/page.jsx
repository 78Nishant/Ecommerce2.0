'use client'

import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden shadow-xl">
        {/* Left Side - Background Shapes */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start">
            <div className="absolute -left-16 top-10 w-48 h-48 bg-purple-500 rounded-tl-3xl rotate-12 opacity-30"></div>
            <div className="absolute -left-8 bottom-10 w-48 h-48 bg-orange-500 rounded-br-3xl rotate-[-15deg] opacity-30"></div>
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="w-1/2 bg-white p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Close Icon */}
            <div className="absolute top-6 right-6 text-gray-400 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-center mb-2 text-gray-800">
              Welcome back!
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Please enter your details
            </p>

            {/* FORM STARTS HERE */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="anna@gmail.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none transition"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-600 text-sm font-medium mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:outline-none transition"
                    aria-invalid={errors.password ? 'true' : 'false'}
                    aria-describedby="password-error"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('rememberMe')}
                    className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-gray-800"
                  />
                  Remember me <span className="text-gray-400 ml-1">• 30 days</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-gray-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Log In"
              >
                Log In
              </button>

              {/* Google Login */}
              <button
                type="button"
                className="w-full text-black flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Log in with Google"
              >
                <FaGoogle size={18} className="text-black" />
                Log in with Google
              </button>
            </form>

            {/* Signup Link */}
            <p className="mt-6 text-sm text-gray-600 text-center">
              Don’t have an account?{' '}
              <Link href="/auth/signup" className="text-gray-800 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}