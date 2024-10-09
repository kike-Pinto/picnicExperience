'use client'

import Link from 'next/link'

export default function BookingHome() {
  return (
    <section className='flex flex-col items-center justify-center h-[700px] bg-orange-100 p-6'>
      <h2 className='text-5xl font-bold text-center mb-8 text-black font-indie_flower'>
        Let&apos;s get together
      </h2>
      <p className='text-lg text-center mb-8 text-black font-mono'>
        Our calendar is filling up fast! Book your experience with us now!
      </p>
      <Link
        href='/book-now' // Cambia esto a la ruta de tu página de reservas
        className='bg-orange-400 hover:bg-orange-500 text-white font-bold px-24 py-3 rounded-full text-lg transition'
      >
        Book now!
      </Link>
    </section>
  )
}
