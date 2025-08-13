import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/global.css";

export default function Contact() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const enviarCorreo = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(() => {
        setEnviado(true);
        form.current.reset();
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((error) => console.error("Error al enviar:", error));
  };

  return (
    <section className="contacto" id="contacto">
      <div className="contacto__contenedor">
        <h2>Contacto</h2>

        <form ref={form} onSubmit={enviarCorreo} className="contacto__formulario">
          <input name="nombre" type="text" placeholder="Tu nombre" required />
          <input name="correo" type="email" placeholder="Tu correo" required />
          <textarea name="mensaje" placeholder="Tu mensaje" required />
          <button type="submit">Enviar</button>
        </form>

        {enviado && <p className="contacto__confirmacion">¡Mensaje enviado correctamente!</p>}

        <div className="contacto__redes">
          <a href="https://github.com/FroylanVitela" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/froyl%C3%A1n-vitela-1791482a4/" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" />
          </a>
          <a href="mailto:vvitelacuevas@gmail.com">
            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Email" />
          </a>
          <a href="https://wa.me/5214494067829" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/froglan_71?igsh=MnVtM2M2eXE3cTg=" target="_blank">
            <img src="https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000" alt="Instagram" />
          </a>
        </div>
        
        <div className="contacto__cv">
          <a href="/doc/VFVC CV.pdf" download className="boton-descarga">
            Descargar CV en PDF
          </a>
        </div>
      </div>
      <footer style={{ color: "#fff", textAlign: "center", marginTop: "2rem", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Froylán Vitela. Todos los derechos reservados.
      </footer>
    </section>
  );
}