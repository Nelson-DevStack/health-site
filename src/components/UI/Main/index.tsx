import React, { ReactNode } from 'react';

type MainProps = {
  children: ReactNode | JSX.Element;
  className?: string;
};

const Main = ({ className, children }: MainProps) => {
  return (
    <main
      className={`mt-16 col-span-4 md:col-span-8 lg:col-span-12 ${className}`}
    >
      {children}
    </main>
  );
};

Main.defaultProps = {
  className: ` `,
};

export default Main;
