import React from 'react';
import './Features.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import IconList from '../../components/IconList/IconList';
import featuresData from './FeaturesData';

const Features = () => {
    return (
        <section className='section-bg section-common features-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="Ventajas de Nuestra Clínica" title="Cuidados especializados a través de experiencias" description="En nuestra clínica, nos dedicamos a ofrecer cuidados especializados que están respaldados por años de experiencia en el campo de la estética. Cada tratamiento es personalizado para satisfacer tus necesidades individuales y asegurar los mejores resultados."/>

                <div className="row align-items-center">
                    {
                        featuresData.map(singleFeature => 
                            <IconList 
                                icon={singleFeature.icon} 
                                title={singleFeature.title}
                                description={singleFeature.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;