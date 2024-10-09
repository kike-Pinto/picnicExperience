export default function ContactForm() {
  return (
    <section className='bg-orange-50 pb-10 pt-10'>
      <form className='max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-6xl font-bold mb-8 text-[#d49886] font-indie_flower text-center mt-10'>
          Book Your Picnic Today !
        </h2>

        {/* Name Fields */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-black font-montserrat'>
          <div>
            <label className='block mb-2'>First Name</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
          <div>
            <label className='block mb-2'>Last Name</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-black font-montserrat'>
          <div>
            <label className='block mb-2'>Email</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
          <div>
            <label className='block mb-2'>Phone</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
        </div>

        {/* Event Date and Number of Guests */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-black font-montserrat'>
          <div>
            <label className='block mb-2'>Event Date</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
          <div>
            <label className='block mb-2'>Number of Guests</label>
            <select className='w-full border-gray-300 border rounded-md p-2'>
              <option value=''>Select number of guests</option>
              <option value=''>3</option>
              <option value=''>4</option>
              <option value=''>5</option>
              <option value=''>6</option>
              <option value=''>7</option>
              <option value=''>8</option>
            </select>
          </div>
        </div>

        {/* Package and Location */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-black font-montserrat'>
          <div>
            <label className='block mb-2'>Desired Package</label>
            <select className='w-full border-gray-300 border rounded-md p-2'>
              <option value=''>Select desired package</option>
              <option value=''>choice 1</option>
              <option value=''>choice 2</option>
              <option value=''>choice 3</option>
            </select>
          </div>
          <div>
            <label className='block mb-2'>Location</label>
            <input
              type='text'
              className='w-full border-gray-300 border rounded-md p-2'
            />
          </div>
        </div>

        {/* Event Description */}
        <div className='mb-8 text-black font-montserrat'>
          <label className='block mb-2'>Tell us about your event</label>
          <textarea className='w-full border-gray-300 border-2 rounded-md p-8'></textarea>
        </div>

        {/* Submit Button */}
        <div className='text-right mt-28'>
          <button
            type='submit'
            className='bg-[#f8a5a566] border-2 border-white text-black font-semibold font-indie_flower text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-[#f6737366] duration-300'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
