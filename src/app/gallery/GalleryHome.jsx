'use client'

import Image from 'next/image'

export default function GalleryHome({ title, backgroundImage }) {
  return (
    <section className='relative flex flex-col items-center p-8 min-h-screen overflow-hidden'>
      <div className='container mx-auto text-center'>
        {/* Imagen de fondo usando Image de Next.js */}
        <div className='absolute inset-0 w-full h-full z-0'>
          <Image
            src={backgroundImage} // Reemplaza con la ruta de tu imagen
            alt='Background'
            layout='fill' // Hace que la imagen llene el contenedor
            objectFit='cover' // Asegura que la imagen cubra el área
            className='opacity-50'
          />
        </div>

        {/* Contenido encima de la imagen*/}
        <div className='relative z-10 bg-opacity-50 p-6 rounded-lg flex flex-col items-center justify-center text-center max-w-3xl min-h-screen mx-auto'>
          <h1 className='text-7xl mdl:text-9xl text-slate-200 mb-10 font-dancing_script mt-28'>
            {title}
          </h1>
          <p className='text-lg mb-20 font-montserrat leading-10'>
            Offers the ultimate picnic experience - where curated design meets
            chef-inspired charcuterie. We take care of all the details—location
            scouting, food preparation, and cleanup—so you can enjoy your event
            without lifting a finger.
          </p>

          {/* Flecha hacia abajo */}
          <div className='relative z-20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-12 h-12 text-white animate-bounce cursor-pointer'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
