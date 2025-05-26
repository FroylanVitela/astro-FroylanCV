import "../styles/global.css";

export default function Contact() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto__contenedor">
        <h2>Contacto</h2>

        <form className="contacto__formulario">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required />
          <button type="submit">Enviar</button>
        </form>

        <div className="contacto__redes">
          <a href="#" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="GitHub" />
          </a>
          <a href="#" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" />
          </a>
          <a href="mailto:vvitelacuevas@gmail.com">
            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Email" />
          </a>
          <a href="https://wa.me/5214494067829" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" />
          </a>
          <a href="https://instagram.com/vitelas.mx" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=TEYr8ETaIfBJ&format=png&color=000000" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}
