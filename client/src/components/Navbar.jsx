// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { currentUser } = useSelector((state) => state.user)

//   return (
//     <nav className='bg-gray-800 p-4 shadow-lg'>
//       <div className='container mx-auto flex justify-between items-center'>
//         <NavLink
//           to='/'
//           className='text-white text-lg font-bold hover:text-gray-300 transition duration-300'
//         >
//           REAL ESTATE
//         </NavLink>

//         <div
//           className={`${
//             isMenuOpen ? 'scale-100' : 'scale-0'
//           } scale-100 transform transition-transform duration-300 origin-top md:flex
//           space-x-4 bg-gray-800 bg-transparent z-20 hidden`}
//         >
//           {currentUser
//             ? ['/', '/profile', '/about'].map((path, index) => (
//                 <NavLink
//                   key={index}
//                   to={path}
//                   className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
//                   activeClassName='text-gray-300 md:text-gray-400'
//                 >
//                   {path === '/' ? 'Home' : path.substring(1)}
//                 </NavLink>
//               ))
//             : ['/', '/about', '/sign-in', '/sign-up'].map((path, index) => (
//                 <NavLink
//                   key={index}
//                   to={path}
//                   className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
//                   activeClassName='text-gray-300 md:text-gray-400'
//                 >
//                   {path === '/' ? 'Home' : path.substring(1)}
//                 </NavLink>
//               ))}
//         </div>

//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className='md:hidden focus:outline-none'
//           aria-label='Menu'
//         >
//           <svg
//             className='h-6 w-6 text-white'
//             viewBox='0 0 24 24'
//             fill='none'
//             stroke='currentColor'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               strokeWidth='2'
//               d={
//                 isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
//               }
//             />
//           </svg>
//         </button>

//         <div
//           className={`${
//             isMenuOpen ? 'scale-100' : 'scale-0'
//           } md:scale-100 transform transition-transform duration-300 origin-top  md:flex md:space-x-4 absolute md:relative top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent z-20 lg:hidden`}
//         >
//           {currentUser
//             ? ['/', '/profile', '/about'].map((path, index) => (
//                 <NavLink
//                   key={index}
//                   to={path}
//                   className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
//                   activeClassName='text-gray-300 md:text-gray-400'
//                 >
//                   {path === '/' ? 'Home' : path.substring(1)}
//                 </NavLink>
//               ))
//             : ['/', '/about', '/sign-in', '/sign-up'].map((path, index) => (
//                 <NavLink
//                   key={index}
//                   to={path}
//                   className='block text-white px-4 py-2 rounded mt-1 md:mt-0 hover:bg-gray-700 transition duration-300'
//                   activeClassName='text-gray-300 md:text-gray-400'
//                 >
//                   {path === '/' ? 'Home' : path.substring(1)}
//                 </NavLink>
//               ))}
//         </div>

//         <div className='hidden md:block'>
//           <input
//             type='text'
//             placeholder='Search...'
//             className='rounded px-2 py-1 text-black focus:outline-none focus:shadow-outline'
//           />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>REAL</span>
            <span className='text-slate-700'>ESTATE</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover border border-gray-500'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  )
}
