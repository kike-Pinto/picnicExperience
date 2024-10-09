'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules' // Import Swiper's autoplay module
import 'swiper/swiper-bundle.css' // Import Swiper styles
import 'swiper/css/autoplay' // Import specific module styles
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/images/picnicCanasto.jpg',
  '/images/friendPicnic.jpg',
  '/images/couplePicnic2.jpg',
]

export default function HomePage() {
  return (
    <section className='relative h-[900px] flex items-center justify-center'>
      {/* Swiper for sliding background images */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000 }}
        speed={4000}
        className='absolute inset-0 w-full h-full'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full h-full'>
              <Image
                src={image}
                alt={`slide ${index + 1}`}
                layout='fill'
                objectFit='cover'
                className=''
                priority
              />
              {/* overlay for better text readability */}
              <div className='absolute inset-0 bg-black opacity-10'></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contenido principal */}
      {/* <div className='relative z-10 text-center px-4 mt-20'> */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10 text-center mt-40'>
        <h1 className='text-6xl sm:text-6xl font-indie_flower font-bold text-white mb-4'>
          Experiences Through Picnics
        </h1>
        <p
          className='font-montserrat text-lg sm:text-xl text-white max-w-2xl mx-auto my-20 mb-20 leading-relaxed opacity-70'
          style={{ lineHeight: '2' }}
        >
          Offers the ultimate picnic experience - where curated design meets
          chef-inspired charcuterie and you do not have to lift a finger! We
          take care of all the details: we scout the perfect location, bring the
          food, and set it up to look amazing. Plus, we clean everything up when
          you are done so you can literally walk off into the sunset.
        </p>
        <Link
          href='/packages'
          className='bg-orange-400 hover:bg-orange-500 text-white font-bold px-24 py-5 rounded-full text-lg transition'
        >
          Ver Picnics
        </Link>
      </div>
    </section>
  )
}
