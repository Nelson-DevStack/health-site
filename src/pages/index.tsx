import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import About from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import Navbar from '../components/Navbar';
import SocialProof from '../components/SocialProofSection';
import SupportSection from '../components/SupportSection';
import TrialSection from '../components/TrialSection';
import Main from '../components/UI/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health</title>
        <meta
          name="description"
          content="O Health é um site de uma empresa fictícia responsável por distribuir conhecimento através de manuais, guias, revistas e conteúdos online."
        />
        <meta
          name="author"
          content="Nelson Carvalho | Github: Nelson-DevStack"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Main>
        <MainHero />
        <SocialProof />
        <BenefitsSection />
        <About />
        <TrialSection />
        <FaqSection />
        <SupportSection />
        <Footer />
      </Main>
    </>
  );
};

export default Home;
