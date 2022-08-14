import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import About from '../components/About';
import BenefitsSection from '../components/Benefits';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import MainHero from '../components/MainHero';
import Navbar from '../components/Navbar';
import SocialProof from '../components/SocialProof';
import SupportSection from '../components/Support';
import TrialSection from '../components/Trial';
import Main from '../components/UI/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health</title>
        <meta name="description" content="Generated by create next app" />
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
