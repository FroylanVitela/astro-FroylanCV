import { motion } from "framer-motion";
import "../styles/global.css";

export default function Experience() {
  const trabajos = [
    {
      empresa: "Instituto de Educación Aguascalientes - Soporte Técnico",
      logo: "https://lh4.googleusercontent.com/proxy/Prxv2vsriZ83dmheJYBEPJDHRyIxLbA_tlKdZ6ppmPkdSAOjCqlanLLrTVXwVI9Xik51PkNvdhWB4tYemnNB4me2Kw99RH4=w1365-h664",
      descripcion: [
        "Atención directa a incidentes técnicos de los empleados",
        "Diagnóstico y resolución de fallas de hardware y software",
        "Canalización de incidencias complejas al personal especializado para su resolución",
        "Experiencia en mantenimiento de equipos y trato con usuarios"
      ],
      fecha: "2023 - 2024"
    },
    {
      empresa: "Electronic Cats - Automatización de Procesos",
      logo: "https://electroniccats.com/openhardwaremonth/static/logo_electroniccats-c14f4b90646a1705f118e69f56070c40.png",
      descripcion: [
        "Automatización de procesos internos con Make, Airtable, n8n y Discord Webhooks",
        "Implementación de flujos de ventas, notificaciones y CRM"
      ],
      fecha: "ENE 2025 - ABR 2025"
    },
    {
      empresa: "QMC BEYOND & QUALITY - Soporte Técnico",
      logo: "https://qmcmex.com/public/imgs/logos/QMCB.png",
      descripcion: [
        "Atención directa a incidentes técnicos de los empleados",
        "Diagnóstico y resolución de fallas de hardware y software",
        "Canalización de incidencias complejas al personal especializado para su resolución",
        "Experiencia en mantenimiento de equipos y trato con usuarios",
        "Implementación de soluciones tecnológicas para optimizar el rendimiento del equipo",
        "Gestión de proyectos tecnológicos y capacitación del personal en nuevas herramientas"
      ],
      fecha: "JUL 2025 - SEP 2025"
    },
    {
      empresa: "Jatco México - Mejora de procesos",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jatco_logo.svg/250px-Jatco_logo.svg.png",
      descripcion:
        "Diseño e implementación de soluciones operativas integradas, incluyendo un sistema modular en Excel/VBA para gestión de inventarios y un modelo de base de datos unificado. Coordinación de equipos multidisciplinarios para alinear requerimientos funcionales, optimizar flujos de trabajo y presentar avances estratégicos a nivel ejecutivo.",
      fecha: "SEP 2025 - DIC 2025"
    },
    {
      empresa: "Dev Freelance - Desarrollo Web",
      logo: "https://cdn-icons-png.flaticon.com/512/1995/1995437.png",
      descripcion: [
        "Diseño y desarrollo de sitios web responsivos y totalmente funcionales",
        "Implementación de tecnologías modernas como React, Next.js y Tailwind CSS",
        "Creación de aplicaciones web interactivas y optimizadas",
        "Documentación y mantenimiento de proyectos existentes",
        "Dockerización de aplicaciones para facilitar el despliegue y la escalabilidad"
      ],
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
              {Array.isArray(trabajo.descripcion) ? (
                <ul className="experiencia__descripcion">
                  {trabajo.descripcion.map((punto, i) => (
                    <li key={i}>
                      <span className="icono">◆</span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{trabajo.descripcion}</p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
