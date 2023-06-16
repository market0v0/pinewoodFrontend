import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const BikeCards: React.FC<{ img: string; id: string; title: string; price: string }> = ({
  img,
  id,
  title,
  price
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardDoubleClick = () => {
    router.push({
      pathname: '/specificBike',
      query: { id: id }
    })
  }

  return (
    <div
      className='relative h-full overflow-hidden rounded-md bg-white text-center font-inter text-[#000] shadow drop-shadow-xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDoubleClick={handleCardDoubleClick}
    >
      <Image src={img} width={270} height={50} alt='Logo' layout='responsive' objectFit='cover' />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='flex h-full flex-col items-center justify-center'>
          {isHovered && <p className='mt-2 cursor-pointer text-[.8rem] text-white'>View Bike</p>}
        </div>
      </div>
      <div className=' p-3'>
        <h3 className='text-[1.5rem] font-semibold '>{title}</h3>
        <p className='text-[.7rem] tracking-[.05rem] '>{'₱' + price}</p>
      </div>
    </div>
  )
}

export default BikeCards
