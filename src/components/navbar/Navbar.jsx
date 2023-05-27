import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserTie} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {FaHandsHelping} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from "react";

const Navbar = () => {
    const [nav, setNav] = useState('#');

    return (
        <nav>
            {/*eslint-disable-next-line*/}
            <a href="#" onClick={() => setNav("#")}
               className={nav === "#" ? "active" : ""}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setNav("#about")}
               className={nav === "#about" ? "active" : ""}><FaUserTie/></a>
            <a href="#portfolio" onClick={() => setNav("#portfolio")}
               className={nav === "#portfolio" ? "active" : ""}><BiBook/></a>
            <a href="#services" onClick={() => setNav("#services")}
               className={nav === "#services" ? "active" : ""}><FaHandsHelping/></a>
            <a href="#contact" onClick={() => setNav("#contact")}
               className={nav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Navbar