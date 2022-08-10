import React, { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h1
      className={`text-3xl font-semibold font-heading text-[#212121] ${className}`}
    >
      {children}
    </h1>
  );
};

Heading.defaultProps = {
  className: `  `,
};

export default Heading;
