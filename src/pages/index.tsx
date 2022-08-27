import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import About from '../components/AboutSection';
import BenefitsSection from '../components/BenefitsSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import HeadComponent from '../components/Head';
import MainHero from '../components/MainHero';
import Navbar from '../components/Navbar';
import SocialProof from '../components/SocialProofSection';
import SupportSection from '../components/SupportSection';
import TrialSection from '../components/TrialSection';
import Main from '../components/UI/Main';

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title="Health" />

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
