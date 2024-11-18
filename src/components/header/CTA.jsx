import React from "react";
import CV from "../../assets/Dominguez_Andres.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Work Together</a>
        </div>
    );
}

export default CTA;