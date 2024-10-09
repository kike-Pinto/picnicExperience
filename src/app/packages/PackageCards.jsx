'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { packagesCardData } from '../data/packagesData'

export default function PackageCards() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [showAll, setShowAll] = useState(false)

  const handleLoadMore = () => {
    if (visibleCount >= packagesCardData.length) {
      setVisibleCount(6)
      setShowAll(false)
    } else {
      setVisibleCount((prevCount) => prevCount + 3)
      setShowAll(true)
    }
  }

  const handleShowLess = () => {
    setVisibleCount(6)
    setShowAll(false)
  }

  return (
    <section className='py-40 bg-orange-50'>
      <h2 className='text-7xl text-center font-bold mb-20 text-[#d49886] font-dancing_script'>
        Our Packages
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
        {packagesCardData.slice(0, visibleCount).map((pkg) => (
          <div
            key={pkg.id}
            className='bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 mb-10'
          >
            <Image
              src={pkg.image}
              alt={pkg.title}
              width={400}
              height={300}
              className='w-full object-cover rounded-lg mb-4'
            />
            <h3 className='text-gray-700 font-montserrat font-semibold mb-4'>
              {pkg.title}
            </h3>
            <p className='text-gray-600 mb-4 font-poppins'>{pkg.description}</p>
            <p className='text-gray-600 font-bold font-poppins'>
              Starting at: {pkg.price}
            </p>
            <p className='text-gray-700'>For up to 8 people</p>
            <p className='text-gray-600 mb-10'>
              + ${pkg.additionalCost} per additional person
            </p>
            <div className='mb-10 mt-20'>
              <Link
                href={`/packages/${pkg.id}`}
                passHref
                className='bg-[#C1A691CC] border-2 border-white text-white font-semibold font-dancing_script text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#c78756cc] duration-300'
              >
                Reserve
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < packagesCardData.length && (
        <div className='text-center mt-20'>
          <button
            onClick={handleLoadMore}
            className='bg-[#C1A691CC] border-2 border-white text-white font-semibold font-dancing_script text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#c78756cc] duration-300'
          >
            Ver mas
          </button>
        </div>
      )}
      {showAll && visibleCount >= packagesCardData.length && (
        <div className='text-center mt-20'>
          <button
            onClick={handleShowLess}
            className='bg-[#C1A691CC] border-2 border-white text-white font-semibold font-dancing_script text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#c78756cc] duration-300'
          >
            Ver menos
          </button>
        </div>
      )}
    </section>
  )
}
