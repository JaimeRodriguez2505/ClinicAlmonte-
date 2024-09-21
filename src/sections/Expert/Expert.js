import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERTOS EN ESTÉTICA"
                                title="Tratamientos de primer nivel, realizados por los mejores especialistas en estética."
                                description="Ofrecemos lo último en tecnología estética para resultados excepcionales y personalizados."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Equipo de estética de alta calidad
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Servicios estéticos de vanguardia
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Descuentos en todos los tratamientos
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;