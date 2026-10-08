import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Heritage from './components/Heritage.jsx'
import Experience from './components/Experience.jsx'
import MembershipCTA from './components/MembershipCTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Heritage />
        <Experience />
        <MembershipCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
