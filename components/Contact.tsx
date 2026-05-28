'use client';

import { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMessenger } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      'service_mcxhqjy',
      'template_0ytngav',
      form.current,
      'gQEvC2hiYaB7OlBgR'
    );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mt-32 lg:mt-24">
      <h5 className="section-subtitle">Get In Touch</h5>
      <h2 className="section-title">Contact Me</h2>

      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[30%_58%] lg:gap-[12%] lg:w-[58%]">
        {/* Contact options */}
        <div className="flex flex-col gap-5">
          <article className="bg-bg p-5 rounded-[1.2rem] text-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant">
            <HiOutlineMail className="text-2xl text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Email</h4>
            <h5 className="text-sm text-white/60 mb-2">
              adominguezl800@gmail.com
            </h5>
            <a
              href="mailto:adominguezl800@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs mt-2 inline-block hover:text-white"
            >
              Send a message
            </a>
          </article>

          <article className="bg-bg p-5 rounded-[1.2rem] text-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant">
            <BsMessenger className="text-2xl text-primary mx-auto mb-2" />
            <h4 className="font-medium mb-1">Messenger</h4>
            <h5 className="text-sm text-white/60 mb-2">Andres Dominguez</h5>
            <a
              href="https://m.me/andres.dominguez.31105674"
              target="_blank"
              rel="noreferrer"
              className="text-xs mt-2 inline-block hover:text-white"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
            className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
            className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none"
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            autoComplete="off"
            required
            className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none"
          />
          <button type="submit" className="btn btn-primary w-max">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
