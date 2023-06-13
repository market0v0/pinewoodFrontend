import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.innerHeight / 2
      const currentPosition = window.pageYOffset

      setShowButton(currentPosition > scrollHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={` fixed bottom-10 right-[2vw] z-30  bg-black p-2 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleScrollToTop}
    >
      <Image src={'img/upArrow.svg'} width={20} height={50} alt='Logo' />
    </div>
  )
}

export default ScrollToTopButton
