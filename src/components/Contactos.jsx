export const Contactos = () => {
  return (
    <section className='section-contactos'>
      <article>
        <h3>Ubicacion</h3>
        <div id='maps'>
          <iframe title='mapa-local' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.4357510893592!2d-78.13618937080955!3d0.35205079998395816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3c95c65b4b6b%3A0xd414329242ed481!2sDr.%20Jorge%20Davila%20Mesa%20802-890%2C%20Ibarra!5e0!3m2!1ses!2sec!4v1638541792928!5m2!1ses!2sec' width='800' height='600' loading='lazy' />
        </div>
        <h3 id='telefono'>Teléfono</h3>
        <label>09929292</label>
      </article>
    </section>
  )
}
