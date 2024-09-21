import React from "react";
import "./Team.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import imgOne from "../../assets/about/team/1.png";
import imgTwo from "../../assets/about/team/2.png";
import imgThree from "../../assets/about/team/3.png";
import imgFour from "../../assets/about/team/4.png";
import imgFive from "../../assets/about/team/5.png";
import imgSix from "../../assets/about/team/6.png";


const Team = () => {
  const teams = [
    {
      img: imgOne,
      name: "Dr.Hernán Barreda Tamayo",
      description: "Cirujano General.",
    },
    {
      img: imgTwo,
      name: "Dra. Gina Chávez Torres",
      description: "Otorrinolaringólogaa.",
    },
    {
      img: imgThree,
      name: "Dr. Duilio Valdivia Tejada",
      description: "Cirujano General Essalud.",
    },
    {
      img: imgFour,
      name: "Dr. Gerardo Chirinos",
      description: "Anestesiólogo Essalud.",
    },
    {
      img: imgFive,
      name: "Dra. Norma González",
      description: "Anestesióloga HRHD.",
    },
  ];
  
  const dr = [
    {
      img: imgSix,
      name: "Dr. Renato Almonte Velarde",
      description: "Especialista cirujia",
    },
  ];

  return (
    <section
      className="team-section pt-100"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <SectionTitle
              subTitle="Conoce a Nuestro Equipo"
              title="Descubre a nuestros especialistas en estética"
            />
          </div>

          <div className="col-lg-5">
            <p className="pt-5">
              En nuestra clínica, contamos con un equipo de profesionales
              altamente capacitados y dedicados a brindarte el mejor cuidado
              estético. Cada miembro de nuestro equipo está comprometido con tu
              bienestar y con ofrecer resultados excepcionales.
            </p>
          </div>
          <div className="separator"></div>
        </div>

        <div className="row align-items-center">
          {/* Columna con la imagen y la descripción */}
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <div className="team-card text-center">
            <h3>{dr[0].name}</h3>
            <p>{dr[0].description}</p>
              <div className="team-img">
                <img
                  src={dr[0].img}
                  alt=""
                  className="img-fluid team-img-size"
                />
              </div>
              
            </div>
          </div>

          {/* Columna con el texto adicional */}
          <div className="col-lg-6 col-sm-12">
            <div className="additional-info">
              <p>
                **Realizó sus estudios de Medicina en la Universidad Nacional de
                San Agustín - Arequipa, graduándose con honores.**
              </p>
              <p>
                **Siempre preocupado de las últimas técnicas se especializó
                en:**
              </p>
              <ul>
                <li>
                  **Especialidad en Cirugía General en la Universidad Nacional
                  de San Agustín**
                </li>
                <li>
                  **Especialidad en Cirugía Plástica y Reconstructiva en la
                  Universidad Peruana Cayetano Heredia, complementada con
                  postgrados en Brasil y Europa.**
                </li>
                <li>**Doctorado en Medicina.**</li>
                <li>
                  **Maestría en Fisiología (lo cual le permite el conocimiento y
                  manejo del funcionamiento del cuerpo humano).**
                </li>
                <li>
                  **Catedrático en la Universidad Nacional de San Agustín –
                  Arequipa.**
                </li>
              </ul>
              <p>
                **Miembro de las sociedades médicas y científicas de reconocido
                prestigio mundial:**
              </p>
              <ul>
                <li>**Fellow American College of Surgeons.**</li>
                <li>
                  **Sociedad Peruana de Cirugía Plástica Reconstructiva y
                  Estética.**
                </li>
                <li>
                  **Federación Iberolatinoamericana de Cirugía Plástica.**
                </li>
                <li>**Federación Latinoamericana de Cirugía FELAC.**</li>
                <li>**Sociedad de Cirujanos Generales del Perú.**</li>
                <li>
                  **Asociación Latinoamericana de Cirujanos Endoscopistas
                  ALACE.**
                </li>
                <li>**Sociedad Peruana de Cirugía Endoscópica.**</li>
              </ul>
              <p>**Ganador de premios de investigación:**</p>
              <ul>
                <li>
                  **Premio de la Fundación Docente de la Federación Ibero
                  Latinoamericana de Cirugía Plástica 2007.**
                </li>
                <li>**Premio Sociedad Peruana Cirugía Endoscópica 2006.**</li>
                <li>
                  **Premio Pfizer 2004 (SPCE 2004) a los mejores trabajos en
                  cirugía 2004.**
                </li>
                <li>**Premio “John J. Bónica” en Investigación en Dolor.**</li>
              </ul>
              <p>
                **Ponente invitado asistiendo a múltiples congresos nacionales e
                internacionales.**
              </p>
            </div>
          </div>
        </div>
          <div className="separator"></div>
        <div className="row d-flex justify-content-center">
          {teams.map((team) => (
            <div className="col-lg-3 col-sm-6 justify-content-center">
              <div className="team-card">
                <div className="team-img">
                  <img src={team.img} alt="" />
                </div>
                <h3>{team.name}</h3>
                <p>{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
