import React, { ChangeEvent, useEffect, useState } from 'react'
import NavBar from './navbar'
import BikeCards from './bikeCards'
import SlideShow from './slideshow'
import Image from 'next/image'
import ScrollToTopButton from './scrollupBtn'
import Search from './search'
import { GetPriceBike, GetallBike, GetcategoryPriceBike } from '@/api/bikesAPI'
import { useRouter } from 'next/router'
import Topslide from './topslide'

interface CardHolderProps {
  category: string
  categoryImg: string
}

interface Bikes {
  model: string
  price: number
  img: string[]
  specs: string
  category: string
  clicks: number
  _id: string
}

const slides = ['./img/mtbHome.svg', './img/gravelHome.svg', './img/rbHome.svg']

const CardHolder: React.FC<CardHolderProps> = ({ category, categoryImg }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const [bikes, setBikes] = useState<Bikes[]>([])
  const [loading, setLoading] = useState(true)
  const [isOnline, setIsOnline] = useState(true)
  const [error, setError] = useState(false)
  const router = useRouter()
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = bikes.slice(startIndex, endIndex)
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true)
      setError(false)
      let minPrice = 0
      let maxPrice = 0

      switch (selectedValue) {
        case 'below-9999':
          minPrice = 0
          maxPrice = 9999
          break
        case '10000-19999':
          minPrice = 10000
          maxPrice = 19999
          break
        case '20000-29999':
          minPrice = 20000
          maxPrice = 29999
          break
        case '30000-above':
          minPrice = 30000
          maxPrice = 100000
          break
        case 'all':
          minPrice = 0
          maxPrice = 10000000
          break
        default:
          minPrice = 0
          maxPrice = 10000000
      }

      try {
        if (category === 'all') {
          const response = await GetPriceBike(minPrice, maxPrice)
          setBikes(response)
        } else {
          const response = await GetcategoryPriceBike(category, minPrice, maxPrice)
          setBikes(response)
        }
      } catch (error) {
        setError(true)
      }

      setLoading(false)
    }

    fetchBikes()
  }, [category, selectedValue])

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOffline = () => setIsOnline(false)
    const handleOnline = () => setIsOnline(true)

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  const totalPages = Math.ceil(bikes.length / itemsPerPage)
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div className='sticky top-0 z-20 bg-black'>
        <NavBar />
      </div>
      <div>
        <Topslide categoryImg={categoryImg} />
      </div>
      <div className='flex min-h-screen flex-col border-t-2 border-white/10 bg-[#0b0b0b]'>
        <div className='z-10 min-h-[100vh] bg-[#ffffff]'>
          <div className='flex w-[100%] items-center justify-center md:w-[95%] md:justify-end'>
            <div className='flex items-center justify-center  pt-6 '>
              <select
                className='w-[80vw] cursor-pointer rounded-md border-2 border-solid border-[#585858] p-[.6rem] text-[.8rem] text-[#070707] outline-1 md:w-[20rem] md:items-center'
                value={selectedValue}
                onChange={handleChange}
              >
                <option value='' disabled>
                  Filter By Price
                </option>

                <option value='all'>All</option>
                <option value='below-9999'>below - 9,999</option>
                <option value='10000-19999'>10,000 - 19,999</option>
                <option value='20000-29999'>20,000 - 29,999</option>
                <option value='30000-above'>30,000 - above</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className='flex h-[60vh] items-center justify-center'>
              <h2>Loading...</h2>
            </div>
          ) : !isOnline ? (
            <div className='flex h-[60vh] items-center justify-center'>
              <h2>No bikes found</h2>
            </div>
          ) : error ? (
            <div className='flex h-[60vh] items-center justify-center'>
              <h2>Error occurred.</h2>
            </div>
          ) : currentData.length === 0 ? (
            <div className='flex h-[60vh] items-center justify-center'>
              <h2 className='text-2xl text-gray-500'>No bikes found</h2>
            </div>
          ) : (
            <div className='flex items-center justify-center overflow-y-auto pb-8 pt-6'>
              <div className='grid w-[90%] grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {currentData.map(card => (
                  <BikeCards
                    key={card._id}
                    title={card.model}
                    price={card.price.toLocaleString()}
                    img={card.img[0]}
                    id={card._id}
                  />
                ))}
              </div>
            </div>
          )}

          {totalPages > 1 && (
            <div className='items-center justify-center pb-6 text-[.6rem]'>
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
