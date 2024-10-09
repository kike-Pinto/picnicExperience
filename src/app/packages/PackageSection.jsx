// import Link from 'next/link'

export default function PackageSection() {
  return (
    <section className='relative flex flex-col items-center p-8 min-h-screen'>
      <div className='container mx-auto text-center'>
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover z-0 opacity-50'
        >
          <source src='images/ParqueMesa.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        {/* Contenido encima del video */}
        <div className='relative z-10 bg-opacity-50 p-6 rounded-lg flex flex-col items-center justify-center text-center max-w-3xl min-h-screen mx-auto'>
          <h1 className='text-7xl mdl:text-9xl text-slate-200 mb-20 font-dancing_script mt-60'>
            Packages
          </h1>
          <p className='text-lg mb-20 font-montserrat leading-10'>
            Offers the ultimate picnic experience - where curated design meets
            chef-inspired charcuterie. We take care of all the details—location
            scouting, food preparation, and cleanup—so you can enjoy your event
            without lifting a finger.
          </p>

          {/* Flecha hacia abajo */}
          <div className='mt-20 relative z-20'>
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
