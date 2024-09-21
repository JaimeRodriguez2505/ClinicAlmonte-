import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import MisLibros from '../components/MisLibros/MisLibros';
import Carousel from '../components/Carousel/Carousel';
const Libros = () => {
    return (
        <>
            <Navbar />
            <MisLibros />
            <Footer />
        </>
    );
};

export default Libros;
