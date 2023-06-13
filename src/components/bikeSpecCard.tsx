import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BikeSpec: React.FC<{
  specs?: string
  img?: string
  id: number
  title: string
  price: string
}> = ({ img, id, title, specs, price }) => {
  const router = useRouter()
  const specSections = specs ? specs.split('|') : []
  const [showAll, setShowAll] = useState(false)

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

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='flex w-auto rounded-md  '>
      <div className='grid h-full grid-cols-1 flex-col  gap-6 overflow-hidden   bg-[#ffffff00]  font-inter lg:grid-cols-[70%_30%]'>
        {img ? (
          <div className=' '>
            <Image
              src={img}
              width={120}
              height={100}
              alt='Logo'
              layout='responsive'
              objectFit='cover'
            />
          </div>
        ) : (
          <div className='p-3 shadow drop-shadow-xl'>
            <p>No Image Available</p>
          </div>
        )}
        <div className='  items-start justify-self-center  text-white'>
          <h3 className='text-2xl font-bold text-white'>{title}</h3>
          <p className='text-xs tracking-wide text-gray-300'>{'₱' + price}</p>
          <h1 className='font-light text-gray-300'>Specification:</h1>
          <div className=' h-[30rem] overflow-y-auto lg:h-[25vw]'>
            <div className='font-light leading-[2rem] text-[6.rem]'>
              {specSections.slice(0, showAll ? specSections.length : 3).map((section, index) => (
                <React.Fragment key={index}>{renderSpecSection(section.trim())}</React.Fragment>
              ))}
              {specSections.length > 3 && (
                <button
                  className='mt-2 text-gray-400 hover:text-white focus:text-white'
                  onClick={toggleShowAll}
                >
                  {showAll ? 'See Less' : 'See More'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeSpec
