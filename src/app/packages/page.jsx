import PackageSection from './PackageSection'
import PackageCards from './PackageCards'
import PackageStart from './PackageStart'
import PackageAmenities from './PackageAmenities'

export default function PackagePage() {
  console.log('PackagePage loaded') // Agrega esto para depurar
  return (
    <div>
      <PackageSection />
      <PackageStart />
      <PackageCards />
      <PackageAmenities />
    </div>
  )
}
