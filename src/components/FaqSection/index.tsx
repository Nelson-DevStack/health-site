import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const FaqSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [accordionId, setAccordionId] = useState<string | number>(0);
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

  const handleShowContent = (id: string | number) => {
    setShowContent(true);
    setAccordionId(id);
  };

  const handleCloseAccordion = () => {
    setShowContent(false);
    setAccordionId(0);
  };

  const handleAccordionClick = (id: string | number) => {
    if (showContent) {
      handleCloseAccordion();
    }

    handleShowContent(id);
    setAccordionId(id);
  };

  return (
    <section>
      <Container className="py-24">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <Heading>FAQ e Dúvidas Recentes</Heading>
          <Text>Confira as perguntas feitas com frequência</Text>

          <div className="mt-8">
            {accordionItems.map((item) => (
              <div
                className="border border-slate-300 rounded-md my-4"
                key={item.id}
              >
                <button
                  type="button"
                  onClick={() => handleAccordionClick(item.id)}
                  className={`w-full p-4  border-b transition rounded-t-md text-gray-900 text-lg font-medium hover:bg-slate-200 flex items-center justify-between gap-4 text-start ${
                    accordionId === item.id ? 'bg-slate-200' : 'bg-slate-50'
                  }`}
                >
                  <h2>{item.question}</h2>
                  <AiFillCaretDown />
                </button>
                <div
                  className={`${
                    showContent && accordionId === item.id
                      ? 'opacity-1 p-4'
                      : 'opacity-0 max-h-0 p-0'
                  }`}
                >
                  <Text>{item.answer}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
