import Image from 'next/image';
import React from 'react';

import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const SupportSection = () => {
  const labelStyle = 'flex flex-col my-2';
  const inputStyle =
    'border text-lg my-1 rounded-md border-gray-300 p-1 outline-none focus:border-mainColor';

  return (
    <section
      className="py-10 md:px-10"
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}
    >
      <Container className="grid justify-center gap-10 md:grid-cols-2 items-center">
        <div className="max-w-md">
          <div>
            <Heading>Suporte</Heading>
            <Text>Tem alguma dúvida? Entre em contato com o suporte 24h</Text>
          </div>

          <div className="">
            <form
              className="flex flex-col"
              onSubmit={(e) => e.preventDefault()}
            >
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
                className="bg-secondaryColor py-2 text-white font-semibold tracking-wide text-md mt-2"
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
                <Image src="/gmail-logo.svg" width={30} height={30} />
              </a>

              <a
                href="https://instagram.com"
                className="rounded-full w-12 h-12 border shadow-md flex items-center justify-center relative hover:shadow-xl hover:scale-105"
              >
                <Image src="/instagram-logo.svg" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="/support.svg"
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
      </Container>
    </section>
  );
};
export default SupportSection;
