import Link from 'next/link'

export default function PackageStart() {
  return (
    <section className='flex flex-col items-center justify-center h-[700px] bg-orange-100 p-6'>
      <h1 className='text-5xl font-bold text-center mb-8 text-black font-indie_flower'>
        Picnics Start at $289 - 2 hours
      </h1>
      <p className='text-lg text-center mb-8 text-black font-mono'>
        Picnics are for 2 guests and can add up to 4 additional guests for a
        total of 6.
      </p>
      <div className='flex justify-center items-center space-x-2'>
        <p className='text-lg text-black font-mono'>
          Food is included with all picnics. See
        </p>
        <Link
          href='/packages' // Cambia esto a la ruta de tu página de reservas
          className='underline text-lg text-black font-mono'
        >
          Picnic Menu
        </Link>
      </div>
    </section>
  )
}
