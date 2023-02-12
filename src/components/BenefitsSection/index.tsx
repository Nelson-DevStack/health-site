import React from 'react';

import img3 from '../../assets/athletes.jpg';
import img2 from '../../assets/food-white-bg.jpg';
import img1 from '../../assets/fruits.jpg';
import Container from '../UI/Container';
import Showcase from '../UI/Showcase';
import Text from '../UI/Text';

const BenefitsSection = () => {
  const showcaseData = [
    {
      image: img1,
      subject: 'inovação',
      title: 'Conteúdo Atualizado',
      text: 'Diariamente publicamos novos tópicos e guias em nossas revistas e no App. Não perca a chance de ficar por dentro das melhores dicas de Alimentação e Nutrição.',
      display: 0,
    },
    {
      image: img2,
      subject: 'saúde',
      title: 'Receitas Saudáveis',
      text: 'Nossos Guias de Alimentação contam com mais de 200 receitas que vão te fazer ter uma boa saúde e uma alimentação saúdavel.',
      display: 1,
    },
    {
      image: img3,
      subject: 'compromisso',
      title: 'App Exclusivo',
      text: 'Confira nosso App Exclusivo, que monitora saúde e oferece instruções para balancear sua dieta e guias de exercícios físicos com eficácia garantida.',
      display: 0,
    },
  ];

  return (
    <section className="w-full py-20" id="diferenca">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <h2 className="font-heading font-semibold tracking-wide text-[#F27405] text-3xl text-center">
            Fazendo a Diferença
          </h2>
          <Text className="max-w-prose text-center text-base">
            Buscando melhorar a qualidade de vida das pessoas, oferecemos
            grandes vantagens no plano
          </Text>
        </div>

        <div>
          {showcaseData.map((element) => (
            <Showcase
              key={element.title}
              image={element.image}
              subject={element.subject}
              title={element.title}
              text={element.text}
              display={element.display}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
