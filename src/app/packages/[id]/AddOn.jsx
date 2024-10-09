import { useState } from 'react'

const addOnsData = [
  { id: 1, name: '1 Additional Guest', price: 30 },
  { id: 2, name: '2 Additional Guests', price: 60 },
  { id: 3, name: '4 Additional Guests', price: 120 },
  { id: 4, name: 'Bistro Table and 2 Chairs', price: 39 },
  {
    id: 5,
    name: "Bottle Service (Doesn't include cost of wine which is purchased seperatly)",
    price: 34,
  },
  { id: 6, name: 'Cabana', price: 39 },
  {
    id: 7,
    name: 'Celebration Bundle-Cake (4-6 People), Sparkling French Lemonade, and one pint of Two Roosters Ice Cream.',
    price: 49,
  },
  { id: 8, name: 'Croquet', price: 5 },
  {
    id: 9,
    name: 'Fresh Bouquet of Flowers (please note any specific flower requests in reservation)',
    price: 59,
  },
  { id: 10, name: 'KUBB Lawn Game', price: 5 },
  { id: 11, name: 'Large Jenga', price: 5 },
  { id: 12, name: 'Professional Photo Shoot', price: 225 },
  { id: 13, name: 'Reclaimed Wood Dining Table', price: 99 },
  { id: 14, name: 'Sling Chairs x2', price: 19 },
  { id: 15, name: 'Sling Chairs x4', price: 39 },
  { id: 16, name: 'Sparkling French Lemonade', price: 10 },
]

export default function AddOn() {
  const [showAll, setShowAll] = useState(false)

  const visibleAddOns = showAll
    ? addOnsData
    : addOnsData.slice(0, Math.ceil(addOnsData.length / 2))

  const handleToggleShowMore = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='bg-orange-50'>
      <div className='container mx-auto py-6 '>
        <h2 className='text-2xl font-bold mb-8 text-gray-700 font-montserrat'>
          Add To appoitment
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {visibleAddOns.map((addOn) => (
            <div
              key={addOn.id}
              className={`bg-white p-4 rounded-lg shadow-md flex items-start ${
                addOn.name.length > 50 ? 'md:col-span-2' : ''
              }`}
            >
              <input type='checkbox' className='mr-4' />
              <div className='text-gray-700'>
                <p className='font-semibold'>{addOn.name}</p>
                <p className='text-gray-500'>+ ${addOn.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleToggleShowMore}
          className='bg-[#C1A691CC] text-white font-semibold py-3 px-6 mt-6 rounded-lg shadow-lg hover:bg-[#c78756cc]'
        >
          {showAll ? 'Show Fewer Add-ons' : 'Show More Add-ons'}
        </button>
      </div>
    </div>
  )
}
