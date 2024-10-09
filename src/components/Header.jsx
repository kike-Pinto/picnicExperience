'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Gift Cards', href: '/giftCards' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className='bg-white bg-opacity-90 shadow-md fixed w-full z-50'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Logo */}
        <Link
          href='/'
          className='font-indie_flower flex items-center space-x-0 text-lg lg:text-2xl xl:text-4xl font-bold'
        >
          <div className='w-[100px] h-[100px] overflow-hidden'>
            <Image
              src='/images/logoPicnic5.png'
              alt='Picnic'
              // layout='fill'
              className='brightness-125 hover:brightness-100 transition duration-300'
              width={120}
              height={0}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <span className='text-orange-200 hover:text-orange-400'>Picnic</span>
          <span className='text-amber-700 hover:text-amber-900'>
            Experience
          </span>
        </Link>

        {/* Navegacion (Desktop) */}
        <nav
          className='hidden mdl:flex space-x-2 lg:space-x-6 navigation'
          aria-label='Main Navigation'
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-[#d49886] font-dancing_script text-base lg:text-xl xl:text-3xl font-bold hover:text-[#f95454] ${
                pathname === item.href ? 'text-[#d49886]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Boton "Book Now" */}
        <Link
          href='/book-now'
          className='hidden mdl:block bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-lg transition'
        >
          Book Now
        </Link>

        {/* Menu Movil */}
        <div className='mdl:hidden flex items-center'>
          <button
            onClick={toggleMobileMenu}
            aria-label='Toggle Menu'
            className='text-black focus:outline-none'
          >
            {/* Icono de menu */}
            {isMobileMenuOpen ? (
              <XIcon className='h-8 w-8' />
            ) : (
              <MenuIcon className='h-8 w-8' />
            )}
          </button>
        </div>
      </div>

      {/* Menu Movil (Dropdown) */}
      {isMobileMenuOpen && (
        <nav className='mdl:hidden bg-white shadow-lg'>
          <ul className='flex flex-col space-y-2 p-4'>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block text-[#d49886] hover:text-[#f95454] font-dancing_script mb-4 text-2xl font-semibold ${
                    pathname === item.href ? 'hover:text-[#f95454]' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Boton "Boton Now" en el menu movil */}
            <li>
              <Link
                href='/book-now'
                // className='block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition text-center'
                className='block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition text-center text-2xl font-montserrat'
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
