import React, { useState, useEffect } from 'react'

const SlideShow: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = 3000 // 3 seconds

  useEffect(() => {
    const interval = setInterval(goToNextSlide, slideInterval)

    return () => {
      clearInterval(interval)
    }
  }, [currentSlide])

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
  }

  return (
    <div
      className='absolute left-0 top-0 z-0 h-screen w-screen'
      style={{
        position: 'fixed',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='font flex min-h-[100vh] items-center justify-center opacity-50'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute left-0 top-0 h-full w-full  transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide} alt={`Slide ${index}`} className='h-full w-full object-cover' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideShow
