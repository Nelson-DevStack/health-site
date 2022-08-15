import React from 'react';

import Heading from '../UI/Heading';
import SecImage from '../UI/SecImage';
import Text from '../UI/Text';

const About = () => {
  const paragraphs = [
    'Fundada em 2005, a Health se originou após pesquisas que concluíram que o conhecimento sobre nutrição e alimentação serem feitas. A conclusão era que a nutrição e Saúde Alimentar não era lecionada para grande parte da população.',
    'Já formados, estudantes da Universiade XYZ fundaram essa empresa, que é responsável por distribuir o conhecimento de Nutrição para a população através de Manuais, Guias, Revistas e Conteúdo Online.',
  ];

  return (
    <SecImage
      sectionId="sobre"
      imageLink="/assets/health-lifestyle.svg"
      imageWidth={250}
      imageHeight={250}
    >
      <Heading className="mt-2 mb-5 md:mt-0 md:my-2 text-center md:text-left">
        Sobre a empresa
      </Heading>

      {paragraphs.map((paragraph, i) => (
        <Text className="my-5" key={i}>
          {paragraph}
        </Text>
      ))}
    </SecImage>
  );
};

export default About;
