import CardHolder from '@/components/cardHolder'
import React from 'react'

// Dummy data
const dummyData = [
  { id: 1, title: 'Card 1', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 2, title: 'Card 2', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 3, title: 'Card 3', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 4, title: 'Card 4', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 5, title: 'Card 5', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 6, title: 'Card 1', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 7, title: 'Card 2', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 8, title: 'Card 3', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 9, title: 'Card 4', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 10, title: 'Card 5', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 11, title: 'Card 1', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 12, title: 'Card 2', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 13, title: 'Card 3', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 14, title: 'Card 4', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 15, title: 'Card 5', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 16, title: 'Card 1', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 17, title: 'Card 2', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 18, title: 'Card 3', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 19, title: 'Card 4', price: '14,500', img: './img/lancerGravel.svg' },
  { id: 20, title: 'Card 5', price: '14,500', img: './img/lancerGravel.svg' }
  // Add more dummy data here...
]
const Road: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#090909]'>
      <CardHolder categoryImg={'img/ROADTxt.svg'} category={'Gravel'} Data={...dummyData} />
    </div>
  )
}

export default Road
