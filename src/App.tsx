import './App.css'
import { About } from './components/About'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Objective } from './components/Objective'
import { People } from './components/People'

function App() {

  return (
    <div className=''>
      
      <Navigation/>

      <Header/>

      <About/>

      <Objective/>

      <Gallery/>

      <People/>

      <FAQ/>

      <Footer/>

    </div>
  )
}

export default App
