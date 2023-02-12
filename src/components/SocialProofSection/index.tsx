import React from 'react';
import { BsBook } from 'react-icons/bs';
import { GrYoga } from 'react-icons/gr';
import { IoIosRestaurant } from 'react-icons/io';

import Container from '../UI/Container';

const SocialProof = () => {
  return (
    <section className="w-full py-20" id="produto">
      <Container className="flex flex-col items-center justify-center gap-10 md:gap-16 md:flex-row">
        <div className="flex flex-col items-center">
          <BsBook fontSize={30} />
          <span className="text-mainColor text-lg font-medium">+5,000</span>
          <p>Revistas Vendidas</p>
        </div>
        <div className="flex flex-col items-center relative md:bottom-3">
          <IoIosRestaurant fontSize={40} />
          <span className="text-mainColor text-xl font-medium">+200</span>
          <p className="text-lg">Receitas e Pratos</p>
        </div>
        <div className="flex flex-col items-center">
          <GrYoga fontSize={30} />
          <span className="text-mainColor text-lg font-medium">+2,000</span>
          <p>Clientes saudáveis </p>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
