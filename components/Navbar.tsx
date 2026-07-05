'use client';

import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserTie, FaHandsHelping } from 'react-icons/fa';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

type NavId = '#' | '#about' | '#portfolio' | '#services' | '#contact';

const links: { href: string; id: NavId; icon: React.ReactNode }[] = [
  { href: '#', id: '#', icon: <AiOutlineHome /> },
  { href: '#about', id: '#about', icon: <FaUserTie /> },
  { href: '#portfolio', id: '#portfolio', icon: <BiBook /> },
  { href: '#services', id: '#services', icon: <FaHandsHelping /> },
  { href: '#contact', id: '#contact', icon: <BiMessageSquareDetail /> },
];

const Navbar = () => {
  const [active, setActive] = useState<NavId>('#');

  return (
    <nav className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-bg-variant px-7 py-3 rounded-full backdrop-blur-md md:bottom-8">
      {links.map(({ href, id, icon }) => (
        <a
          key={id}
          href={href}
          onClick={() => setActive(id)}
          className={`flex items-center justify-center p-3.5 rounded-full text-lg transition-all duration-300 no-underline hover:scale-110 ${
            active === id
              ? 'bg-primary text-bg'
              : 'text-white/60 hover:bg-black/30 hover:text-white'
          }`}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
