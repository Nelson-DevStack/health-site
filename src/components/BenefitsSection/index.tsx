import Image from 'next/image';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import { mainColor } from '../../utils/colors';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const BenefitsSection = () => {
  return (
    <section className="w-full">
      <div className="relative -mb-5 sm:-mb-10 lg:-mb-30">
        <Image
          src="/assets/wave-orange-top.svg"
          layout="responsive"
          width={300}
          height={70}
        />
      </div>

      <div className="w-full bg-secondaryColor">
        <div className="w-full h-full absolute bg-[url('/assets/health-word-pattern.png')]  bg-repeat bg-center bg-contain opacity-80 h-[100%] " />
        <Container>
          <div className="w-full py-20 lg:grid lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-5 max-w-lg mx-auto">
              <div className="relative ml-20 w-60 h-40 self-end">
                <Image
                  src="/assets/fruits.jpg"
                  layout="fill"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="relative w-60 h-40 self-start">
                <Image
                  src="/assets/food-white-bg.jpg"
                  layout="fill"
                  className="rounded-lg left-0 shadow-xl"
                />
              </div>
            </div>

            <div className="mt-8 max-w-sm mx-auto">
              <Heading className="!text-white text-center my-4">
                Fazendo a Diferença
              </Heading>
              <div className="bg-white rounded-md py-4 px-4">
                <Text>
                  Com anos de experiência, técnica e estudo, nossa empresa
                  oferece os melhores manuais e guias de Saúde Alimentar.
                </Text>

                <ul className="mt-4">
                  <li className="flex gap-2 leading-5 my-3">
                    <div>
                      <BsCheck2Circle fontSize={20} color={mainColor} />
                    </div>
                    <span>Conteúdo atualizado diariamente</span>
                  </li>
                  <li className="flex gap-2 items-center leading-5 my-3">
                    <div>
                      <BsCheck2Circle fontSize={20} color={mainColor} />
                    </div>
                    <span>Lista de Exercícios</span>
                  </li>
                  <li className="flex gap-2 my-3 leading-5">
                    <div>
                      <BsCheck2Circle fontSize={20} color={mainColor} />
                    </div>
                    <span>Guias e Receitas de Alimentação Saudável</span>
                  </li>
                  <li className="flex gap-2 items-center leading-5 my-3">
                    <div>
                      <BsCheck2Circle fontSize={20} color={mainColor} />
                    </div>
                    <span>App Exclusivo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative -mt-1 md:-mt-5">
        <Image
          src="/assets/wave-orange-bottom.svg"
          layout="responsive"
          width={300}
          height={70}
          className="-scale-y-100 -scale-x-100"
        />
      </div>
    </section>
  );
};

export default BenefitsSection;
