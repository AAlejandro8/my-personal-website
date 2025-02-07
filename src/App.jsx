import ParticlesComponent from './Components/particles'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Header/>
      <ParticlesComponent className='particles'/>
      <Footer/>
    </>
  )
}

export default App
