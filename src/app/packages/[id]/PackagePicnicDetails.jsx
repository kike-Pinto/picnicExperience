// app/packages/[id]/PackagePicnicDetails.jsx
'use client'

// import {packagesCardData} from '../../data/packagesData'
import Image from 'next/image'

export default function PackagePicnicDetails({ details }) {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* <div className='bg-gray-100 rounded-lg shadow-lg p-6'> */}
        <div className='p-6 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden'>
          {/* Parte Izquierda: Imagen */}
          <div className='lg:w-1/2 h-64 lg:h-auto relative'>
            <Image
              src={details.images[0]} // Utiliza la primera imagen del array de imagenes
              alt={details.title}
              fill
              style={{ objectFit: 'cover' }}
              className='object-cover'
              priority
            />
          </div>

          {/* Parte Derecha: Detalles */}
          <div className='lg:w-1/2 p-10'>
            <h2 className='text-4xl font-bold mb-4 text-gray-700'>
              {details.title}
            </h2>
            <p className='text-gray-700 mb-6 whitespace-pre-line'>
              {details.description}
            </p>
            <p className='text-gray-900 font-bold mb-6'>
              Price: {details.price}
            </p>

            <h3 className='text-2xl font-semibold mb-4 text-gray-700'>
              Pricing Breakdown:
            </h3>
            <ul className='list-disc list-inside mb-6'>
              {details.pricingBreakdown.map((item, index) => (
                <li key={index} className='text-gray-700'>
                  {item.item}: {item.price}
                </li>
              ))}
            </ul>

            {/* Boton de Reserva */}
            <div>
              <button className='bg-[#C1A691CC] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#c78756cc]'>
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
