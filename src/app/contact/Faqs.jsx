'use client'

import React, { useState } from 'react'
import { Tabs, TabList, TabPanel, Tab as TabItem } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className='bg-orange-50 pb-10 pt-10 '>
      <div className='max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg'>
        <h2 className='text-4xl text-center mb-16 text-[#d49886] font-bold pt-10 '>
          Frequently Asked Questions
        </h2>
        <Tabs>
          <TabList className='mb-10 font-montserrat text-black text-xl font-bold'>
            <TabItem onClick={() => setActiveIndex(null)}>
              Booking Questions
            </TabItem>
            <TabItem onClick={() => setActiveIndex(null)}>
              Location Questions
            </TabItem>
          </TabList>

          <TabPanel>
            <div className='font-montserrat'>
              <h3
                onClick={() => toggleQuestion(1)}
                // className='cursor-pointer pb-10 border-b border-gray-300 text-black font-smibold text-xl'
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                How far in advance do we need to schedule our picnic?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 1 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 1 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    If you want the picnic for a special event, or special date,
                    please book as soon as possible. We are already booking for
                    2021. Weekend dates book up quickly, so if you would like a
                    weekend date, please book at least 2 weeks in advance. We
                    always try our best to schedule you, but sometimes it might
                    not be possible.
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(2)}
                // className='cursor-pointer pb-10 text-black font-smibold text-xl'
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                How do I secure my date?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 2 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 2 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    To secure your date, please fill out the booking form on our
                    contact page. We will email you our proposal and booking
                    confirmation with your desired date, time, and instructions.
                    You will need to sign our contract and pay half of the
                    picnic price. Once that is completed, your date/picnic is
                    secured!
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(3)}
                // className='cursor-pointer pb-10 text-black font-smibold text-xl'
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                What’s your cancellation policy?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 3 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 3 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    After you sign our services and pay half of the picnic, we
                    can reschedule you for another day, but we do not give
                    refunds. Please let us know as soon as possible if your date
                    no longer works.
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(4)}
                // className='cursor-pointer pb-10 text-black font-smibold text-xl'
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                What is the latest time you book picnics in the day?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 4 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 4 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    The latest time we book picnics is one hour before sunset,
                    and all picnics end 15 minutes after sunset. Please let us
                    know in advance if you wish to extend your picnic into the
                    nighttime.
                  </p>
                </div>
              )}
            </div>
          </TabPanel>

          <TabPanel>
            <div className='font-montserrat'>
              <h3
                onClick={() => toggleQuestion(5)}
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                How far in advance do we need to schedule our picnic?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 5 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 5 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    If you want the picnic for a special event, or special date,
                    please book as soon as possible. We are already booking for
                    2021. Weekend dates book up quickly, so if you would like a
                    weekend date, please book at least 2 weeks in advance.
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(6)}
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                How do I secure my date?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 6 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 6 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    To secure your date, please fill out the booking form on our
                    contact page. We will email you our proposal and booking
                    confirmation with your desired date, time, and instructions.
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(7)}
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                What’s your cancellation policy?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 7 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 7 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    After you sign our services, and pay half of the picnic, we
                    can reschedule you for another day, but we do not give
                    refunds.
                  </p>
                </div>
              )}

              <h3
                onClick={() => toggleQuestion(8)}
                className={`cursor-pointer flex justify-between items-center ${
                  activeIndex === 1 ? '' : 'border-b'
                } border-gray-300 text-gray-500 font-semibold mb-10 pb-4`}
              >
                What is the latest time you book picnics in the day?
                <span
                  className={`transform transition-transform ${
                    activeIndex === 8 ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  ▼
                </span>
              </h3>
              {activeIndex === 8 && (
                <div className='border-b border-gray-300 mb-6 pb-6'>
                  <p className='mb-10 text-gray-900'>
                    The latest time we book picnics are one hour before sunset,
                    and all picnics end 15 minutes after sunset.
                  </p>
                </div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
