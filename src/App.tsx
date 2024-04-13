import AboutUs from './components/AboutUs'
import BenefitsSection from './components/BenefitsSection'
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
    </>
  )
}

export default App
