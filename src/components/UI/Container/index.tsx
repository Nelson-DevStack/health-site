import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`
        w-full h-full max-w-6xl mx-auto col-span-4 md:col-span-8 lg:col-span-12 px-4
        ${className}
      `}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: ` `,
};

export default Container;
