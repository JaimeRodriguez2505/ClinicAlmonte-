import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import priorityImg from '../../assets/about/priority.png';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="NUESTRA PRIORIDAD" 
                                title="Nuestros clientes son nuestra prioridad"
                                description="En nuestra clínica, nos enfocamos en ofrecerte una experiencia excepcional. Nos aseguramos de que cada detalle de tu atención esté diseñado para tu comodidad y satisfacción, garantizando resultados que superen tus expectativas."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Priority;