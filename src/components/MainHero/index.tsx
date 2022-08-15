import Link from 'next/link';
import React from 'react';

import { mainColor } from '../../utils/colors';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const MainHero = () => {
  return (
    <section
      className="md:grid md:grid-cols-2 md:relative md:h-96 lg:min-h-[90vh] shadow-md"
      id="home"
    >
      <div className="bg-[url('/hero-image1.jpg')] md:order-2 w-full h-52 md:h-auto bg-cover bg-center md:absolute md:w-full inset-0 md:bg-fixed" />
      <Container className="md:col-span-1 relative md:flex md:items-center  z-10">
        <div className="w-full md:max-w-lg md:w-auto bg-white md:order-1 md:bg-transparent p-5">
          <Heading>
            Procura uma{' '}
            <span style={{ color: mainColor }}>Alimentação Saudável?</span>
          </Heading>
          <Text className="md:max-w-sm">
            Conheça nossas receitas e dicas para ser cada vez mais saudável.
          </Text>

          <button
            type="button"
            className="p-2 px-5 mt-4 rounded-sm text-slate-100 bg-mainColor"
          >
            <Link href="/">Conhecer</Link>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default MainHero;
