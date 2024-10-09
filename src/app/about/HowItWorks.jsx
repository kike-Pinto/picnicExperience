export default function HowItWorks() {
  return (
    <section className='py-40 px-6 bg-orange-50'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-6xl font-bold mb-8 text-[#d49886] font-dancing_script'>
          How It Works
        </h2>
        <p className='text-lg text-gray-700 mb-24 font-montserrat leading-10'>
          Lorem Ipsum.. If you’re looking to start planning your next
          celebration, you’ve come to the right place. I’m happy to work with
          you and ensure that your event is everything you’ve imagined. With the
          following services I offer, you can put your mind at ease knowing that
          every last detail has been taken care of.
        </p>

        {/* <h3 className='text-2xl font-semibold mb-8 text-[#d49886] font-montserrat'>
          Some Questions:
        </h3> */}

        <div className='text-left space-y-6 font-montserrat'>
          <div className=''>
            <h4 className='text-[#d49886] mb-4 text-xl'>
              How do I add a new question & answer?
            </h4>
            <p className='text-gray-500 mb-4'>
              To add a new FAQ follow these steps:
            </p>
            <ol className='list-decimal list-inside text-gray-500 mb-16'>
              <li>Click &quot;Manage FAQs&quot; button</li>
              <li>
                From your site’s dashboard, you can add, edit and manage all
                your questions and answers
              </li>
              <li>Each question and answer should be added to a category</li>
              <li>Save and publish.</li>
            </ol>
          </div>

          <div className='pb-10'>
            <h4 className='text-[#d49886] mb-4 text-xl'>
              What can you expect when you book with us?
            </h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, dolore te feugait
              nulla facilisi.
            </p>
          </div>

          <div className='pb-10'>
            <h4 className='text-[#d49886] mb-4 text-xl'>Where do we set up?</h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, dolore te feugait
              nulla facilisi.
            </p>
          </div>

          <div className='pb-10'>
            <h4 className='text-[#d49886] mb-4 text-xl'>
              What&apos;s included?
            </h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, dolore te feugait
              nulla facilisi.
            </p>
          </div>

          <div className='pb-10'>
            <h4 className='text-[#d49886] mb-4 text-xl'>
              What&apos;s your cancellation policy?
            </h4>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, dolore te feugait
              nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
