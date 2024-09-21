import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.691040913643!2d-71.5317087248573!3d-16.389693684337193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a4db6087385%3A0x97f81df15b7310ee!2sCL%C3%8DNICA%20ALMONTE%20S.A.C.!5e0!3m2!1ses!2spe!4v1725977932653!5m2!1ses!2spe'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Manuel Ugarteche 311, Arequipa 04001</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="RESERVA UNA CITA"
                            title="Cuidar de tu belleza es una experiencia placentera"
                            description="Nos especializamos en ofrecer tratamientos estéticos de alta calidad en un ambiente cómodo y relajante, asegurando que cada visita sea tan satisfactoria como efectiva."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;