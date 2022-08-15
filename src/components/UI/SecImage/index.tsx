import Image from 'next/image';
import React from 'react';

import Container from '../Container';

type SecImageProps = {
  sectionId: string;
  className?: string;
  children: React.ReactNode | JSX.Element;
  imageLink: string;
  boxShadow?: boolean;
};

const SecImage = ({
  sectionId,
  imageLink,
  className,
  boxShadow,
  children,
}: SecImageProps) => {
  return (
    <section
      className={`py-24 md:px-10 ${className}`}
      id={sectionId}
      style={{
        boxShadow: boxShadow
          ? 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
          : '  ',
      }}
    >
      <Container className="grid justify-center gap-10 md:grid-cols-2 items-center">
        <div className="max-w-md">{children}</div>

        <div className="relative w-full">
          <Image src={imageLink} layout="responsive" width={300} height={200} />
        </div>
      </Container>
    </section>
  );
};

SecImage.defaultProps = {
  className: ' ',
  boxShadow: false,
};

export default SecImage;
