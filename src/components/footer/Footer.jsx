import React from 'react'
import './Footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {IoLogoTwitter} from "react-icons/io";
import logo from '../../assets/mylogo-black.png'

const Footer = () => {
    return (
        <footer className="footer">
            <a href="#home" className="footer__logo"><img src={logo}  alt={'logo'}/></a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/andres.dominguez.31105674/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
                <a href="https://www.instagram.com/andrs_domingz_/" target="_blank" rel="noreferrer"><FiInstagram/></a>
                <a href="https://twitter.com/adominguezl22" target="_blank" rel="noreferrer"><IoLogoTwitter/></a><br></br>
            </div>

            <div className="footer__copyright">
                <small>&copy; Andres Dominguez. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer