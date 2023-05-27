import React from 'react'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {IoLibrarySharp} from 'react-icons/io5'
import './About.css'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>2+ Year Working</small>
                        </article>

                        <article className="about__card">
                            <IoLibrarySharp className="about__icon"/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        I'm a graduate of Kenzie Academy, where I studied the fundamentals of Java and the mindset of a
                        Software Engineer. I've also taught myself some HTML, CSS, and JavaScript. In my free time
                        enjoy dancing, making music, and learning to play the keyboard. I also like volunteering and helping
                        others.
                    </p>

                    <p>
                        Currently improving my skills in Front-end and Back-end. Looking for a job as a Software
                        Engineer as well.
                    </p>

                    <a href="#contact" className="btn btn-primary">Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About