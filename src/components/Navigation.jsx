import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

export const Navigation = () => {
  return (
    <section className='container-nav'>
      <nav>
        <div id='logo'>
          <img src={logo} alt='logo-bakery' />
        </div>
        <div id='items'>
          <ul>
            <li>
              <NavLink to='/' className='enlaces'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/productos' className='enlaces'>Productos</NavLink>
            </li>
            <li>
              <NavLink to='/contactos' className='enlaces'>Contactos</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  )
}
