import { GetallBike, GetcategoryBike } from '@/api/bikesAPI'
import CardHolder from '@/components/cardHolder'
import React, { useEffect, useState } from 'react'

interface Bikes {
  model: string
  price: number
  img: string[]
  specs: string
  category: string
  clicks: number
  _id: string
}
const Gravel: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#090909]'>
      <CardHolder categoryImg={'img/GRAVELTxt.svg'} category={'gravel'} />
    </div>
  )
}

export default Gravel
