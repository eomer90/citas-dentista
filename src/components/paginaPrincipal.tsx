import { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  FaFacebookF,
  FaCheckCircle,
  FaClinicMedical,
  FaBullseye,
  FaHandshake,
  FaMapMarkerAlt,
  FaUserMd,
} from "react-icons/fa";

interface PaginaPrincipalProps {
  abrirModal: () => void;
}

function PaginaPrincipal({ abrirModal }: PaginaPrincipalProps) {
  const [sucursalActual, setSucursalActual] = useState(0);
  const [infoActual, setInfoActual] = useState(0);

  const informacion = [
    {
      titulo: "Conócenos",
      icono: <FaClinicMedical />,
      imagen: "/conocenos.jpeg",
      parrafos: [
        "Una clinica que ofrece servicios de odontología integral, y de especialidad como es ortodoncia, endodoncia, implantologia, cirugia,estetica dental y armonización facial.",
        "En nuestra clínica trabajamos con odontología digital de vanguardia, utilizando tecnología como el escáner intraoral 3Shape®, radiovisografo y radiografia digital para ofrecer diagnósticos y restauraciones con mayor precisión, comodidad y calidad. Implementamos un flujo digital que nos permite emplear materiales de excelencia y obtener resultados más predecibles para nuestros pacientes. Además, nos mantenemos en constante actualización profesional para brindar tratamientos basados en los avances más recientes de la odontología asi como el adecuado seguimiento y educacion al paciente.",
        "Nuestros servicios y tratamientos son amplios gracias a que contamos con un equipo sólido de especialistas comprometidos con la salud de nuestros pacientes.",
      ],
    },
    {
      titulo: "Visión y Misión",
      icono: <FaBullseye />,
      imagen: "/conocenos.jpeg",
      parrafos: [
        "Ser reconocidos  como una de las principales clinicas con presencia en Zinacantepec, Toluca y Metepec; líder en innovación y excelencia, comprometida con la educación en salud bucal y con la satisfacción total de nuestros pacientes, convirtiéndonos en un referente de confianza y cuidado dental en nuestra comunidad.",
        "Brindar servicios odontológicos de alta calidad, con atención personalizada, promoviendo la salud bucal y el bienestar integral de nuestros pacientes en un ambiente seguro y humano.",
      ],
    },
    {
      titulo: "Valores",
      icono: <FaHandshake />,
      imagen: "/conocenos.jpeg",
      parrafos: [
        "Empatía: Atendemos a cada paciente con sensibilidad y comprension, escuchando sus necesidades para ofrecere una atencion calida y personalizada.",
        "Disciplina: Trabajamos con orden, constancia y dedicacion para garantizar tratamientos de calidad y cumplir con los mas altos estandares profesionales.",
        "Honestidad: Actuamos con transparencia y claridad, brindando diagnosticos y tratamientos justos, siempre pensando en el bienestar real del paciente.",
        "Compañerismo: Fomentamos un ambiente de respeto, apoyo y colaboracion entre todo el equipo, para ofrecer una experiancia confiable y cercana.",
      ],
    },
  ];

  const especialistas = [
    {
      nombre: "Dra. Analy Díaz",
      imagen: "/doctor1.jpeg",
      especialidad: "Estética Dental y Armonización Facial",
    },
    {
      nombre: "Dr. Antonio Basilio",
      imagen: "/doctor2.png",
      especialidad: "Ortodoncia",
    },
    {
      nombre: "Dra. Astrid Becerril",
      imagen: "/doctor3.jpeg",
      especialidad: "Endodoncia",
    },
    {
      nombre: "Dra. Fernanda Lizet",
      imagen: "/doctor4.jpeg",
      especialidad: "Odontología General",
    },
    {
      nombre: "Dr. Armando Soriano",
      imagen: "/doctor5.png",
      especialidad: "Periodoncia",
    },
  ];

  const sucursales = [
    {
      nombre: "Sucursal Metepec",
      icono: <FaMapMarkerAlt />,
      imagen: "/consultorioMetepec.jpeg",
      descripcion:
        "Atención especializada con tecnología digital y tratamientos integrales.",
      direccion: "Av. Tecnológico 1300, Plaza Portal del Sol, Local 11",
      horario: "Lunes a Sábado de 11:00 a 14:00 y de 16:00 a 18:00 hrs.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120510.25703393038!2d-99.71697807312015!3d19.28473471285449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bc6ca5e706f%3A0xb3ed1e19205077cd!2sMax%20Dent%20metepec!5e0!3m2!1ses!2smx!4v1780703049261!5m2!1ses!2smx",
    },
    {
      nombre: "Sucursal Zinacantepec",
      icono: <FaMapMarkerAlt />,
      imagen: "/consultorioZinacantepec.jpeg",
      descripcion:
        "Instalaciones modernas y atención integral para toda la familia.",
      direccion: "Calle Corregidora 117, Lindavista, Zinacantepec",
      horario: "Lunes a Sábado de 11:00 a 14:00 y de 16:00 a 18:00 hrs.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8659124703604!2d-99.72354442611892!3d19.28819644527921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd896099b0dde3%3A0x7efb581e6aa51536!2sMax%20Dent%20corregidora%20117%20lindavista!5e0!3m2!1ses!2smx!4v1780703424949!5m2!1ses!2smx",
    },
  ];

  return (
    <div>
      <nav className="menu-principal">
        <img src="/logo1.5.jpeg" alt="Logo Max Dent" className="logo" />
        <a href="#inicio" className="menu-item">
          Inicio
        </a>
        <a href="#conocenos" className="menu-item">
          Conócenos
        </a>
        <a href="#sucursales" className="menu-item">
          Sucursales
        </a>
        <a href="#especialistas" className="menu-item">
          Especialistas
        </a>

        <div className="redes-sociales">
          <span className="menu-item2">Búscanos en</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="facebook-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-link"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>

      <section id="inicio" className="main-container">
        <div className="imagen-container">
          <img src="/imagenPrincipal.jpeg" alt="Max Dent" className="imagen" />
        </div>
        <div className="inicio-info">
          <h1 className="titulo-principal">
            <span>MAX</span>
            <img
              src="/logoMariposa.png"
              alt="Logo mariposa"
              className="logo-mariposa"
            />
            <span>DENT</span>
          </h1>
          <h2>Estética Dental y Facial</h2>

          <p>Somos especialistas en:</p>
          <ul className="lista-servicios">
            <li>
              <FaCheckCircle /> Odontología integral
            </li>
            <li>
              <FaCheckCircle /> Ortodoncia
            </li>
            <li>
              <FaCheckCircle /> Endodoncia
            </li>
            <li>
              <FaCheckCircle /> Limpieza con ultrasonido
            </li>
            <li>
              <FaCheckCircle /> Diseño de sonrisa
            </li>
            <li>
              <FaCheckCircle /> Armonización facial
            </li>
            <li>... y mucho más.</li>
          </ul>
          <button className="inicio-boton" onClick={abrirModal}>
            Agenda tu cita
          </button>
        </div>
      </section>

      <section id="conocenos" className="nosotros">
        <div className="basic-layout">
          <div className="basic-info">
            <h2>
              <span className="titulo-icono">
                {informacion[infoActual].icono}
              </span>
              {informacion[infoActual].titulo}
            </h2>
            {informacion[infoActual].parrafos.map((parrafo, index) => (
              <p key={index}>{parrafo}</p>
            ))}
          </div>
          <div className="imagen-container">
            <img
              src={informacion[infoActual].imagen}
              alt={informacion[infoActual].titulo}
              className="imagen"
            />
            <button
              className="flecha"
              onClick={() =>
                setInfoActual((infoActual + 1) % informacion.length)
              }
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      <section id="sucursales" className="sucursales">
        <div className="basic-layout">
          <div className="imagen-container">
            <img
              src={sucursales[sucursalActual].imagen}
              alt={sucursales[sucursalActual].nombre}
              className="imagen"
            />
          </div>

          <div className="basic-info">
            <button
              className="flecha"
              onClick={() =>
                setSucursalActual((sucursalActual + 1) % sucursales.length)
              }
            >
              ❯
            </button>
            <h2>
              <span className="titulo-icono">
                {sucursales[sucursalActual].icono}
              </span>
              {sucursales[sucursalActual].nombre}
            </h2>
            <p>{sucursales[sucursalActual].descripcion}</p>
            <p>
              <strong>Dirección:</strong> {sucursales[sucursalActual].direccion}
            </p>
            <p>
              <strong>Horario:</strong> {sucursales[sucursalActual].horario}
            </p>
            <iframe
              src={sucursales[sucursalActual].mapa}
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Mapa"
            />
          </div>
        </div>
      </section>

      <section id="especialistas" className="especialistas">
        <h2 className="titulo-seccion">
          <FaUserMd className="titulo-icono" />
          Nuestros Especialistas
        </h2>
        <div className="especialistas-grid">
          {especialistas.map((especialista) => (
            <div key={especialista.nombre} className="especialista-card">
              <img
                src={especialista.imagen}
                alt={especialista.nombre}
                className="especialista-img"
              />
              <div className="especialista-info">
                <h3>{especialista.nombre}</h3>
                <span className="especialidad">
                  {especialista.especialidad}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h3>Clínica Max Dent</h3>
        <p>Especialistas en odontología integral, estética dental y facial.</p>
        <p>Metepec • Zinacantepec</p>
        <p>© 2026 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default PaginaPrincipal;
