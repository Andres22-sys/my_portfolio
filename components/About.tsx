import { FaAward } from 'react-icons/fa';
import { IoLibrarySharp } from 'react-icons/io5';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="mt-12 lg:mt-44">
      <Reveal>
        <h5 className="section-subtitle">Get To Know</h5>
        <h2 className="section-title">About Me</h2>
      </Reveal>

      <Reveal
        delay={0.15}
        className="container grid grid-cols-1 lg:grid-cols-[35%_50%] lg:gap-[15%]"
      >
        {/* Image */}
        <div
          className="w-full aspect-[1/1.33] rounded-[2rem] grid place-items-center lg:w-full mx-auto mb-8 lg:mb-0 md:w-[50%] md:mx-auto md:mb-16 sm:w-[65%] sm:mx-auto sm:mb-12"
          style={{
            background:
              'linear-gradient(45deg, transparent, #e0dcdc, transparent)',
          }}
        >
          <div className="rounded-[2rem] overflow-hidden transition-all duration-[400ms] w-full lg:rotate-[10deg] lg:hover:rotate-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/me-about.jpg" alt="About Andres" />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8 sm:gap-4">
            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center transition-all duration-[400ms] hover:bg-transparent hover:border-primary hover:-translate-y-1 cursor-default sm:p-6">
              <FaAward className="text-primary text-[1.4rem] mx-auto mb-4" />
              <h5 className="text-[0.95rem]">Experience</h5>
              <small className="text-[0.7rem] text-white/60">
                7+ Year Working
              </small>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center transition-all duration-[400ms] hover:bg-transparent hover:border-primary hover:-translate-y-1 cursor-default sm:p-6">
              <IoLibrarySharp className="text-primary text-[1.4rem] mx-auto mb-4" />
              <h5 className="text-[0.95rem]">Projects</h5>
              <small className="text-[0.7rem] text-white/60">
                20+ Completed
              </small>
            </article>
          </div>

          <p className="text-white/60 my-8 lg:my-4 sm:my-6 sm:text-center">
            I worked as a Problem Solver Associate at Amazon, handling a fast
            paced work environment while keeping my station organized,
            productivity high, and every deadline met. I&apos;m now taking
            that same discipline into software development through
            structured coursework on Codecademy.
          </p>

          <p className="text-white/60 mb-8 sm:text-center">
            On LinkedIn Learning I completed certificates in Succeeding in Web
            Development: Full Stack and Front End, Web Security, Full-Stack
            Web Developer, Web Design and Development, DevOps Foundations,
            and User Experience. I&apos;m now splitting my
            practice between front-end interfaces and back-end logic to
            become a well-rounded developer.
          </p>

          <p className="text-white/60 mb-8 sm:text-center">
            I got into this field by wanting to know how the apps and
            websites I use every day are actually built, and that curiosity
            turned into a habit of building my own projects. I keep looking
            for the next hard problem, whether that means a new language, a
            new framework, or a bug that takes a whole weekend to track down.
          </p>

          <a
            href="#contact"
            className="btn btn-primary sm:mx-auto sm:block sm:w-max transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
