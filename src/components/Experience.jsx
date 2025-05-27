import { motion } from "framer-motion";
import "../styles/global.css";

export default function Experience() {
  const trabajos = [
    {
      empresa: "Electronic Cats",
      logo: "https://electroniccats.com/openhardwaremonth/static/logo_electroniccats-c14f4b90646a1705f118e69f56070c40.png",
      descripcion:
        "Automatización de procesos internos con Make, Airtable y Discord Webhooks. Implementación de flujos de ventas, notificaciones y CRM.",
      fecha: "2024 - 2025"
    },
    {
      empresa: "Instituto de Educación Aguascalientes",
      logo: "https://lh4.googleusercontent.com/proxy/Prxv2vsriZ83dmheJYBEPJDHRyIxLbA_tlKdZ6ppmPkdSAOjCqlanLLrTVXwVI9Xik51PkNvdhWB4tYemnNB4me2Kw99RH4=w1365-h664",
      descripcion:
      "Atención directa a incidentes técnicos de los empleados. Diagnóstico y resolución de fallas de hardware y software. Canalización de incidencias complejas al personal especializado para su resolución. Experiencia en mantenimiento de equipos y trato con usuarios",
      fecha: "2023 - 2024"
    },
    {
      empresa: "Dev Freelance",
      logo: "https://img.icons8.com/?size=100&id=CjJ8TXg2lg1j&format=png&color=000000",
      descripcion:
        "Diseño y desarrollo de sitios web responsivos y totalmente funcionales, principalmente para proyectos escolares pero con la posibilidad de aplicarlo al mundo real.",
      fecha: "2023 - Actualidad"
    }
  ];

  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia__contenedor">
        <h2>Experiencia Profesional</h2>
        <ul className="experiencia__lista">
          {trabajos.map((trabajo, index) => (
            <motion.li
              key={index}
              className="experiencia__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experiencia__empresa">
                <img src={trabajo.logo} alt={`Logo de ${trabajo.empresa}`} />
                <strong>{trabajo.empresa}</strong>
                <span>{trabajo.fecha}</span>
              </div>
              <p>{trabajo.descripcion}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
