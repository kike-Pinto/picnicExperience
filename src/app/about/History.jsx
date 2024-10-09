import Image from 'next/image'

const History = () => {
  return (
    <section className='flex flex-col py-40 bg-orange-50 mdl:flex-row'>
      {/* <div className='pl-20 overflow-hidden'> */}
      <div className='w-full mdl:w-1/2 rounded-l-3xl pl-5 xl:pl-32 overflow-hidden mdl:pr-10'>
        <Image
          src='/images/mujerCanasto.jpg' // Asegúrate de tener la imagen en la carpeta public
          alt='Woman Picnic'
          className='w-full rounded-3xl opacity-90'
          width={400} // Ajusta el ancho según sea necesario
          height={200} // Ajusta la altura según sea necesario
          // style={{ width: '500px', height: '700px' }}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      {/* <div className='w-1/2 pl-20'> */}
      <div className='w-full mt-4 md:mt-0 flex flex-col'>
        <h2 className='lg:text-6xl md:text-4xl md:pl-10 text-[#d49886] font-bold font-indie_flower mt-10'>
          It’s nice to meet you
        </h2>
        <p className='text-gray-800 font-montserrat mt-10 md:pl-10 leading-8 text-xl lg:text-lg md:text-base sm:text-sm'>
          Hi, my name is YOUR NAME. A little about me is I’ve always had a deep
          passion for organizing and planning, and I believe that every special
          event deserves to be stunning. With this philosophy in mind, I founded
          YOUR BUSINESS NAME in YEAR FOUNDED.
        </p>
        <p className='text-gray-800 font-montserrat mt-4 md:pl-10 leading-8 text-xl lg:text-lg md:text-base sm:text-sm'>
          Hi, my name is YOUR NAME. I’ve since gained numerous valuable
          connections with industry-leading experts and vendors. I’ll work day
          and night to guarantee that your next event will be filled with
          unforgettable moments.
        </p>
      </div>
    </section>
  )
}

export default History
