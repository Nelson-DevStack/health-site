import Head from 'next/head';
import React from 'react';

type HeadProps = {
  title: string;
};

const HeadComponent = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="O Health é um site de uma empresa fictícia responsável por distribuir conhecimento através de manuais, guias, revistas e conteúdos online."
      />
      <meta name="author" content="Nelson Carvalho | Github: Nelson-DevStack" />
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
  );
};

export default HeadComponent;
