/* import NavBar from '@/components/navbar' */
import React from 'react'
import Mainframe from './mainframe'
import BikeCards from '@/components/bikeCards'

/* import Files from './Files_upload/Files' */

const Home: React.FC = () => {
  return (
    <div className='h-screen w-full'>
      <Mainframe />
      {/* <BikeCards /> */}
    </div>
  )
}

export default Home
