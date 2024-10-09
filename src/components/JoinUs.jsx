'use client'

import { useState } from 'react'
// import Link from 'next/link'

export default function JoinUs() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui puedes agregar la logica para manejar en envio del email
    console.log('Email enviado: ${email}')
    setEmail('') // Limpiar el input despues de enviar
  }

  return (
    <section className='bg-[#F9F9F9] py-60 mb-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-6xl font-black mb-6 text-[#d49886] font-dancing_script'>
          Join Us
        </h2>
        <p className='text-xl mb-8 text-[#000000] font-montserrat'>
          Join our email list and get access to special deals exclusive to our
          subscribers.
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:flex-row justify-center gap-2 mb-8'
        >
          <input
            type='email'
            value={email}
            placeholder='Email Address'
            onChange={(e) => setEmail(e.target.value)}
            className='px-8 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-96 font-montserrat text-base'
            required
          />
          <button
            type='submit'
            className='bg-orange-600 hover:bg-orange-700 text-white font-montserrat py-2 px-4 rounded-3xl sm:w-96 transition duration-300'
          >
            Get Exclusive Offers
          </button>
        </form>
        <p className='text-gray-600 text-sm font-mono'>
          We don’t like spam either! We will not sell your information to third
          parties or fill up your inbox.
        </p>
      </div>
    </section>
  )
}
