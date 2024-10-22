import './App.css'
import { About } from './Componenets/About'
import { Hero } from './Componenets/Hero'
import Navbar from './Componenets/Navbar'
import Contact from './Componenets/Contact'
import { Services } from './Componenets/Services'
import { Footer } from './Componenets/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { NotFound } from './Componenets/NotFound'

function App() {

  return (
    <div>
  <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/hero' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services/>} />
      <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App
