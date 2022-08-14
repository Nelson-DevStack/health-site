import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Container from '../UI/Container';

const Footer = () => {
  return (
    <footer className="z-10 w-full py-10">
      <Container>
        <Link href="/">Health</Link>

        <div className="flex flex-col w-full mt-6 gap-5 md:flex-row md:gap-20">
          <ul>
            <h2 className="font-semibold text-lg">Links</h2>
            <li>
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="font-semibold text-lg">Contato</h2>
            <li>
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="font-semibold text-lg">Privacidade</h2>
            <li>
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="/" className="text-lg">
                Home
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
