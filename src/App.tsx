import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import SignatureExperience from './components/SignatureExperience'
import SignatureDishes from './components/SignatureDishes'
import MenuPreview from './components/MenuPreview'
import Gallery from './components/Gallery'
import ChefSection from './components/ChefSection'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import ReservationCTA from './components/ReservationCTA'
import ReservationForm from './components/ReservationForm'
import Location from './components/Location'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <SignatureExperience />
        <SignatureDishes />
        <MenuPreview />
        <Gallery />
        <ChefSection />
        <Experience />
        <Testimonials />
        <ReservationCTA />
        <ReservationForm />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
