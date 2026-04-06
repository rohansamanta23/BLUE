import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Services from './sections/Services/Services'
import OngoingProjects from './sections/OngoingProjects/OngoingProjects'
import PastProjects from './sections/PastProjects/PastProjects'
import Careers from './sections/Careers/Careers'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />       
      <About />      
      <Services />   
      <OngoingProjects />
      <PastProjects />  
      {/* <Careers />     */}
      <Contact />    
      <Footer />     

    </>
  )
}

export default App