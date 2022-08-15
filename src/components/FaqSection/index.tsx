import React from 'react';

import Accordion from '../UI/Accordion';
import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const FaqSection = () => {
  const accordionItems = [
    {
      id: 1,
      question: 'Por quanto tempo é o período de testes do App?',
      answer: 'O período de testes fica disponível por 30 dias',
    },
    {
      id: 2,
      question: 'Como posso entrar em contato com a empresa?',
      answer: 'Entre em contato pelo Suporte no site do Health',
    },
    {
      id: 3,
      question: 'Quais são as formas de pagamento?',
      answer: 'Aceitamos cartões de crédito, débito e PIX',
    },
  ];

  return (
    <section id="faq">
      <Container className="py-24">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <Heading>FAQ e Dúvidas Recentes</Heading>
          <Text>Confira as perguntas feitas com frequência</Text>
          <Accordion accordionItems={accordionItems} />
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
