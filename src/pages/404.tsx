import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Footer from '../components/Footer';
import LogoLink from '../components/LogoLink';
import Container from '../components/UI/Container';
import Heading from '../components/UI/Heading';
import Text from '../components/UI/Text';

const Page404 = () => {
  return (
    <>
      <Head>
        <title>Health | Página não encontrada</title>
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#fafafa" />
      </Head>

      <header className="w-full h-16 col-span-4 md:col-span-8 lg:col-span-12 shadow-md fixed bg-white z-10">
        <Container className="h-full flex items-center">
          <LogoLink />
        </Container>
      </header>
      <main className="mt-4 col-span-12">
        <Container className="flex flex-col items-center max-h-fit py-20">
          <div className="relative h-60 w-full mb-8">
            <Image src="/assets/not-found.svg" layout="fill" />
          </div>

          <div>
            <Heading className="font-medium mt-20 text-center">
              Erro 404: Essa página não foi encontrada
            </Heading>
            <Text className="mt-1 text-center">
              Não se preocupe, clique no link abaixo para voltar para Página
              Inicial
            </Text>
          </div>

          <div className="mt-4">
            <a
              href="/"
              className="text-blue-500 hover:underline text-lg cursor-pointer"
            >
              Voltar para a página Inicial
            </a>
          </div>
        </Container>

        <Footer />
      </main>
    </>
  );
};

export default Page404;
