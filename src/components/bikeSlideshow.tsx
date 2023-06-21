import React, { useState } from 'react'
import Image from 'next/image'

const BikeSlideshow: React.FC<{ bikeImgs: string[] }> = ({ bikeImgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMagnified, setIsMagnified] = useState(false)
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 })
  const [touchStartX, setTouchStartX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const { clientX, clientY } = e
    const x = ((clientX - left) / width) * 80
    const y = ((clientY - top) / height) * 80
    setMagnifyPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsMagnified(true)
  }

  const handleMouseLeave = () => {
    setIsMagnified(false)
    setMagnifyPosition({ x: 0, y: 0 })
  }

  const handlePreviewClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isSwiping) return

    const touchCurrentX = e.touches[0].clientX
    const differenceX = touchCurrentX - touchStartX

    if (differenceX > 50) {
      // Swipe right
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
      setIsSwiping(false)
    } else if (differenceX < -50) {
      // Swipe left
      if (currentIndex < bikeImgs.length - 1) {
        setCurrentIndex(currentIndex + 1)
      }
      setIsSwiping(false)
    }
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
  }

  return (
    <div className='w-full'>
      <div
        className='slideshow'
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='slide overflow-hidden'>
          <div
            className='image-container z-0'
            style={{
              transform: isMagnified ? 'scale(2)' : 'none',
              transformOrigin: `${magnifyPosition.x}% ${magnifyPosition.y}%`
            }}
          >
            <div className='selected-image'>
              <Image
                src={bikeImgs[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                width={660}
                height={460}
                sizes='100rem'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 flex w-full justify-start overflow-x-auto bg-[#0000006a]'>
        {bikeImgs.map((img, index) => (
          <div
            key={index}
            className={`preview-image-container ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => handlePreviewClick(index)}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={150}
              height={60}
              layout='fixed'
              objectFit='cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BikeSlideshow
