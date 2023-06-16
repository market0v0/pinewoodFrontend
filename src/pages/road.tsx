import { GetallBike, GetcategoryBike } from '@/api/bikesAPI'
import CardHolder from '@/components/cardHolder'
import React, { useEffect, useState } from 'react'

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
const Road: React.FC = () => {
  const [Bikes, setBikes] = useState<Bikes[]>([])

  useEffect(() => {
    const fetchBikes = async () => {
      const response = await GetcategoryBike('road')
      setBikes(response)
    }

    fetchBikes()
  }, [])

  return (
    <div className='flex min-h-screen flex-col bg-[#090909]'>
      <CardHolder categoryImg={'img/ROADTxt.svg'} category={'road'} />
    </div>
  )
}

export default Road
