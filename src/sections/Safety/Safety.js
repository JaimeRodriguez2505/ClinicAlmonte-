import React from 'react';
import './Safety.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Seguridad"
                    title="Ponemos la seguridad en primer lugar"
                    description="En nuestra clínica, tu seguridad es nuestra máxima prioridad. Nos comprometemos a seguir rigurosos protocolos y a utilizar tecnología de última generación para asegurar un entorno seguro y confiable para todos nuestros tratamientos."
                />

                <div className="safety-video ratio ratio-16x9">
                <iframe width="1089" height="817" src="https://www.youtube.com/embed/kgz4U6otqLw" title="CLINICA ALMONTE responde algunas preguntas frecuentes VISITA MEDICA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;