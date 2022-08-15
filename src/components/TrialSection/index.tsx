import Image from 'next/image';
import React from 'react';

import Heading from '../UI/Heading';
import Text from '../UI/Text';

const TrialSection = () => {
  const labelStyle = 'flex flex-col my-2';
  const inputStyle =
    'border text-lg my-1 rounded-md border-gray-300 p-1 outline-none focus:border-mainColor';

  return (
    <section
      id="app"
      className="grid md:grid-cols-2 gap-10"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
    >
      <div className="my-10 md:order-2 max-w-xs px-5  md:max-w-md mx-auto self-start py-10 md:mx-0">
        <Heading>
          Assine por um mês <span className="text-mainColor">grátis</span>
        </Heading>

        <Text className="my-2">
          Use o nosso App por 30 dias grátis e receba receitas diariamente:
        </Text>

        <form
          className="flex flex-col max-w-md"
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

          <button
            className="bg-mainColor py-2 text-white font-semibold tracking-wide text-md mt-2"
            type="submit"
          >
            Experimentar
          </button>
        </form>
      </div>

      <div className="relative w-full h-[31rem] border md:order-1">
        <Image src="/food.jpg" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
};

export default TrialSection;
