'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function PackageCarousel({ title, images }) {
  // Verificación adicional para asegurar que 'images' es un array
  if (!images || !Array.isArray(images) || images.length === 0) {
    return (
      <p className='text-center text-gray-500'>
        No images available for this package.
      </p>
    )
  }
  return (
    <section className='relative h-[900px] flex items-center justify-center'>
      {/* Swiper para imágenes deslizantes */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 8000 }} // 8 segundos
        speed={1000} // Velocidad de transición
        className='absolute inset-0 w-full h-full'
      >
        {images.slice(0, 3).map(
          (
            image,
            index // Mostrar solo 3 imágenes
          ) => (
            <SwiperSlide key={index}>
              <div className='relative w-full h-full'>
                <Image
                  src={image}
                  alt={`slide ${index + 1}`}
                  fill // 'layout' está deprecado en versiones recientes
                  style={{ objectFit: 'cover' }}
                  className=''
                  priority
                />
                {/* Overlay para mejor legibilidad del texto */}
                <div className='absolute inset-0 bg-black opacity-10'></div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* Contenido Principal */}
      <div className='absolute inset-0 flex flex-col items-center justify-center z-10 text-center mt-40 px-4'>
        <h1 className='text-6xl sm:text-6xl font-indie_flower font-bold text-white mb-4'>
          {title}
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
      </div>
    </section>
  )
}
