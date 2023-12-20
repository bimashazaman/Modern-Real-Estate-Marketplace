import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-gray-800 p-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <NavLink
          to='/'
          className='text-white text-lg font-bold hover:text-gray-300 transition duration-300'
        >
          REAL ESTATE
        </NavLink>

        <div
          className={`${
            isMenuOpen ? 'scale-100' : 'scale-0'
          } scale-100 transform transition-transform duration-300 origin-top md:flex 
          space-x-4 bg-gray-800 bg-transparent z-20 hidden`}
        >
          {['/', '/profile', '/about', '/sign-in', '/sign-up'].map(
            (path, index) => (
              <NavLink
                key={index}
                to={path}
                className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
                activeClassName='text-gray-300 md:text-gray-400'
              >
                {path === '/' ? 'Home' : path.substring(1)}
              </NavLink>
            )
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden focus:outline-none'
          aria-label='Menu'
        >
          <svg
            className='h-6 w-6 text-white'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? 'scale-100' : 'scale-0'
          } md:scale-100 transform transition-transform duration-300 origin-top md:block md:flex md:space-x-4 absolute md:relative top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-20`}
        >
          {['/', '/profile', '/about', '/sign-in', '/sign-up'].map(
            (path, index) => (
              <NavLink
                key={index}
                to={path}
                className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
                activeClassName='text-gray-300 md:text-gray-400'
              >
                {path === '/' ? 'Home' : path.substring(1)}
              </NavLink>
            )
          )}
        </div>

        <div className='hidden md:block'>
          <input
            type='text'
            placeholder='Search...'
            className='rounded px-2 py-1 text-black focus:outline-none focus:shadow-outline'
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
