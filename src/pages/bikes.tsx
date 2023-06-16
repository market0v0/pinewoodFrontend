import { GetallBike } from '@/api/bikesAPI'
import CardHolder from '@/components/cardHolder'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import SlideShow from '@/components/slideshow'
import NavBar from '@/components/navbar'
// Dummy data

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
const Bikes: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#090909]'>
      <CardHolder category={'all'} categoryImg={'img/BIKESTxt.svg'} />
    </div>
  )
}

export default Bikes
