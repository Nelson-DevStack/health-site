import React, { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={`text-4xl font-semibold font-heading text-[#313131] ${className}`}
    >
      {children}
    </h1>
  );
};

Heading.defaultProps = {
  className: `  `,
};

export default Heading;
