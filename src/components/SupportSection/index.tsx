import Image from 'next/image';
import React from 'react';

import Heading from '../UI/Heading';
import SecImage from '../UI/SecImage';
import Text from '../UI/Text';

const SupportSection = () => {
  const labelStyle = 'flex flex-col my-2';
  const inputStyle =
    'border text-lg my-1 rounded-md border-gray-300 p-1 outline-none focus:border-mainColor';

  return (
    <SecImage
      sectionId="contact"
      imageLink="/assets/support.svg"
      className="border-t"
    >
      <div>
        <Heading className="my-2">Suporte</Heading>
        <Text>Tem alguma dúvida? Entre em contato com o suporte 24h</Text>
      </div>

      <div className="">
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name" className={labelStyle}>
            Seu nome
            <input className={inputStyle} type="text" id="name" />
          </label>

          <label htmlFor="email" className={labelStyle}>
            Email
            <input className={inputStyle} type="email" id="email" />
          </label>

          <label htmlFor="email" className={labelStyle}>
            Sua dúvida ou mensagem:
            <input className={inputStyle} type="email" id="email" />
          </label>

          <button
            className="bg-secondaryColor py-2 text-white font-semibold tracking-wide text-md mt-2 transition duration-200 hover:bg-darkerOrange hover:scale-105"
            type="submit"
          >
            Entrar em contato
          </button>
        </form>

        <span className="block text-center mt-4 mb-2">Ou</span>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://google.com"
            className="rounded-full w-12 h-12 border shadow-md flex items-center justify-center relative hover:shadow-xl hover:scale-105"
          >
            <Image src="/assets/gmail-logo.svg" width={30} height={30} />
          </a>

          <a
            href="https://instagram.com"
            className="rounded-full w-12 h-12 border shadow-md flex items-center justify-center relative hover:shadow-xl hover:scale-105"
          >
            <Image src="/assets/instagram-logo.svg" width={30} height={30} />
          </a>
        </div>
      </div>
    </SecImage>
  );
};

export default SupportSection;
