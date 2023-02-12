import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Text from '../Text';

type ShowcaseProps = {
  image: string | StaticImageData;
  subject: string;
  title: string;
  text: string;
  display: number;
  className?: string;
};

const Showcase = ({
  image,
  subject,
  title,
  text,
  className,
  display,
}: ShowcaseProps) => {
  return (
    <div
      className={`grid md:grid-cols-2 items-center gap-16 my-10 ${className}`}
    >
      <div
        className={`border max-w-md w-full ${
          display === 1 ? 'order-2' : 'order-1 ml-auto'
        }`}
      >
        <Image src={image} className="rounded-md" />
      </div>
      <div
        className={`mt-5 md:mt-0 max-w-md ##mx-auto border ${
          display === 1 ? 'order-1 ml-auto mr-0' : 'order-2'
        }`}
      >
        <h3 className="text-[#F27405] uppercase tracking-wide">{subject}</h3>
        <h2 className="text-[#313131] font-heading font-semibold text-3xl">
          {title}
        </h2>
        <Text>{text}</Text>
        <div className="mt-4">
          <button
            className="rounded-full py-3 px-8 bg-mainColor text-white font-medium font-text"
            type="button"
          >
            Participar
          </button>
        </div>
      </div>
    </div>
  );
};

Showcase.defaultProps = {
  className: ' ',
};

export default Showcase;
