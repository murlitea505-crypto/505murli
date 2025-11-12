import './App.css'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Footer from './components/pages/Footer'
import Home from './components/pages/Home'
import ProductListing from './components/pages/ProductListing'
import WhatsAppButton from './components/WhatsAppButton'

function App(){
  return(
    <>
    
    <Navbar/>
    <Home/>
    <About/>
    <ProductListing/>
    <Footer/>
    <WhatsAppButton/>
    </>
  )
}

export default App
