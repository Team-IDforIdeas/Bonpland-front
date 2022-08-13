import React, { Component } from 'react';
import logo from '../assets/img/logo.jpg';

class Header extends Component {
    render() {
        return (

            <div class="row">
	            <svg width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
	                <path d="M23.4009 25.3795C18.6137 27.8733 23.4009 39.2015 23.4009 39.2015H16.2006V14.322L27.001 0.5L37.8014 14.322V39.2015H30.6011C30.6011 39.2015 35.3883 27.8733 30.6011 25.3795C28.1073 24.0804 25.8947 24.0804 23.4009 25.3795Z" fill="#F5C181" />
	                <path d="M43.1994 30.2011C40.1855 32.0095 43.1994 39.2015 43.1994 39.2015H37.7992V23.0008L45.8995 14.0005L53.9998 23.0008L50.8497 39.2015H48.5996C48.5996 39.2015 51.6136 32.0095 48.5996 30.2011C46.7913 29.1161 45.0078 29.1161 43.1994 30.2011Z" fill="#E0B067" />
	                <path d="M10.8004 30.201C13.8143 32.0094 10.8004 39.2014 10.8004 39.2014L16.2006 39.2015V23.0008L8.10031 14.0004L0 23.0008L3.15012 39.2014H5.40021C5.40021 39.2014 2.38624 32.0094 5.40021 30.201C7.20858 29.116 8.99204 29.116 10.8004 30.201Z" fill="#E0B067" />
	                <path d="M2.7938 37.4015H51.2017L50.8488 40.3266L51.2988 43.2517C31.186 40.3478 23.1166 40.3778 2.69696 43.2517L3.14698 40.3266L2.7938 37.4015Z" fill="#F5C181" />
	            </svg>
	            <ul class="nav nav-tabs d-flex justify-content-end">
	                <li class="nav-item fw-bolder">
	                    <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
	                </li>
	                <li class="nav-item fw-bolder">
	                    <a class="nav-link text-dark" href="#">Publicar</a>
	                </li>
	                <li class="nav-item fw-bolder">
	                    <a class="nav-link text-dark" href="#">Buscador</a>
	                </li>
	                <li class="nav-item fw-bolder">
	                    <a class="nav-link text-dark">Contacto</a>
	                </li>
	            </ul>
        	</div>
        )
    }
}
export default Header;