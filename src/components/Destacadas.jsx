'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Destacadas() {
  return (
    <section className='relative h-auto bg-orange-100 flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
      {/* Imagen de fondo transparente */}
      <div className='absolute inset-0'>
        <Image
          src='/images/picnicCanasto9.jpg'
          alt='Picnic Canasto'
          layout='fill'
          objectFit='cover'
          className='opacity-30 z-0'
        />
      </div>
      {/* Parte Izquierda: Imagenes montadas */}
      {/* <div className='relative w-full mt-10 lg:mt-[-150px] lg:w-5/12 pl-0 xl:pl-20'> */}
      <div className='relative w-full mt-10 flex flex-col items-center lg:mt-[-150px] lg:w-5/12'>
        <div className='relative w-56 h-56 xl:w-72 xl:h-72'>
          <Image
            src='/images/couplePicnic3.jpg'
            alt='Picnic'
            layout='fill'
            objectFit='cover'
            className='rounded-lg shadow-lg'
          />
        </div>
        <div className='absolute w-56 h-56 xl:w-72 xl:h-72 mt-48 ml-60'>
          <Image
            src='/images/picnicCanasto9.jpg'
            alt='Picnic'
            layout='fill'
            objectFit='cover'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
      {/* Parte Derecha: Contenido */}
      <div className='w-full mx-0 lg:w-1/2 px-10 py-6 my-16 lg:px-16 lg:py-0 z-10'>
        <h2
          className='text-4xl lgl:text-5xl font-dancing_script font-bold text-black mb-12 mt-36'
          style={{ lineHeight: '1.3' }}
        >
          We Create Exciting Memories For You
        </h2>
        <p className='text-lg xl:text-xl font-indie_flower font-medium text-gray-800 mb-4'>
          Talk about what it is you do, what makes you unique, etc.... We create
          unforgettable memories in stunning locations with our all-inclusive
          picnic packages. Our packages allow you to host one-of-a-kind
          experiences, stress-free! We handle all of the work, you just show up
          and enjoy! We cover events for...
        </p>
        <p className='text-lg xl:text-xl font-indie_flower font-medium text-gray-800 mb-16'>
          Occasions big and small all deserve festive attention. We offer the
          ideal backdrop for your celebration: no work, no cleanup, and a great
          view. We even offer special decor & dessert options if you really want
          to pull out all the stops. No matter what you are celebrating, we want
          to be part of the action.
        </p>
        <Link
          href='/packages'
          className='inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-16 py-4 rounded-full text-lg transition mb-20'
          style={{ cursor: 'pointer' }}
        >
          View Packages
        </Link>
      </div>
    </section>
  )
}
