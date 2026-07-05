import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import Reveal from './Reveal';

const Header = () => {
  return (
    <header className="h-[90vh] pt-28 overflow-hidden md:h-screen sm:h-[90vh]">
      <div className="w-[90%] mx-auto text-center h-full relative md:w-[75%]">
        <Reveal>
          <h5 className="text-white/60">Hello I&apos;m</h5>
          <h1 className="text-[3.5rem] font-bold mb-4">Andres Dominguez</h1>
          <h5 className="text-white/60">Full-Stack Engineer</h5>

          {/* CTA */}
          <div className="mt-10 flex gap-5 justify-center">
            <a
              href="/assets/Dominguez_Andres.pdf"
              download
              className="btn transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn btn-primary transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </Reveal>

        {/* Socials */}
        <div className="flex flex-row justify-center gap-4 pt-5 text-xl md:flex-col md:items-center md:absolute md:left-0 md:bottom-12 md:pt-0 md:gap-3 md:after:content-[''] md:after:block md:after:w-px md:after:h-8 md:after:bg-primary">
          <a
            href="https://www.linkedin.com/in/andresdominguezdev/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:text-white hover:scale-125"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Andres22-sys"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:text-white hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/andrz.domngz/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform duration-300 hover:text-white hover:scale-125"
          >
            <FaFacebookSquare />
          </a>
        </div>

        {/* Profile image */}
        <div
          className="hidden md:block w-[22rem] h-[30rem] absolute left-[calc(50%-11rem)] mt-16 rounded-[12rem_12rem_0_0] overflow-hidden pt-20 px-6"
          style={{ background: 'linear-gradient(#e0dcdc, transparent)' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/me.png"
            alt="Andres Dominguez"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Scroll down */}
        <a
          href="#contact"
          className="hidden md:block absolute -right-9 bottom-20 rotate-90 font-light text-sm text-primary hover:text-white"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
