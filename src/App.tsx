import AboutUs from './components/AboutUs'
import BenefitsSection from './components/BenefitsSection'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection'
import PricingSection from './components/PricingSection'
import TeachersSection from './components/TeachersSection'
import YogaClasses from './components/YogaClassesSection'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <BenefitsSection />
      <AboutUs />
      <YogaClasses/>
      <TeachersSection/>
      <PricingSection/>
      <Footer/>
    </>
  )
}

export default App
