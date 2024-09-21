import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Bienvenidos a la Clínica Almonte</h1>
                                    <p>Desde <strong>1995</strong>, cuidamos y realzamos tu belleza con <strong>tecnología avanzada</strong> y experiencia. Ofrecemos <strong>atención personalizada</strong>, con seriedad y confidencialidad.</p>

<p>Si vives en otra ciudad o tienes familiares en el extranjero, pregunta por nuestro paquete <strong>PACIENTE VIAJERO</strong>. Contáctanos al <strong>+51 54 200202</strong> o <strong>clínica.almonte@gmail.com</strong>.</p>

<p><strong>¡Renueva tu imagen con nosotros!</strong></p>


                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/contact">Agenda tu Cita</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Contactanos</p>
                                                <h6>957604003</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 justify-content-center">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Renato Almonte Velarde</p>
                                            <p><small>Cirujano Plástico</small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;