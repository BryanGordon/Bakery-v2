import Datos from '../productos.json'
import Pasteleria from '../assets/pasteleria.jpg'
import { useEffect, useState } from 'react'
import { reverse, shuffle } from 'lodash'

export const Informativo = () => {
  const [producto, setProducto] = useState([])
  const [producto2, setProducto2] = useState([])

  useEffect(() => {
    const data = Datos
    const shuProd = shuffle(data)

    const prod = shuProd.pop()
    const prod2 = reverse(shuProd).pop()

    setProducto(prod)
    setProducto2(prod2)
  }, [])

  return (
    <section className='section-about-us'>
      <article>
        <h3>Sobre Nosotros</h3>
        <div className='container-sobre'>
          <img src={Pasteleria} alt='Establecimiento' />
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ducimus tempore blanditiis commodi dicta exercitationem delectus error officiis eaque esse sapiente ea, repudiandae mollitia necessitatibus neque, possimus voluptate itaque explicabo quibusdam ratione et! Repellendus temporibus exercitationem sunt atque quae quas molestiae esse facere fugit, eum similique error. Natus earum expedita repellat accusamus sapiente exercitationem corrupti voluptate nobis laboriosam, nesciunt aliquam nulla, officiis quia! Eius rem necessitatibus quia facere eum asperiores esse ex laudantium alias quis repellat cumque quisquam unde incidunt officia natus velit provident odio debitis ipsum laboriosam, corrupti ea! Consequatur pariatur veritatis reiciendis, incidunt aut illum possimus assumenda aspernatur quia! Itaque vero provident rerum iusto tempora, dolore officiis nisi sequi quibusdam explicabo deserunt vel voluptatibus quasi hic aspernatur eos. Velit laudantium reiciendis perferendis suscipit, qui aspernatur quod consequatur magnam repellat explicabo consequuntur incidunt obcaecati. Aut reprehenderit ipsa sunt omnis veritatis ab quae magni harum ea recusandae unde praesentium cumque iste impedit autem vero error incidunt, ad a? Veniam obcaecati deleniti expedita ducimus quisquam? Aut cupiditate aliquam similique placeat sed deserunt dolorum aliquid necessitatibus, odit dolorem magni possimus laboriosam quisquam dicta labore neque ipsa molestiae expedita architecto quae. Accusamus adipisci necessitatibus facere laudantium voluptatibus aliquid sequi veniam, magnam dolore velit?</p>
        </div>
      </article>
      <article>
        <h3>Algunos productos</h3>
        <div className='container-productos-derecha'>
          <img src={producto.imagen} alt={producto.alt} />
          <div id='info-produ'>
            <label>{producto.nombre_producto}</label>
            <p>{producto.descripcion_producto}</p>
          </div>
        </div>
        <div className='container-productos-izquierda'>
          <img src={producto2.imagen} alt={producto2.alt} />
          <div id='info-produ'>
            <label>{producto2.nombre_producto}</label>
            <p>{producto2.descripcion_producto}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
