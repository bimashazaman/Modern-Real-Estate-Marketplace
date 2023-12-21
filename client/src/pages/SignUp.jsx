import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { BASE_URL, SIGNUP_ENDPOINT } from '../../constant'
import OAuth from '../components/OAuth'

const SignUp = () => {
  const navigate = useNavigate()

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${BASE_URL}${SIGNUP_ENDPOINT}`,
          values
        )
        console.log(response.data)
        // Redirect user after successful signup
        navigate('/sign-in')
      } catch (error) {
        console.error('Signup error:', error.response || error)
        // Handle errors (e.g., show error message)
      }
    },
  })

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-cyan-500 to-blue-800'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl'>
        <h2 className='text-3xl font-extrabold text-center text-gray-900'>
          Create Your Account
        </h2>
        <form onSubmit={formik.handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='username'
              className='text-sm font-medium text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Username'
              className='w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className='text-red-600 text-sm'>
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor='email'
              className='text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              className='w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-600 text-sm'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor='password'
              className='text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              className='w-full px-4 py-2 mt-2 text-base text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='text-red-600 text-sm'>
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div>
            <button
              type='submit'
              className='w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            >
              Sign Up
            </button>
          </div>
          <OAuth />
        </form>
      </div>
    </div>
  )
}

export default SignUp
