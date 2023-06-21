import React from 'react'
import { useRouter } from 'next/router'
import BikeSlideshow from './bikeSlideshow'
import { BikesModel } from '@/api/bikesAPI'

const BikeSpec: React.FC<BikesModel> = ({ model, price, img, specs }) => {
  const router = useRouter()
  const specSections = specs ? specs.split('|') : []

  const renderSpecSection = (section: string) => {
    const words = section.split(' ')
    return (
      <p>
        {words.map((word, index) => (
          <span key={index} className={word.endsWith(':') ? 'font-bold' : ''}>
            {word}
            {index < words.length - 1 && ' '}
          </span>
        ))}
      </p>
    )
  }

  const goBack = () => {
    router.back()
  }

  return (
    <div className='grid grid-cols-1 gap-1 overflow-hidden xl:grid-cols-10'>
      <div className='col-span-7'>
        <div className='h-full overflow-hidden rounded-md bg-[#fff] p-2 font-inter drop-shadow-lg'>
          {img ? (
            <div className='overflow-hidden'>
              <BikeSlideshow bikeImgs={img} />
            </div>
          ) : (
            <div className='shadow drop-shadow-xl'>
              <p>No Image Available</p>
            </div>
          )}
        </div>
      </div>
      <div className='col-span-3 bg-[#fff] px-5 drop-shadow-lg'>
        <h3 className='text-2xl font-bold'>{model}</h3>
        <p className='text-xs tracking-wide text-[#000000b0]'>{'₱' + price}</p>
        <h1 className='font-light text-[#0000006f]'>Specification:</h1>
        <div className='custom-scrollbar xl:h-[30rem] xl:overflow-y-auto'>
          <div className='pl-0 text-[.9rem] font-light leading-[2rem] lg:pl-2'>
            {specSections.map((section, index) => (
              <React.Fragment key={index}>{renderSpecSection(section.trim())}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeSpec
