import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/andresdominguez-learnerbyheart/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/Andres22-sys" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.facebook.com/andrz.domngz/" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
        </div>
    );
}

export default HeaderSocials;