import React from 'react';

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Produto</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">App</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
