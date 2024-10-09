// app/packages/[id]/page.jsx
'use client'

import PackageCarousel from './PackageCarousel'
import PackagePicnicDetails from './PackagePicnicDetails'
import { packagesData } from '../../data/packagesData'
import AddOn from './AddOn'
import AppointmentSchedule from './AppointmentSchedule'

export default function PackageDetail({ params }) {
  const { id } = params
  console.log('Package ID:', id) // Para depuración
  const details = packagesData.find((pkg) => pkg.id === id)
  console.log('Package Details:', details)

  if (!details) {
    return <p>Package not found</p> // Puedes personalizar esto para una página 404
  }

  return (
    <>
      <PackageCarousel title={details.title} images={details.images} />
      <PackagePicnicDetails details={details} />
      <AddOn />
      <AppointmentSchedule />
    </>
  )
}
