import { Navigation } from './components/Navigation'
import { Informativo } from './components/Informativo'
import { Productos } from './components/Productos'
import { Contactos } from './components/Contactos'
import { Footer } from './components/Footer'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Navigation />
      <section className='container-app'>
        <Routes>
          <Route exact path='/' element={<Informativo />} />
          <Route exact path='/productos' element={<Productos />} />
          <Route exact path='/contactos' element={<Contactos />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  )
}

export default App
