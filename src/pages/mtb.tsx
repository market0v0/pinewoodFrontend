import { GetallBike, GetcategoryBike } from '@/api/bikesAPI'
import CardHolder from '@/components/cardHolder'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SlideShow from '@/components/slideshow'
import NavBar from '@/components/navbar'

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
const Mtb: React.FC = () => {
  const [Bikes, setBikes] = useState<Bikes[]>([])

  useEffect(() => {
    const fetchBikes = async () => {
      const response = await GetcategoryBike('mountain')
      setBikes(response)
    }

    fetchBikes()
  }, [])

  return (
    <div className='flex min-h-screen flex-col bg-[#090909]'>
      <CardHolder categoryImg={'img/MOUNTAINTxt.svg'} category={'mountain'} />
    </div>
  )
}

export default Mtb
