import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Services.scss";
import ServicesData from "./ServiceData";
import Service from "../../components/Service/Service";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section
      className="service-section pt-100 pb-70"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <SectionTitle
              title="Siéntete increíble con tu estética y bienestar"
              subTitle="Servicios"
            />
          </div>
          <div className="col-lg-6 col-sm-6">
            <p className="service-title-text">
              Nuestro <strong>compromiso</strong> es que te sientas{" "}
              <strong>seguro</strong> y <strong>satisfecho</strong> con tu
              apariencia. Ofrecemos una amplia gama de{" "}
              <strong>procedimientos personalizados</strong> para mejorar tanto
              tu <strong>estética</strong> como tu <strong>bienestar</strong>.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {ServicesData.map((singleService) => (
            <Service serviceList={singleService} />
          ))}
        </div>
      </div>

      <div className="services-link text-center">
        <Link to="/singleservice">
          Ver toda la lista de servicios
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </section>
  );
};

export default Services;
