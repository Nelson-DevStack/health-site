/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import Container from '../UI/Container';
import Heading from '../UI/Heading';
import Text from '../UI/Text';

const FaqSection = () => {
  // const [showContent, setShowContent] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [accordionId, setAccordionId] = useState<string | number>(0);
  const boxStyle = `border rounded-md bg-gray-100 my-4 cursor-pointer transition transition-100 h-full flex items-center flex-col`;
  const accordionItems = [
    {
      id: 1,
      question: 'Por quanto tempo é o período de testes do App?',
      answer: 'O período de testes fica disponível por 30 dias',
    },
    {
      id: 2,
      question: 'Como posso entrar em contato com a empresa?',
      answer: 'O período de testes fica disponível por 30 dias',
    },
    {
      id: 3,
      question: 'Quais são as formas de pagamento?',
      answer: 'O período de testes fica disponível por 30 dias',
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

  return (
    <section>
      <Container className="py-24">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <Heading>FAQ e Dúvidas Recentes</Heading>
          <Text>Confira as perguntas feitas com frequência</Text>

          <div className="mt-8">
            <button onClick={() => setShowContent(!showContent)} type="button">
              Show
            </button>
            {/* <div className="bg-red-200 transition">abc</div> */}
            {/* <div
              className={
                showContent
                  ? 'bg-red-200 transition duration-500 overflow-hidden max-h-sm'
                  : 'transition duration-500 opacity-0 overflow-hidden max-h-0'
              }
            > */}
            {/* <div
              className={`${'bg-red-200 transition duration-500 overflow-hidden max-h-8'} ${
                showContent
                  ? 'text-slate-800'
                  : 'transition transition duration-500 opacity-0 max-h-0'
              }`}
            >
              abc
            </div>
            <div className={`${boxStyle}`} onClick={handleShowContent}>
              <div className="p-3">
                <Text>+ Por quanto tempo é o período de testes do App?</Text>
              </div>
              <div
                className={`bg-white mx-auto w-full p-3 ${
                  showContent ? 'opacity-1' : 'opacity-0 max-h-0 p-0'
                }`}
              >
                <Text>O período de testes fica disponível por 30 dias</Text>
              </div>
            </div>
            <div className={boxStyle} onClick={handleShowContent}>
              <div className="p-3">
                <Text>+ Como posso entrar em contato com a empresa?</Text>
              </div>
              <div
                className={`bg-white mx-auto w-full p-3 ${
                  showContent ? 'opacity-1' : 'opacity-0 max-h-0 p-0'
                }`}
              >
                <Text>O período de testes fica disponível por 30 dias</Text>
              </div>
            </div>
            <div className={boxStyle} onClick={handleShowContent}>
              <div className="p-3">
                <Text>+ Quais são as formas de pagamento?</Text>
              </div>
              <div
                className={`bg-white mx-auto w-full p-3 ${
                  showContent ? 'opacity-1' : 'opacity-0 max-h-0 p-0'
                }`}
              >
                <Text>O período de testes fica disponível por 30 dias</Text>
              </div>
            </div>
            <div className={boxStyle} onClick={handleShowContent}>
              <div className="p-3">
                <Text>+ Quais são as formas de pagamento?</Text>
              </div>
              <div
                className={`bg-white mx-auto w-full p-3 ${
                  showContent ? 'opacity-1' : 'opacity-0 max-h-0 p-0'
                }`}
              >
                <Text>O período de testes fica disponível por 30 dias</Text>
              </div>
            </div> */}

            {accordionItems.map((item) => (
              <div className={boxStyle}>
                <button type="button" onClick={handleCloseAccordion}>
                  Close
                </button>
                <div className="p-3">
                  <button
                    type="button"
                    onClick={() => handleShowContent(item.id)}
                  >
                    +
                  </button>
                  <Text>+ {item.question}</Text>
                </div>
                {/* <div
                  className={`bg-white mx-auto w-full p-3 ${
                    showContent ? 'opacity-1' : 'opacity-0 max-h-0 p-0'
                  }`}
                > */}

                <div
                  className={`bg-white mx-auto w-full p-3 ${
                    showContent && accordionId === item.id
                      ? 'opacity-1'
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
