import React, { useState } from 'react'
import NavBar from './navbar'
import BikeCards from './bikeCards'
import SlideShow from './slideshow'
import Image from 'next/image'
import ScrollToTopButton from './scrollupBtn'
import Search from './search'

interface CardHolderProps {
  categoryImg: string
  category: string
  Data: { id: number; title: string; price: string; img: string }[]
}

const slides = ['./img/mtbHome.svg', './img/gravelHome.svg', './img/rbHome.svg']

const CardHolder: React.FC<CardHolderProps> = ({ category, categoryImg, Data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(Data.length / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = Data.slice(startIndex, endIndex)

  return (
    <div>
      <div className='sticky top-0 z-20 bg-black'>
        <NavBar />
      </div>
      <div className='p-[5%]'>
        <div className='z-10 flex items-center justify-center'>
          <div className='block'>
            <div className='block pb-[.3rem]'>
              <Image src={'img/pinewoodlogohome.svg'} width={200} height={50} alt='Logo' />
            </div>
            <div className='block'>
              <Image
                src={categoryImg}
                width={1000}
                height={50}
                alt='Logo'
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className='z-[0] h-[1rem] opacity-90'>
          <SlideShow slides={slides} />
        </div>
      </div>
      <div className='flex min-h-screen flex-col border-t-2 border-white/10 bg-[#0b0b0b]'>
        <div className='z-10 min-h-[100vh] bg-[#ffffff]'>
          <div className='flex w-[95%] items-center justify-center md:justify-end '>
            <div className=' grid grid-cols-1 items-center justify-between gap-6 pt-6 md:grid-cols-2'>
              <div>
                <Search />
              </div>
              <select className='w-[80vw] cursor-pointer rounded-md border-2 border-solid border-[#585858] p-[.6rem] text-[.8rem] text-[#070707] outline-1 md:w-[20rem] md:items-center'>
                <option value='' disabled>
                  Filter By
                </option>
                <option value='all'>ALL</option>
                <option value='active'>Business Data</option>
                <option value='active'>Customer Support Data</option>
                <option value='active'>Product Availability Data</option>
              </select>
            </div>
          </div>

          <div className='flex items-center justify-center overflow-y-auto pb-8 pt-6'>
            <div className='grid w-[90%] grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {currentData.map(card => (
                <BikeCards
                  key={card.id}
                  title={card.title}
                  price={card.price}
                  img={card.img}
                  id={card.id}
                />
              ))}
            </div>
          </div>
          {totalPages > 1 && (
            <div className='flex items-center justify-center pb-6 text-[.6rem]'>
              <div className='flex space-x-4'>
                {currentPage > 1 && (
                  <button
                    className='rounded-md bg-[#585858] px-2 py-2 text-[#ffffff]'
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`rounded-md border border-black px-[.7rem] py-2 ${
                      index + 1 === currentPage
                        ? 'bg-[#] text-[#000000]'
                        : 'bg-[#ffffff00] text-[#000000]'
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    className='rounded-md bg-[#5858586c] px-2 py-2 text-[#ffffff]'
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='z-30'></div>
        <ScrollToTopButton />
      </div>
    </div>
  )
}

export default CardHolder
