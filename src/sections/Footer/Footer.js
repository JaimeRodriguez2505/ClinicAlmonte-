import React from 'react';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'Inicio',
            'link' : '/Home'
        },
        {
            'name' : 'Quienes Somos',
            'link' : '/about'
        },
        {
            'name' : 'Cirugias',
            'link' : '/'
        },
        {
            'name' : 'Procedimientos',
            'link' : '/'
        },
        {
            'name' : 'Libros',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '+088 123 654 987',
            'icon': call
        },
        {
            'title': 'Abierto',
            'info': '09:00 AM - 5:00 PM',
            'icon': time
        },
        {
            'title': 'Clinica Direccion',
            'info': 'Manuel Ugarteche 311, Arequipa 04001',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Nuestra clínica estética es reconocida por ofrecer tratamientos avanzados en estética facial y corporal, brindando soluciones personalizadas para realzar tu belleza natural.</p>

                        <div className="social-logo">
                            <p>Siguenos</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Links Rapidos</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contacto & Informacion</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Clinica Almonte. Todos los derechos Reservados</p>
                        <p>&copy; Desing. Jaime Rodriguez</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terminos de uso</Link></li>
                            <li><Link to='/'>Politica de privacidad</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;