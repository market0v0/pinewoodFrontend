import React, { useEffect, useState } from 'react'
import NavBar from './navbar'
import Image from 'next/image'
import SlideShow from './slideshow'
import { GetallBike, GetcategoryBike } from '@/api/bikesAPI'

interface CardHolderProps {
  categoryImg: string
}
/* interface Bikes {
  model: string
  price: number
  img: string[]
  specs: string
  category: string
  clicks: number
  _id: string
} */
const slides = ['./img/mtbHome.svg', './img/gravelHome.svg', './img/rbHome.svg']
const Topslide: React.FC<CardHolderProps> = ({ categoryImg }) => {
  /*   const [Bikes, setBikes] = useState<Bikes[]>([])
  useEffect(() => {
    const fetchBikes = async () => {
      const data = await GetcategoryBike(category)
      setBikes(data)
    }
    fetchBikes()
  }, [category]) */
  return (
    <div>
      <div>
        <div className='bg-black p-[5%]'>
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
      </div>
    </div>
  )
}

export default Topslide
