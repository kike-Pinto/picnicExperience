import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/outline'

export default function ContactInfo() {
  return (
    <section className=''>
      <div className='bg-orange-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-6 pb-10'>
        {/* Square 1 */}
        <div className='bg-white border-2 border-white rounded-lg p-6 shadow-2xl  mt-20 text-center flex flex-col items-center pb-10'>
          <MailIcon className='w-20 h-20 text-[#d49886]' />
          <h3 className='text-7xl text-[#d49886] font-dancing_script mt-6 mb-6'>
            Email
          </h3>
          <div className='font-poppins text-lg text-gray-700'>
            <p className=' mb-2'>Correo Electrónico</p>
            <p>direccionpagina@correo.com</p>
            <p>www.paginaweb.com</p>
          </div>
        </div>

        {/* Square 2 */}
        <div className='bg-white border-2 border-white rounded-lg p-6 shadow-2xl  mt-20 text-center flex flex-col items-center'>
          <LocationMarkerIcon className='w-20 h-20 text-[#d49886]' />
          <h3 className='text-7xl text-[#d49886] font-dancing_script mt-6 mb-6'>
            Location
          </h3>
          <p className='text-lg text-black font-montserrat mb-2'>
            2921 E 17th St, Building D, Suite #6, Austin, TX 78702
          </p>
        </div>

        {/* Square 3 */}
        <div className='bg-white border-2 border-white rounded-lg p-6 shadow-2xl mt-20 text-center flex flex-col items-center'>
          <PhoneIcon className='w-20 h-20 text-[#d49886]' />
          <h3 className='text-7xl text-[#d49886] font-dancing_script mt-6 mb-6'>
            Call
          </h3>
          <p className='text-lg text-black font-montserrat mb-2'>
            +123 456 78900
          </p>
        </div>
      </div>
    </section>
  )
}
