import React from "react";
import { Link } from "react-router-dom";
import "./AboutBanner.scss";
import bannerOne from "../../assets/about/banner/banner_1.png";
import bannerTwo from "../../assets/about/banner/banner_2.png";
import pattern from "../../assets/banner/pattern.png";

const AboutBanner = () => {
  return (
    <section
      className="about-section"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="about-banner-text">
                  <br></br>
                  <br></br>
                  <section>
    <h2>¿Quiénes somos?</h2>
    <p>En la <strong>Clínica Almonte</strong>, nos especializamos en <strong>cuidar y realzar tu belleza</strong> desde 1995. Nuestra amplia trayectoria y el uso de <strong>tecnología de vanguardia</strong> nos permiten ofrecerte <strong>tratamientos estéticos personalizados</strong> adaptados a tus necesidades.</p>
    <p>Contamos con un equipo altamente capacitado que se enfoca en <strong>brindarte resultados excepcionales</strong> en cirugía y medicina estética, asegurando siempre <strong>tu bienestar, seguridad y confidencialidad</strong>.</p>
</section>



                  <div className="theme-btn">
                    <Link to="/contact">Agenda una Cita</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-banner-img">
                  <img src={bannerOne} alt="about banner" />
                  <img src={bannerTwo} alt="about banner two" />
                  <img
                    className="pattern"
                    src={pattern}
                    alt="about banner two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
