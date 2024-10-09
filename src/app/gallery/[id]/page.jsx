'use client'

import { useState } from 'react'
import Image from 'next/image'
import GalleryHome from '../../gallery/GalleryHome'

const galleryDetails = {
  bachelorette: {
    title: 'Bachelorette',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/mujerPicnic.jpg', '/images/mujerPicnic2.jpg'],
    backgroundImage: '/images/picnicCanasto4.jpg',
  },
  birthday: {
    title: 'Birthday',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/friendPicnic.jpg', '/images/friendPicnic2.jpg'],
    backgroundImage: '/images/picnicCanasto5.jpg',
  },
  datenight: {
    title: 'Date Night',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/couplePicnic2.jpg', '/images/couplePicnic3.jpg'],
    backgroundImage: '/images/picnicCanasto6.jpg',
  },
  girlsnight: {
    title: 'Girls Night',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/friendPicnic4.jpg', '/images/friendPicnic3.jpg'],
    backgroundImage: '/images/picnicCanasto7.jpg',
  },
  party: {
    title: 'Party',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/picnicCanasto2.jpg', '/images/picnicCanasto3.jpg'],
    backgroundImage: '/images/picnicCanasto8.jpg',
  },
  wedding: {
    title: 'Wedding',
    description: 'Una fiesta inolvidable con tus mejores amigas.',
    images: ['/images/picnicCanasto6.jpg', '/images/picnicCanasto5.jpg'],
    backgroundImage: '/images/picnicCanasto9.jpg',
  },
}

const ids = Object.keys(galleryDetails)

export default function GalleryDetails({ params }) {
  // const { id } = params
  // const details = galleryDetails[id]

  // if (!details) return <p>Loading...</p>

  const [currentId, setCurrentId] = useState(params.id || ids[0]) // Estado para el ID actual
  const details = galleryDetails[currentId]

  const handleNext = () => {
    const currentIndex = ids.indexOf(currentId)
    const nextIndex = (currentIndex + 1) % ids.length // Navegar al siguiente ID
    setCurrentId(ids[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = ids.indexOf(currentId)
    const prevIndex = (currentIndex - 1 + ids.length) % ids.length // Navegar al ID anterior
    setCurrentId(ids[prevIndex])
  }

  return (
    <>
      <GalleryHome
        title={details.title}
        backgroundImage={details.backgroundImage}
      />
      <section className='relative bg-orange-50 shadow-md'>
        <div className='relative container mx-auto z-10 px-10 bg-orange-50 shadow-lg rounded-lg p-20 -translate-y-40 '>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {details.images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={details.title}
                  width={300}
                  height={300}
                  className='object-cover w-full h-full rounded-2xl transition-transform transform hover:scale-105'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Botones para navegacion */}
      <div className='flex justify-between items-center bg-orange-50 p-9'>
        <button
          onClick={handlePrev}
          className='bg-[#f8a5a566] border-2 border-white text-black font-semibold font-indie_flower text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#f6737366] duration-300'
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className='bg-[#f8a5a566] border-2 border-white text-black font-semibold font-indie_flower text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#f6737366] duration-300'
        >
          Next
        </button>
      </div>
    </>
  )
}
