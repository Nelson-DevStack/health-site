import React, { ReactNode } from 'react';

type TextProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};

const Text = ({ className, children }: TextProps) => {
  return (
    <p
      className={`text-lg tracking-wide leading-6 font-text text-[#212121] ${className}`}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {
  className: `  `,
};

export default Text;
