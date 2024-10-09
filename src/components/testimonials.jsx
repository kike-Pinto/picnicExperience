'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules' // Importar el módulo de autoplay
import 'swiper/swiper-bundle.css' // Importar estilos de Swiper
import 'swiper/css/autoplay' // Importar estilos del módulo específico

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/perfil.jpg',
    comment: 'This service was amazing! I had a fantastic experience.',
    stars: 5,
  },
  {
    name: 'Jane Smith',
    image: '/images/perfil2.jpg',
    comment: 'Absolutely loved it! Highly recommend.',
    stars: 5,
  },
  {
    name: 'Alice Johnson',
    image: '/images/perfil3.jpg',
    comment: 'A wonderful day out with family, great memories!',
    stars: 5,
  },
  {
    name: 'Bob Brown',
    image: '/images/perfil4.jpg',
    comment: 'The best picnic I’ve ever had! Thank you!',
    stars: 5,
  },
  {
    name: 'Charlie White',
    image: '/images/perfil5.jpg',
    comment: 'I will definitely be back for more fun experiences.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className='py-60 bg-orange-50 -mt-28 relative'>
      <div
        className='absolute inset-0 bg-cover opacity-70'
        style={{ backgroundImage: 'url(images/celebrating.png)' }}
      ></div>
      <div className='container mx-auto text-center relative'>
        <h2 className='text-6xl font-black mb-8 -mt-10 text-gray-800 font-indie_flower'>
          What People Are Saying
        </h2>
        <Swiper
          modules={[Autoplay]} // Agregar el módulo de autoplay
          spaceBetween={30}
          slidesPerView={1} // Por defecto 1 slide visible
          loop={true} // Permitir que el carrusel se repita
          autoplay={{ delay: 8000 }} // Configurar autoplay
          speed={400} // Velocidad de transición
          breakpoints={{
            640: {
              slidesPerView: 1, // En pantallas pequeñas 1 slide
            },
            768: {
              slidesPerView: 2, // En pantallas medianas 2 slides
            },
            1024: {
              slidesPerView: 3, // En pantallas grandes 3 slides
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='relative bg-orange-50 rounded-lg shadow-lg p-16 opacity-80 text-center mt-20 testimonial-box flex flex-col justify-between h-[400px] cursor-pointer'>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className='rounded-full mx-auto mb-4 object-cover'
                  style={{ width: '100px', height: '100px' }} // Fijar tamaño
                />
                <p className='text-gray-700 mb-4 font-montserrat line-clamp-3'>
                  {testimonial.comment}
                </p>
                <div className='flex justify-center mb-4'>
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className='text-yellow-500'>
                      ★
                    </span>
                  ))}
                </div>
                <h3 className='font-semibold text-gray-600 font-roboto'>
                  {testimonial.name}
                </h3>
                <div className='absolute left-1/2 transform -translate-x-1/2 bottom-[-10px]'>
                  <div className='w-4 h-4 bg-orange-100 border-l border-r border-b transform rotate-45'></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
