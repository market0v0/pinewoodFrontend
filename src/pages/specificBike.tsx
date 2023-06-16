import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BikesModel, GetspecBike } from '@/api/bikesAPI'
import BikeSpec from '@/components/bikeSpecCard'
import CardHolder from '@/components/cardHolder'
import NavBar from '@/components/navbar'
import Image from 'next/image'

const SpecificBike: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [bike, setBike] = useState<BikesModel | null>(null)

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await GetspecBike(String(id))
        setBike(response)
      } catch (error) {
        console.error('Error fetching bike:', error)
      }
    }

    if (id) {
      fetchBike()
    }
  }, [id])

  const goBack = () => {
    router.back()
  }

  const extractVideoId = (youtubeLink: string | undefined): string => {
    const match = youtubeLink?.match(/(?:\?v=|\/embed\/|\.be\/)([\w\d_-]+)/i)
    return match ? match[1] : ''
  }

  const youtubeVideoId = extractVideoId(bike?.youtube)

  return (
    <div className='min-h-screen items-center justify-center bg-[#fff] pb-10 font-inter'>
      <div className='sticky top-0 z-20 bg-black'>
        <NavBar />
      </div>
      <div className='pl-[3vw]'>
        <button className='mt-2 rounded px-3 py-1 text-[.8rem] text-black' onClick={goBack}>
          {'<  Go Back'}
        </button>
      </div>
      <div className='md:px-[10vw]'>
        <div className='p-5 text-[1rem] font-bold'>
          {bike?.category.toUpperCase()} / {bike?.model}
        </div>
        <div className='items-center justify-center'>
          {bike ? <BikeSpec {...bike} /> : <p>Loading...</p>}
        </div>

        {/* Embed Facebook Post */}
        {/* {bike?.facebook !== 'none' && (
          <div className='relative mt-8'>
            <h1 className='text-[1.4rem]'>Facebook Post</h1>
            <div className='relative h-0 pb-[56.25%]'>
              <iframe
                src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(
                  bike?.facebook || ''
                )}`}
                title='Facebook Post'
                allow='encrypted-media'
                allowFullScreen
                className='absolute left-0 top-0 h-full w-full'
              />
            </div>
          </div>
        )} */}
        {bike?.facebook !== 'none' && (
          <div
            className='cursor-pointer px-5 py-5 font-bold drop-shadow-lg'
            onDoubleClick={() => window.open(bike?.facebook)}
          >
            <h1 className='text-[1.4rem]'>View on Facebook</h1>
            <div className='relative h-full w-full overflow-hidden '>
              <Image
                src={'img/facebook.svg'}
                alt='Logo'
                width={0}
                height={0}
                sizes='100rem'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}

        {/* Embed YouTube Video */}
        {youtubeVideoId && bike?.youtube !== 'none' && (
          <div className='cursor-pointer px-5 py-5 font-bold drop-shadow-lg'>
            <h1 className='text-[1.4rem]'>YouTube Video</h1>
            <div className='relative h-0 pb-[56.25%] md:pb-[40.25%]'>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title='YouTube Video'
                allowFullScreen
                className='absolute left-0 top-0 h-full w-full'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SpecificBike
