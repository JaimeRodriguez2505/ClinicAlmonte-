import React from 'react';
import './MisLibros.scss';

import bookOne from "../../assets/libros/1.png";
import bookTwo from "../../assets/libros/2.png";
import bookThree from "../../assets/libros/3.png";



const MisLibros = () => {
    // Información de los libros
    const libros = [
        {
            id: 1,
            foto: bookOne,
          
        },
        {
            id: 2,
            foto: bookTwo,
           
        },
        {
            id: 3,
            foto: bookThree,
            
        }
    ];

    return (
        <div className='page-title jus'>
            <div className="container">
                <h2>Mis Libros</h2>
                <p>Mantente al día de nuestros últimos libros y novedades.</p>
                <div className="libros">
                    {libros.map(libro => (
                        <div key={libro.id} className="libro">
                            <img src={libro.foto} alt={libro.titulo} className="libro-foto" />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MisLibros;
