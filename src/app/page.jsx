// import About from '../components/About'
import Home from '../components/HomePage'
import Destacadas from '../components/Destacadas'
import BookingHome from '../components/BookingHome'
import JoinUs from '../components/JoinUs'
import Testimonials from '../components/testimonials'

export default function HomePage() {
  return (
    <>
      <section>
        <Home />
      </section>
      <BookingHome />
      <Destacadas />
      <JoinUs />
      <Testimonials />
    </>
  )
}
