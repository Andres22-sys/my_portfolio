import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-center text-[0.9rem] mt-28">
      <a href="#" className="inline-block mb-8 text-bg hover:text-bg-variant">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/mylogo-black.png"
          alt="Logo"
          className="w-20 h-auto mx-auto"
        />
      </a>

      <ul className="flex justify-center gap-8 mx-auto mb-12">
        <li>
          <a href="/legal" className="text-bg hover:text-bg-variant">
            Legal
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-16">
        <a
          href="https://www.facebook.com/andrz.domngz/"
          target="_blank"
          rel="noreferrer"
          className="bg-bg text-white p-3 rounded-xl flex items-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:text-bg hover:border-bg"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/andrz_dom/"
          target="_blank"
          rel="noreferrer"
          className="bg-bg text-white p-3 rounded-xl flex items-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:text-bg hover:border-bg"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/adominguezl22"
          target="_blank"
          rel="noreferrer"
          className="bg-bg text-white p-3 rounded-xl flex items-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:text-bg hover:border-bg"
        >
          <IoLogoTwitter />
        </a>
      </div>

      <div className="text-bg">
        <small>&copy; Andres Dominguez. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
