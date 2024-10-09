'use client'

import { useState } from 'react'

export default function GitCardForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    recipientFirstName: '',
    recipientLastName: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    shippingOption: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    // Perfomr checkout actions here
  }

  return (
    <div className='bg-orange-50 font-montserrat pb-20'>
      {/* Gift Certificate Details */}
      <div className='mb-20 pt-10 '>
        <div className='flex flex-col items-center justify-center text-center mb-10'>
          <h1 className='text-6xl font-bold mb-8 text-black font-indie_flower mt-10'>
            Gift Certificate $249 for the holidays!
          </h1>
        </div>

        <div className='max-w-3xl mx-auto'>
          <p className='text-black pl-20'>
            <strong className='list-disc text-black'>
              Redemption Entitlement:
            </strong>
            <br />
          </p>
          <p className='text-black pl-20 mb-10'>
            This gift certificate entitles the recipient to a delightful picnic
            experience for up to 6 guests, with a maximum value of $315.00.
          </p>

          <div className='mb-4 text-black pl-20'>
            <strong>Exclusions:</strong>
            <ul className='list-disc ml-5'>
              <li>
                This certificate cannot be applied to events with 7 guests or
                more.
              </li>
              <li>Excludes professional photography sessions.</li>
              <li>
                Guests must be in our service area to redeem Picnic Experience.
              </li>
            </ul>
          </div>
          <p className='mb-4 text-black pl-20'>
            <strong>Validity:</strong> <br /> This gift certificate holds no
            expiration date, ensuring the recipient can enjoy their picnic
            experience at their convenience.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className='bg-orange-50'>
        <form
          onSubmit={handleSubmit}
          className='max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md pb-20'
        >
          <h1 className='text-2xl font-bold mb-4 text-black'>
            Gift Certificate Information
          </h1>
          <p className='text-black'>
            Let’s collect some information for your gift card
          </p>

          {/* Name Fields */}
          <p className='mt-4 font-semibold text-black mb-2'>
            Name{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <p className='text-sm text-gray-500 mb-6'>Enter your name (From:)</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4'>
            <div>
              <label className='block mb-2 text-gray-500'>First Name</label>
              <input
                type='text'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2'
              />
            </div>
            <div>
              <label className='block mb-2 text-gray-500'>Last Name</label>
              <input
                type='text'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2'
              />
            </div>
          </div>

          {/* Recipient name */}
          <p className='mt-10 font-semibold text-black mb-2'>
            Recipient name{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <p className='text-sm text-gray-500 mb-6'>Recipient name (To:)</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4'>
            <div>
              <label className='block mb-2 text-gray-500'>First Name</label>
              <input
                type='text'
                name='recipientFirstName'
                value={formData.recipientFirstName}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2'
              />
            </div>
            <div>
              <label className='block mb-2 text-gray-500'>Last Name</label>
              <input
                type='text'
                name='recipientLastName'
                value={formData.recipientLastName}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2'
              />
            </div>
          </div>

          {/* Shipping address */}
          <p className='mt-10 font-semibold text-black mb-2'>
            Shipping address{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <p className='text-sm text-gray-500 mb-3'>
            Select shipping recipient
          </p>
          <div className='mb-4'>
            <select
              name='shippingOption'
              value={formData.shippingOption}
              onChange={handleChange}
              className='w-full border-gray-300 border-2 rounded-md p-2 text-gray-500'
            >
              <option value='' className=''>
                Select an option
              </option>
              <option value='self'>
                Send to me and I will hand deliver gift certificate
              </option>
              <option value='recipient'>Send directly to recipient</option>
            </select>
          </div>

          {/* Address Fields */}
          <p className='mt-10 font-semibold text-black mb-2'>
            Address{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <p className='text-sm text-gray-500 mb-3'>Country</p>
          <div className='mb-4'>
            <select
              name='country'
              value={formData.country}
              onChange={handleChange}
              className='w-full border-gray-300 border-2 rounded-md p-2 text-gray-500'
            >
              <option value=''>Select a country</option>
              <option value='United States'>United States</option>
              <option value='Australia'>Australia</option>
              <option value='New Zealand'>New Zealand</option>
            </select>
          </div>
          <p className='mt-10 font-semibold text-black mb-2'>
            Address Line 1{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <input
            type='text'
            name='addressLine1'
            value={formData.addressLine1}
            onChange={handleChange}
            className='w-full border-gray-300 border-2 rounded-md p-2 text-gray-500'
          />
          <p className='mt-10 font-semibold text-black mb-2'>
            Address Line 2{' '}
            <span className='text-sm text-gray-500 font-light'>(required)</span>
          </p>
          <input
            type='text'
            name='addressLine2'
            value={formData.addressLine2}
            onChange={handleChange}
            className='w-full border-gray-300 border-2 rounded-md p-2 text-gray-500'
          />

          {/* City, State, ZIP */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 mt-10'>
            <div>
              <label className='mt-10 font-semibold text-black mb-2'>
                City{' '}
                <span className='text-sm text-gray-500 font-light'>
                  (required)
                </span>
              </label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2 mt-2 text-gray-500'
              />
            </div>
            <div>
              <label className='mt-10 font-semibold text-black mb-2'>
                State{' '}
                <span className='text-sm text-gray-500 font-light'>
                  (required)
                </span>
              </label>
              <input
                type='text'
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2 mt-2 text-gray-500'
              />
            </div>
            <div>
              <label className='mt-10 font-semibold text-black mb-2'>
                ZIP Code{' '}
                <span className='text-sm text-gray-500 font-light'>
                  (required)
                </span>
              </label>
              <input
                type='text'
                name='zipCode'
                value={formData.zipCode}
                onChange={handleChange}
                className='w-full border-gray-300 border-2 rounded-md p-2 mt-2 text-gray-500'
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='text-right mt-28'>
            <button
              type='submit'
              className='bg-[#f8a5a566] border-2 border-white text-black font-semibold font-indie_flower text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#f6737366] duration-300'
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
