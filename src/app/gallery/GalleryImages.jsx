import Image from 'next/image'
import Link from 'next/link'

const galleryImages = [
  {
    id: 'bachelorette',
    title: 'Bachelorette',
    image: '/images/mujerPicnic.jpg',
  },
  { id: 'birthday', title: 'Birthday', image: '/images/friendPicnic4.jpg' },
  {
    id: 'datenight',
    title: 'Date Night',
    image: '/images/couplePicnic4.jpg',
  },
  {
    id: 'girlsnight',
    title: 'Girls Night',
    image: '/images/couplePicnic5.jpg',
  },
  { id: 'party', title: 'Party', image: '/images/friendPicnic3.jpg' },
  { id: 'wedding', title: 'Wedding', image: '/images/couplePicnic2.jpg' },
]

export default function GalleryImages() {
  return (
    <section className='py-40 bg-orange-50'>
      {/* Brackground Section */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
        {galleryImages.map((img, index) => (
          <Link key={index} href={`/gallery/${img.id}`} passHref>
            <div className='relative cursor-pointer'>
              <Image
                src={img.image}
                alt={img.title}
                width={400}
                height={400}
                className='w-full h-64 object-cover rounded-lg shadow-lg'
              />
              <div className='absolute inset-x-0 bottom-0 bg-black bg-opacity-50 py-4 text-center rounded-b-lg'>
                <h3 className='text-white text-lg font-semibold'>
                  {img.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
