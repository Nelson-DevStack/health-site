import React from 'react';

import Container from '../UI/Container';

const Navbar = () => {
  return (
    <header className="w-full h-16 col-span-4 md:col-span-8 lg:col-span-12 bg-white z-100 shadow-md fixed">
      <Container>
        <nav className="flex h-full justify-between items-center">
          <a href="/">Health</a>

          <ul className="flex space-x-6">
            <li>
              <a href="/">Link1</a>
            </li>
            <li>
              <a href="/">Link2</a>
            </li>
            <li>
              <a href="/">Link3</a>
            </li>
            <li>
              <a href="/">Link4</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
