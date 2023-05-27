import React from 'react'
import './Services.css'
import {BsCheck} from "react-icons/bs";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Designing Layout</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Creating Visual Design</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Ensure Design Responsiveness</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Up-to-date Design Trends</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX Design */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Write and Test Code</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Maintaining Websites</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Learning new web tools</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Collaboration</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development */}
            </div>
        </section>
    )
}

export default Services