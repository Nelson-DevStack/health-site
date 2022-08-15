import React from 'react';
import { Link } from 'react-scroll';

import LogoLink from '../LogoLink';
import Container from '../UI/Container';

const Navbar = () => {
  return (
    <header className="bg-white w-full h-16 col-span-4 md:col-span-8 lg:col-span-12 z-[999] shadow-md z-100 fixed">
      <Container>
        <nav className="w-full flex h-full justify-between items-center">
          <LogoLink />

          <ul className="flex space-x-6">
            <li>
              <Link
                to="home"
                duration={500}
                spy
                smooth
                offset={-80}
                // className="after:border after:border-5 after:border-mainColor flex flex-col relative after:absolute after:w-full after:top-6"
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
                activeClass="text-mainColor font-medium"
              >
                Produto
              </Link>
            </li>
            <li>
              <Link
                to="sobre"
                duration={500}
                spy
                smooth
                offset={-80}
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
