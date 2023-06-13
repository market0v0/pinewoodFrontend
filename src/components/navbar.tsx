import React, { useState } from 'react'
import Image from 'next/image'

const NavBar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className='color-white z-20 flex h-[auto] w-[100%] flex-col overflow-hidden  border-b-2 border-white/10 bg-[#121212b0] p-2 px-2 md:flex-row'>
      <div className=' flex flex-1 items-center  justify-between md:px-14 '>
        <div className=' cursor-pointer pr-2 '>
          <Image
            src={'img/pinewoodlogohome.svg'}
            width={270}
            height={50}
            alt='Logo'
            style={{ minWidth: '150px' }}
          />
        </div>

        <div className=' z-10 mt-3 md:hidden'>
          <button
            className=' text-white focus:outline-none'
            onClick={toggleDropdown}
            aria-expanded={isDropdownOpen}
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='md:hidden'>
        {isDropdownOpen && (
          <div className='mt-2'>
            <ul className='rounded py-2 text-center'>
              <li
                className='block cursor-pointer px-4 py-2 text-white'
                onClick={() => (window.location.href = 'http://localhost:3000/')}
              >
                Home
              </li>
              <li
                className='block cursor-pointer px-4 py-2 text-white'
                onClick={() => (window.location.href = 'http://localhost:3000/mtb')}
              >
                Mountain
              </li>
              <li
                className='block cursor-pointer px-4 py-2 text-white'
                onClick={() => (window.location.href = 'http://localhost:3000/road')}
              >
                Road
              </li>
              <li
                className='block cursor-pointer px-4 py-2 text-white'
                onClick={() => (window.location.href = 'http://localhost:3000/gravel')}
              >
                Gravel
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className='relative hidden items-center pr-[15rem]  pt-2 font-inter text-[.9rem] font-[700] text-[#fff] md:flex'>
        <ul className='flex flex-1'>
          <li
            className='cursor-pointer px-[10%]'
            onClick={() => (window.location.href = 'http://localhost:3000/')}
          >
            Home
          </li>
          <li
            className='cursor-pointer px-[10%]'
            onClick={() => (window.location.href = 'http://localhost:3000/mtb')}
          >
            Mountain
          </li>
          <li
            className='cursor-pointer px-[10%]'
            onClick={() => (window.location.href = 'http://localhost:3000/road')}
          >
            Road
          </li>
          <li
            className='cursor-pointer px-[10%]'
            onClick={() => (window.location.href = 'http://localhost:3000/gravel')}
          >
            Gravel
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
