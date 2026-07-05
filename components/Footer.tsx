import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { IoArrowUpOutline } from 'react-icons/io5';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Projects', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
];

const socials = [
  {
    icon: <BsLinkedin />,
    href: 'https://www.linkedin.com/in/andresdominguezdev/',
    label: 'LinkedIn',
  },
  {
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com/andrz.domngz/',
    label: 'Facebook',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/andrz_dom/',
    label: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    href: 'https://twitter.com/adominguezl22',
    label: 'Twitter',
  },
];

const socialLinkClasses =
  'bg-bg text-white p-3 rounded-xl flex items-center border border-transparent transition-all duration-[400ms] hover:bg-transparent hover:text-bg hover:border-bg hover:-translate-y-1 hover:scale-110';

const Footer = () => {
  return (
    <footer className="bg-primary mt-28 pt-16 text-bg">
      <div className="container grid grid-cols-1 gap-10 pb-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="inline-block mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/mylogo-black.png"
              alt="Logo"
              className="w-20 h-auto"
            />
          </Link>
          <p className="text-bg/70 text-sm max-w-[16rem]">
            Full-Stack Engineer building clean, functional, and user-focused
            web experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-medium mb-4">Quick Links</h5>
          <ul className="flex flex-col gap-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-bg/70 hover:text-bg text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center md:items-start">
          <h5 className="font-medium mb-4">Let&apos;s Connect</h5>
          <a
            href="mailto:adominguezl800@gmail.com"
            className="text-bg/70 hover:text-bg text-sm flex items-center gap-2 mb-5"
          >
            <HiOutlineMail /> adominguezl800@gmail.com
          </a>
          <div className="flex gap-3">
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={socialLinkClasses}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-bg/20">
        <div className="container flex flex-col-reverse items-center justify-between gap-4 pt-6 pb-28 text-xs text-bg/70 md:flex-row md:pb-24">
          <small>
            &copy; {new Date().getFullYear()} Andres Dominguez. All rights
            reserved.
          </small>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="text-bg/70 hover:text-bg">
              Legal
            </Link>
            <a
              href="#"
              className="flex items-center gap-1 text-bg/70 hover:text-bg"
            >
              Back to top <IoArrowUpOutline />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
