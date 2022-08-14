import Image from 'next/image';
import React from 'react';

import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const About = () => {
  const paragraph1 =
    'Fundada em 2005, a “Nome da Empresa” se originou após pesquisas que concluíram que o conhecimento sobre nutrição e alimentação foram feitas. A conclusão era que a nutrição e Saúde Alimentar não era lecionada para grande parte da população.';

  const paragraph2 =
    'Já formados, estudantes da Universiade XYZ fundaram a empresa “Nome da Empresa”, responsável por distribuir o conhecimento de Nutrição para a população através de Manuais, Guias, Revistas e Conteúdo Online.';

  return (
    <section className="py-10">
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div className="md:max-w-md">
          <Heading className="mt-2 mb-5 md:mt-0 md:mb-0 md:my-2 text-center md:text-left">
            Sobre a empresa
          </Heading>
          <Text className="mb-5">{paragraph1}</Text>
          <Text className="mt-5">{paragraph2}</Text>
        </div>
        <div className="relative w-full">
          <Image src="/app.svg" layout="responsive" width={300} height={200} />
        </div>
      </Container>
    </section>
  );
};

export default About;
