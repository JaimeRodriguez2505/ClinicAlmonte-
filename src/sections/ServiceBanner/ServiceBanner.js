import React from "react";
import { Link } from "react-router-dom";
import "./ServiceBanner.scss";
import serviceBanner from "../../assets/servicePage/1.png";

const ServiceBanner = () => {
  return (
    <section className="service-banner-section section-common section-bg">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div
                  className="service-banner-text"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <h2>Cirugías</h2>
                  <p>
                    La <strong>cirugía estética</strong> y{" "}
                    <strong>reconstructiva</strong> mejoran el{" "}
                    <strong>aspecto físico</strong>y la{" "}
                    <strong>autoestima</strong>, ayudando a enfrentar el entorno
                    con <strong>confianza</strong>.
                  </p>
                  <p>
                    Infórmate sobre <strong>riesgos</strong>,{" "}
                    <strong>limitaciones</strong> y <strong>objetivos</strong>{" "}
                    antes de la cirugía. Asegúrate de que el{" "}
                    <strong>cirujano</strong> esté <strong>acreditado</strong> y
                    especializado, y que te brinde <strong> apoyo </strong>
                    durante la <strong>recuperación</strong>.
                  </p>
                  <div className="theme-btn">
                    <Link to="/contact">Agenda una Cita</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div
                  className="service-banner-img"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <img src={serviceBanner} alt="service" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
