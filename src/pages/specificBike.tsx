import BikeSpec from '@/components/bikeSpecCard'
import CardHolder from '@/components/cardHolder'
import NavBar from '@/components/navbar'
import React from 'react'
import { useRouter } from 'next/router'

const SpecificBike: React.FC = () => {
  const router = useRouter()

  const data = {
    id: 20,
    title: 'Lancer 3.0 Gravel',
    price: '14,500',
    specs:
      'Frame: Aluminum Alloy 6061 T6 Lite Internal Cable Routing Smooth Welding With Carbon Putty 27.2ST TRIPLE BUTTED| Headset: Sealed Bearing 42/52mm| Fork: Aluminum Alloy 6061 T6 One-Piece Flat Mount LIGHTWEIGHT| Shifter: Shimano Sora R3000 STI 29| Rd: Shimano Sora R3000| Fd: Shimano Sora R3000| Crankset: Prowheel RPL 46/34 170mm HollowTech| Chain: Kmc Tec 9s| Sprocket: Sagmit 9s 11-34t| Hubs: Novatec JoyDisc Alloy 24H 6Bolt QR| Rims: Aluminum 6061 Double Wall 24H| Tire: Innova Stampede 70040c Tanwall| Brake: Tektro Mechanical Flat Disc| Rotor: Tektro 160/160| Handlebar: Alloy Double Butted 420mm| Stem: Alloy 31.8mm 90mm -7 Degrees| Seatpost: Alloy 27.2 2Bolt Type| Saddle: Gravel Saddle| Bartape: Taiwan Seer PU| Size: S-47, M-49|',
    img: './img/lancerGravel.svg'
  }

  const goBack = () => {
    router.back()
  }

  return (
    <div
      className='min-h-screen items-center justify-center font-inter'
      style={{
        background: "url('/img/mtbBG.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='sticky top-0 z-20 bg-black'>
        <NavBar />
      </div>
      <div className='pl-[3vw]'>
        <button className='mt-4 rounded px-3 py-1 text-[.8rem]  text-white' onClick={goBack}>
          {'<  Go Back'}
        </button>
      </div>
      <div className='m-10  flex items-center justify-center pb-4 pt-4 '>
        <div className='w-[80%]'>
          <BikeSpec {...data} />
        </div>
      </div>
    </div>
  )
}

export default SpecificBike
