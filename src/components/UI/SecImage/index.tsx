import Image from 'next/image';
import React from 'react';

import Container from '../Container';

type SecImageProps = {
  sectionId: string;
  className?: string;
  children: React.ReactNode | JSX.Element;
  boxShadow?: boolean;
  imageLink: string;
  imageWidth?: number;
  imageHeight?: number;
};

const SecImage = ({
  sectionId,
  imageLink,
  imageWidth,
  imageHeight,
  className,
  boxShadow,
  children,
}: SecImageProps) => {
  return (
    <section
      className={`md:px-10 ${className}`}
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
          <Image
            src={imageLink}
            layout="responsive"
            width={imageWidth || 300}
            height={imageHeight || 200}
          />
        </div>
      </Container>
    </section>
  );
};

SecImage.defaultProps = {
  className: ' ',
  imageWidth: null,
  imageHeight: null,
  boxShadow: false,
};

export default SecImage;
