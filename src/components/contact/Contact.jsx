import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mcxhqjy', 'template_0ytngav',
            form.current, 'gQEvC2hiYaB7OlBgR')

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>adominguezl800@gmail.com</h5>
                        <a href="mailto:adominguezl800@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Andres Dominguez</h5>
                        <a href="https://m.me/andres.dominguez.31105674" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* Contact Options End */}
                <form ref={form}  onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact