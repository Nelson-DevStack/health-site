import React from 'react';

import Heading from '../UI/Heading';
import SecImage from '../UI/SecImage';
import Text from '../UI/Text';

const About = () => {
  const paragraph1 =
    'Fundada em 2005, a “Nome da Empresa” se originou após pesquisas que concluíram que o conhecimento sobre nutrição e alimentação foram feitas. A conclusão era que a nutrição e Saúde Alimentar não era lecionada para grande parte da população.';

  const paragraph2 =
    'Já formados, estudantes da Universiade XYZ fundaram a empresa “Nome da Empresa”, responsável por distribuir o conhecimento de Nutrição para a população através de Manuais, Guias, Revistas e Conteúdo Online.';

  return (
    <SecImage sectionId="sobre" imageLink="/assets/health-lifestyle.svg">
      <Heading className="mt-2 mb-5 md:mt-0 md:my-2 text-center md:text-left">
        Sobre a empresa
      </Heading>
      <Text className="mb-5">{paragraph1}</Text>
      <Text className="mt-5">{paragraph2}</Text>
    </SecImage>
  );
};

export default About;
