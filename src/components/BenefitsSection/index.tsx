import Image from 'next/image';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import img1 from '../../assets/fruits.jpg';
import { mainColor } from '../../utils/colors';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Showcase from '../UI/Showcase';
import Text from '../UI/Text';

const BenefitsSection = () => {
  return (
    <section className="w-full py-20" id="diferenca">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-heading font-semibold tracking-wide text-[#F27405] text-3xl">
            Fazendo a Diferença
          </h2>
          <Text className="max-w-prose text-center">
            Buscando melhorar a qualidade de vida das pessoas, oferecemos
            grandes vantagens no plano
          </Text>
        </div>

        <div>
          <Showcase
            image={img1}
            subject="inovação"
            title="Conteúdo Atualizado"
            text="Diariamente publicamos novos tópicos e guias em nossas revistas e no App. Não perca a chance de ficar por dentro das melhores dicas de Alimentação e Nutrição."
          />
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
