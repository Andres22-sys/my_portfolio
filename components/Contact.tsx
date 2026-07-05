'use client';

import { useRef, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMessenger } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SendStatus>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs
      .sendForm(
        'service_mcxhqjy',
        'template_0ytngav',
        form.current,
        'gQEvC2hiYaB7OlBgR'
      )
      .then(() => {
        setStatus('success');
        form.current?.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="mt-32 lg:mt-44">
      <Reveal>
        <h5 className="section-subtitle">Get In Touch</h5>
        <h2 className="section-title">Contact Me</h2>
      </Reveal>

      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[30%_58%] lg:gap-[12%] lg:w-[58%]">
        {/* Contact options */}
        <Reveal className="flex flex-col gap-5">
          <article className="bg-bg p-5 rounded-[1.2rem] text-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant hover:-translate-y-1">
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

          <article className="bg-bg p-5 rounded-[1.2rem] text-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:border-bg-variant hover:-translate-y-1">
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
        </Reveal>

        {/* Form */}
        <Reveal delay={0.15}>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
              className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none transition-colors duration-300 focus:border-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none transition-colors duration-300 focus:border-primary"
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your Message"
              autoComplete="off"
              required
              className="w-full p-6 rounded-lg bg-transparent border-2 border-bg-variant text-white placeholder:text-white/60 resize-none outline-none transition-colors duration-300 focus:border-primary"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary w-max transition-transform duration-300 hover:-translate-y-1 hover:scale-105 disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-primary">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
