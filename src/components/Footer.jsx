'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from '@heroicons/react/outline'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#CC8C7D] text-white py-28 opacity-90'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 mb-40'>
        {/* Parte Izquierda */}
        <div className='text-center sm:text-left'>
          <h3 className='text-3xl font-semibold mb-16 font-montserrat'>
            Contact Us
          </h3>
          <div className='text-lg text-gray-700 font-semibold font-mono'>
            <div className='flex items-center mb-2'>
              <div className='bg-white rounded-full p-2 mr-4'>
                <LocationMarkerIcon className='h-10 w-10 text-[#CC8C7D] hover:text-orange-600' />
              </div>
              <p>2921 St Patrick, Building D, Suite #6, Austin, TX 78702</p>
            </div>
            <div className='flex items-center mb-2'>
              <div className='bg-white rounded-full p-2 mr-4'>
                <PhoneIcon className='h-10 w-10 text-[#CC8C7D] hover:text-orange-600' />
              </div>
              <p>+1 234 567 8900</p>
            </div>
            <div className='flex items-center mb-2'>
              <div className='bg-white rounded-full p-2 mr-4'>
                <MailIcon className='h-10 w-10 text-[#CC8C7D] hover:text-orange-600' />
              </div>
              <p>contact@gmail.com</p>
            </div>
          </div>
          {/* Parte Baja - Redes Sociales */}
          <div className='flex justify-center space-x-4 mt-10'>
            {/* Iconos de Redes Sociales */}
            <Link href='https://facebook.com' target='_blank'>
              <div className='bg-white text-[#CC8C7D] rounded-full p-3 hover:text-orange-600 transition duration-300'>
                <FaFacebookF size={30} />
              </div>
            </Link>
            <Link href='https://instagram.com' target='_blank'>
              <div className='bg-white text-[#CC8C7D] rounded-full p-3  hover:text-orange-600 transition duration-300'>
                <FaInstagram size={30} />
              </div>
            </Link>
            <Link href='https://twitter.com' target='_blank'>
              <div className='bg-white text-[#CC8C7D] rounded-full p-3  hover:text-orange-600 transition duration-300'>
                <FaTwitter size={30} />
              </div>
            </Link>
          </div>
        </div>

        {/* Parte del Medio */}
        {/* <div className='font-montserrat text-center sm:text-left lg:border-r-4 mr-20'>
          <h3 className='text-3xl font-semibold mb-6'>Quick Links</h3>
          <ul className='text-lg space-y-2 text-gray-700 font-semibold font-mono'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/packages'>Packages</Link>
            </li>
            <li>
              <Link href='/book-now'>Book Now</Link>
            </li>
            <li>
              <Link href='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link href='/gift-cards'>Gift Cards</Link>
            </li>
            <li>
              <Link href='/join-the-team'>Join the Team</Link>
            </li>
            <li>
              <Link href='/faqs'>FAQs</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div> */}
        <div className='font-montserrat text-center sm:text-left lg:border-r-4 mr-20'>
          <h3 className='text-3xl font-semibold mb-16'>Quick Links</h3>
          <ul className='text-lg space-y-2 text-gray-700 font-semibold font-mono'>
            {[
              'Home',
              'About',
              'Packages',
              'Book Now',
              'Gallery',
              'Gift Cards',
              'Join the Team',
              'FAQs',
              'Contact',
            ].map((link) => (
              <li
                key={link}
                className='transition duration-300 hover:text-white'
              >
                <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Parte Derecha */}
        <div className='font-montserrat text-center sm:text-left '>
          <Link
            href='/'
            className='flex justify-center sm:justify-start items-center gap-2 mb-4 -mt-10'
          >
            <Image
              src='/images/logoPicnicFooter.png'
              alt='Logo'
              width={120}
              height={120}
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className='text-orange-200 hover:text-orange-400 font-indie_flower text-4xl'>
              Picnic
            </span>
            <span className='text-amber-700 hover:text-amber-900 font-indie_flower text-4xl'>
              Experience
            </span>
          </Link>
          <p className='mb-4 text-gray-800'>
            Join to receive discounts, articles, latest news and events.
          </p>
          <form className='flex flex-col sm:flex-row gap-2 mb-4 font-montserrat'>
            <input
              type='email'
              placeholder='Email Address'
              className='px-8 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-96'
            />
            <button
              type='submit'
              className='bg-orange-600 hover:bg-orange-700 text-white py-3 px-10 text-[17px] rounded-3xl sm:w-60'
            >
              Join
            </button>
          </form>
          <p className='text-slate-200 text-sm'>
            We don’t like spam either! Your email will not be sold to 3rd party
            marketers and we will not fill up your inbox.
          </p>
        </div>
      </div>

      {/* Parte Baja */}
      <div className='text-center mt-10 font-semibold font-mono text-lg'>
        © 2024-2028 | Amazing Experiences Through Picnics
      </div>
    </footer>
  )
}
