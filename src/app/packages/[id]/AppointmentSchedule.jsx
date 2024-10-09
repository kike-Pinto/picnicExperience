'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' // Primero
import '../../../styles/globals.css'

export default function AppointmentSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Horarios disponibles
  const availableTimes = [
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ]

  // Formatear la fecha seleccionada (Ej: Thrusday, October 10)
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className='bg-orange-50 pt-20'>
      <div className='container mx-auto py-10 px-4'>
        <div className='flex flex-col lg:flex-row gap-20 rounded-lg shadow-lg overflow-hidden'>
          {/* Parte Izquierda: Calendario */}
          <div className='lg:w-1/2 p-6 flex justify-center'>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className='custom-calendar' // Clase CSS personalizada
            />
          </div>

          {/* Parte Derecha: Detalles */}
          <div className='lg:w-1/2 p-6 flex flex-col justify-center'>
            <h1 className='text-3xl font-bold mb-4 text-gray-700 font-montserrat'>
              {formatDate(selectedDate)}
            </h1>
            <h3 className='text-lg font-semibold text-gray-600 mb-6'>
              Time Zone: <span>Eastern Time (GMT-04:00)</span>
            </h3>

            {/* Horarios Disponibles */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  className='bg-[#ffffff66] border-2 border-white text-gray-700 font-semibold font-montserrat text-2xl py-4 px-16 rounded-lg shadow-lg hover:bg-gray-200 duration-300'
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
