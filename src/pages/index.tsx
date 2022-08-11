import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Container from '../components/UI/Container';
import Heading from '../components/UI/Heading';
import Text from '../components/UI/Text';
import { mainColor } from '../utils/colors';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main className={`bg-[url('/hero-image1.jpg')] bg-cover py-32 md:py-40`}>
        <Container className="grid md:grid-cols-2">
          <div className="bg-white/80  md:bg-transparent rounded-lg p-5 md:p-0">
            <Heading>
              Quer uma{' '}
              <span style={{ color: mainColor }}>Alimentação Saudável</span>?
            </Heading>
            <Text>
              Conheça nossas receitas e dicas para ser cada vez mais saudável.
            </Text>

            <button
              type="button"
              className={`p-2 px-5 mt-4 rounded-sm text-slate-100 bg-[${mainColor}]`}
            >
              <Link href="/">Conhecer</Link>
            </button>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Home;
