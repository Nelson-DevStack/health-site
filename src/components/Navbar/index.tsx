/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

import LogoLink from '../LogoLink';
import Container from '../UI/Container';

const Navbar = () => {
  const linkStyle = `cursor-pointer text-xl lg:text-md`;
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white w-full h-16 col-span-4 md:col-span-8 lg:col-span-12 z-[999] shadow-md z-100 fixed">
      <Container>
        <nav className="w-full flex h-full justify-between items-center ">
          <LogoLink />

          <button
            type="button"
            className={`text-2xl flex items-center justify-center transition duration-500 transition-100 max-h-0 lg:hidden ${
              showMenu ? 'max-h-0' : 'max-h-10'
            }`}
            onClick={handleMenuClick}
          >
            {showMenu ? <HiX /> : <HiMenuAlt3 />}
          </button>

          <ul
            className={`flex flex-col items-center pt-12 gap-5 w-full bg-white/75 absolute min-h-screen min-w-screen left-0 right-0 top-16 shadow-md backdrop-blur-lg translate-x-full transition duration-500 lg:min-w-none lg:translate-x-0 lg:static lg:min-h-fit lg:flex-row lg:w-auto lg:pt-0 lg:shadow-none transition-transform ${
              showMenu ? 'translate-x-0' : ''
            }`}
          >
            <li>
              <Link
                to="home"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="produto"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                Produto
              </Link>
            </li>
            <li>
              <Link
                to="produto"
                duration={500}
                spy
                smooth
                offset={400}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                Diferença
              </Link>
            </li>
            <li>
              <Link
                to="sobre"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="app"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                App
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                duration={500}
                spy
                smooth
                offset={-80}
                className={linkStyle}
                activeClass="text-mainColor font-medium"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
