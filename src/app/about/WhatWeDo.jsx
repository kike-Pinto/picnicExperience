// import Image from 'next/image'

import Link from 'next/link'

export default function WhatWeDo() {
  return (
    <section className='relative bg-orange-50 py-40'>
      <div
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{ backgroundImage: 'url(images/celebrating.png)' }}
      ></div>

      {/* Capa translúcida detrás del contenido */}
      <div className='absolute inset-0 bg-black opacity-40 z-0'></div>

      <div className='relative z-10 text-center mt-10'>
        <h2 className='text-8xl text-zinc-100 font-indie_flower pb-20'>
          What We Do
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-10'>
          <div className='bg-[#ffffff66] border-2 border-white hover:bg-transparent rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300'>
            <h3 className='text-9xl text-white font-dancing_script mt-20 transform scale-y-125'>
              01
            </h3>
            <hr className='border-t-4 border-white my-20 mx-28' />
            <p className='text-3xl font-indie_flower mt-[-40px]'>Date Night</p>
          </div>
          <div className='bg-[#ffffff66] border-2 border-white hover:bg-transparent rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300'>
            <h3 className='text-9xl text-white font-dancing_script mt-20 transform scale-y-125'>
              02
            </h3>
            <hr className='border-t-4 border-white my-20 mx-28' />
            <p className='text-3xl font-indie_flower mt-[-40px]'>Birthday</p>
          </div>
          <div className='bg-[#ffffff66] border-2 border-white hover:bg-transparent rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300'>
            <h3 className='text-9xl text-white font-dancing_script mt-20 transform scale-y-125'>
              03
            </h3>
            <hr className='border-t-4 border-white my-20 mx-28' />
            <p className='text-3xl font-indie_flower mt-[-40px]'>Weddings</p>
          </div>
          <div className='bg-[#ffffff66] border-2 border-white hover:bg-transparent rounded-lg p-6 shadow-lg hover:scale-105 transition duration-300'>
            <h3 className='text-9xl text-white font-dancing_script mt-20 transform scale-y-125'>
              04
            </h3>
            <hr className='border-t-4 border-white my-20 mx-28' />
            <p className='text-3xl font-indie_flower mt-[-40px]'>
              Bachelerottes
            </p>
          </div>
        </div>
        {/* View Packages Button */}
        <div className='mt-40'>
          <Link
            href='/packages'
            className='bg-[#ffffff66] border-2 border-white text-white font-semibold font-dancing_script text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-transparent duration-300'
          >
            View Packages
          </Link>
        </div>
      </div>
    </section>
  )
}
