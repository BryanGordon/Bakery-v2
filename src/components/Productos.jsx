import Datos from '../productos.json'
import { useEffect, useState } from 'react'

export const Productos = () => {
  const [datos, setDatos] = useState([])

  const obtenerProducto = () => {
    const data = Datos
    setDatos(data)
  }

  useEffect(() => {
    obtenerProducto()
  }, [])

  return (
    <section className='section-productos'>
      <article>
        <h3>Lista de productos</h3>
        {
          datos.map((item) => (
            <div className={item.container} key={item.alt}>
              <img src={item.imagen} alt={item.alt} />
              <div id='info-produ'>
                <label>{item.nombre_producto}</label>
                <p>{item.descripcion_producto}</p>
              </div>
            </div>
          ))
        }
      </article>
    </section>
  )
}
