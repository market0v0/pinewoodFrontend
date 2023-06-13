import React, { useState } from 'react'
import Image from 'next/image'

const Search = () => {
  const [message, setMessage] = useState('')

  const handleKeyDown = (event: any) => {
    // Handle key down event
  }

  const handleSearch = () => {
    // Handle send message event
  }

  return (
    <div className=' flex w-[100%] items-center rounded-md bg-[#838383] text-[.8rem] outline outline-1 outline-[#000000]'>
      <input
        type='text'
        className='w-full bg-[#ffffff00] p-[.4rem] outline-none'
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='  p-2 text-white' onClick={handleSearch}>
        <div className='h-6 w-6'>
          <Image src='img/search.svg' alt='search' width={24} height={24} />
        </div>
      </button>
    </div>
  )
}

export default Search
