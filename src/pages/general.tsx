import BikeCards from '@/components/bikeCards'
import NavBar from '@/components/navbar'
import ScrollToTopButton from '@/components/scrollupBtn'
import SlideShow from '@/components/slideshow'
import { data } from 'autoprefixer'
import Image from 'next/image'
import React from 'react'

const slides = ['./img/mtbHome.svg', './img/gravelHome.svg', './img/rbHome.svg']
const bike1 = { img: './img/lancerGravel.svg', id: 1, title: 'Card 1', price: '14,500' }
const bike2 = { id: 2, title: 'Card 1', price: '14,500', img: './img/lancerGravel.svg' }
const General: React.FC = () => {
  return (
    <div className='font-inter'>
      <div className='sticky top-0 z-20  bg-black'>
        <NavBar />
      </div>
      <div className=' relative flex min-h-full flex-col overflow-hidden bg-[#0b0b0b]'>
        <div className='z-0 overflow-hidden'>
          <div className='overflow-hidden'>
            <SlideShow slides={slides} />
          </div>
        </div>

        <div className='z-10 block min-h-[100%] w-[50] items-center overflow-hidden whitespace-nowrap px-[1vw] pt-[15rem] text-center text-[#ffffffa5] sm:px-[8.5vw] md:flex  md:pt-[8%] md:text-start xl:min-h-[100vh] '>
          <div className='z-10'>
            <div className='block  break-words text-[3.5rem] font-[550] leading-[1rem] md:text-[7rem] md:leading-[4rem]'>
              PINEWOOD
            </div>
            <div className='break-words text-[8rem] font-[600] leading-[9rem]'>BIKE</div>
            <div className='break-words text-[1.5rem] font-[500] leading-[4rem]'>Philippines</div>
            <div className='text-[1rem] font-[400] leading-[2rem] underline underline-offset-4'>
              About Pinewood
            </div>
            <div className='py-[5rem]'>
              <button
                className='my-3 inline-block h-[3rem] w-[13rem] items-center overflow-hidden whitespace-nowrap border-[.1rem] p-2 text-[.7rem]'
                onClick={() => (window.location.href = 'http://localhost:3000/bikes')}
              >
                View Bikes
              </button>
            </div>
          </div>
        </div>
        <div className='relative z-10 min-h-[100%] bg-black '>
          <div
            className='font flex min-h-[100%] items-center justify-center py-10 xl:min-h-[70vh]'
            style={{
              background: "url('img/newarrivalsBG.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className='w-[80%]'>
              <div className='break-words py-5 text-[2rem] font-bold tracking-wide text-[#ffff]'>
                Most View Models
              </div>
              <div className='flex items-center justify-center'>
                <div className='z-50 grid  grid-cols-1 gap-10 overflow-hidden md:grid-cols-2'>
                  <div>
                    <BikeCards
                      title={bike1.title}
                      price={bike1.price}
                      img={bike1.img}
                      id={bike1.id}
                    />
                  </div>

                  <div>
                    {' '}
                    <BikeCards
                      title={bike1.title}
                      price={bike1.price}
                      img={bike1.img}
                      id={bike1.id}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-10 bg-[#fff] py-4'>
          <div className='flex justify-center text-[1rem] font-extrabold text-black '>
            AUTHORIZED Shop
          </div>
          <div className='  pb-10%  flex min-h-[100%] items-center justify-center overflow-y-auto pt-4 xl:min-h-[30vh]'>
            <div className='py-10%  grid w-[90%] grid-cols-1 gap-[5%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              <Image
                src={'img/motion.svg'}
                width={270}
                height={100}
                alt='Logo'
                layout='responsive'
                objectFit='cover'
              />
              <Image
                src={'img/striga.svg'}
                width={270}
                height={100}
                alt='Logo'
                layout='responsive'
                objectFit='cover'
              />
              <Image
                src={'img/aj.svg'}
                width={270}
                height={100}
                alt='Logo'
                layout='responsive'
                objectFit='cover'
              />
              <Image
                src={'img/hometown.svg'}
                width={270}
                height={100}
                alt='Logo'
                layout='responsive'
                objectFit='cover'
              />
            </div>
          </div>
          <div className='relative justify-start pl-[5%] pt-4 text-[.7rem] font-normal text-black underline underline-offset-4'>
            How to be a reseller?
          </div>
        </div>
        <div className='relative  bottom-0 z-10 flex h-[100%] items-center justify-center break-words bg-gray-900 p-4'>
          <p className='text-gray-300'>
            © 2023 Your Company. All rights reserved ! Disclaimer this is just a sample website !.
          </p>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  )
}

export default General
