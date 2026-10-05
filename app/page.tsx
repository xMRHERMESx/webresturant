import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import IngredientExplorer from '@/components/IngredientExplorer'
import ExtraordinaryPizza from '@/components/ExtraordinaryPizza'
import FireSection from '@/components/FireSection'
import DiningSection from '@/components/DiningSection'
import MenuPreview from '@/components/MenuPreview'
import Locations from '@/components/Locations'
import PrivateDining from '@/components/PrivateDining'
import Reservation from '@/components/Reservation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <IngredientExplorer />
        <ExtraordinaryPizza />
        <FireSection />
        <DiningSection />
        <MenuPreview />
        <Locations />
        <PrivateDining />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
