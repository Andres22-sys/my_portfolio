import { FaAward } from 'react-icons/fa';
import { IoLibrarySharp } from 'react-icons/io5';

const About = () => {
  return (
    <section id="about" className="mt-32 lg:mt-24">
      <h5 className="section-subtitle">Get To Know</h5>
      <h2 className="section-title">About Me</h2>

      <div className="container grid grid-cols-1 lg:grid-cols-[35%_50%] lg:gap-[15%]">
        {/* Image */}
        <div
          className="w-full aspect-[1/1.33] rounded-[2rem] grid place-items-center lg:w-full w-[50%] mx-auto mb-8 lg:mb-0 md:w-[50%] md:mx-auto md:mb-16 sm:w-[65%] sm:mx-auto sm:mb-12"
          style={{
            background:
              'linear-gradient(45deg, transparent, #e0dcdc, transparent)',
          }}
        >
          <div className="rounded-[2rem] overflow-hidden rotate-[10deg] transition-all duration-[400ms] hover:rotate-0 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/me-about.jpg" alt="About Andres" />
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="grid grid-cols-2 gap-6 mb-8 sm:gap-4">
            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center transition-all duration-[400ms] hover:bg-transparent hover:border-primary cursor-default sm:p-6">
              <FaAward className="text-primary text-[1.4rem] mx-auto mb-4" />
              <h5 className="text-[0.95rem]">Experience</h5>
              <small className="text-[0.7rem] text-white/60">
                2+ Year Working
              </small>
            </article>

            <article className="bg-bg-variant border border-transparent rounded-2xl p-8 text-center transition-all duration-[400ms] hover:bg-transparent hover:border-primary cursor-default sm:p-6">
              <IoLibrarySharp className="text-primary text-[1.4rem] mx-auto mb-4" />
              <h5 className="text-[0.95rem]">Projects</h5>
              <small className="text-[0.7rem] text-white/60">
                10+ Completed
              </small>
            </article>
          </div>

          <p className="text-white/60 my-8 lg:my-4 sm:my-6 sm:text-center">
            I&apos;m a graduate of Kenzie Academy, where I studied the
            fundamentals of Java and the mindset of a Software Engineer.
            I&apos;ve also taught myself some HTML, CSS, and JavaScript. In my
            free time I enjoy dancing, making music, and learning to play the
            keyboard. I also like volunteering and helping others.
          </p>

          <p className="text-white/60 mb-8 sm:text-center">
            Currently improving my skills in Front-end and Back-end. Looking for
            a job as a Software Engineer as well.
          </p>

          <a href="#contact" className="btn btn-primary sm:mx-auto sm:block sm:w-max">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
