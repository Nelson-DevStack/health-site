import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import Text from '../Text';

type AccordionItem = {
  id: number | string;
  question: string;
  answer: string;
};

type AccordionProps = {
  accordionItems: AccordionItem[];
};

const Accordion = ({ accordionItems }: AccordionProps) => {
  const [showContent, setShowContent] = useState(false);
  const [accordionId, setAccordionId] = useState<string | number>(0);

  const handleAccordionClick = (id: string | number) => {
    setShowContent(true);
    setAccordionId(id);
  };

  return (
    <div className="mt-8">
      {accordionItems.map((item) => (
        <div className="border border-slate-300 rounded-md my-4" key={item.id}>
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
  );
};

export default Accordion;
