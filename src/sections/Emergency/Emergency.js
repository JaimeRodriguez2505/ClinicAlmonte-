import React from 'react';
import './Emergency.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import EmergencyImg from '../../assets/emergency.png';
import { Link } from 'react-router-dom';

const Emergency = () => {
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">
                            <SectionTitle subTitle="Atención Estética Personalizada" title="Trato amable y profesional en nuestra clínica local." description="En nuestra clínica, nos dedicamos a ofrecer un cuidado estético excepcional con un enfoque personalizado. Nuestro equipo de expertos está comprometido en brindarte la mejor atención y asegurarse de que cada procedimiento sea seguro y cómodo para ti."/>

                            <div className="theme-btn">
                                <Link to='/contact'>Agenda una cita</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;