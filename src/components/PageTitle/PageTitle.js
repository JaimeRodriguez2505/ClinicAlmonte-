import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title,description}) => {
    return (
        <div className='page-title jus'>
            <div className="container">
                <h2>Nuevos Procedimientos</h2>
                <p>Mantente al día con nuestros últimos procedimientos y novedades, y recibe consejos exclusivos para el cuidado de tu estética personal.</p>
            </div>
        </div> 
    );
};

export default PageTitle;