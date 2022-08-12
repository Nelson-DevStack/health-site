import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import BenefitsSection from '../components/Benefits';
import MainHero from '../components/MainHero';
import Navbar from '../components/Navbar';
import SocialProof from '../components/SocialProof';
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

      <Main className="">
        <MainHero />
        <SocialProof />
        <BenefitsSection />
      </Main>
    </>
  );
};

export default Home;
