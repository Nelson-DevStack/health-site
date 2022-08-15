import React from 'react';

import LogoLink from '../LogoLink';
import Container from '../UI/Container';

const Footer = () => {
  const linkStyle = `text-lg cursor-pointer hover:underline`;

  return (
    <footer className="z-10 w-full py-10">
      <Container>
        <LogoLink />

        <div className="flex flex-col w-full mt-6 gap-5 md:flex-row md:gap-24">
          <ul>
            <h2 className="font-semibold text-lg font-text">Links</h2>
            <li>
              <a href="/" className={linkStyle}>
                Home
              </a>
            </li>
            <li className="my-1">
              <a href="#produto" className={linkStyle}>
                Produto
              </a>
            </li>
            <li className="my-1">
              <a href="#diferenca" className={linkStyle}>
                Diferença
              </a>
            </li>
            <li className="my-1">
              <a href="#sobre" className={linkStyle}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#app" className={linkStyle}>
                App
              </a>
            </li>
            <li className="my-1">
              <a href="#faq" className={linkStyle}>
                FAQ
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="font-semibold text-lg">Contato</h2>
            <li>
              <a href="/" className={linkStyle}>
                Instagram
              </a>
            </li>
            <li className="my-1">
              <a href="/" className={linkStyle}>
                Gmail
              </a>
            </li>
            <li className="my-1">
              <a href="/" className={linkStyle}>
                Facebook
              </a>
            </li>
          </ul>
          <ul>
            <h2 className="font-semibold text-lg">Privacidade</h2>
            <li>
              <a href="/" className={linkStyle}>
                Termos de Privacidade
              </a>
            </li>
            <li className="my-1">
              <a href="/" className={linkStyle}>
                Política de Dados
              </a>
            </li>
            <li className="my-1">
              <a href="/" className={linkStyle}>
                Nossa Segurança
              </a>
            </li>
            <li className="my-1">
              <a href="/" className={linkStyle}>
                Health Enterprise
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
