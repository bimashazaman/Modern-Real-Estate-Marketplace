import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className=' text-3xl font-semibold text-center my-7'>Profile</h1>

      <form action='' className=' flex flex-col gap-4'>
        <img
          src={currentUser.avatar}
          alt=''
          className=' rounded-full h-24 w-24 object-cover cursor-pointer self-center'
        />
        <input
          type='text'
          placeholder='Username'
          className='border p-3 rounded-lg'
          id='username'
        />
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
        />
        <button
          className='w-full bg-gray-700 p-3 rounded-lg text-white'
          type='submit'
        >
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className=' text-red-700 cursor-pointer'>Delete account</span>
        <span className=' text-red-700 cursor-pointer'>Logout</span>
      </div>
    </div>
  )
}

export default Profile
