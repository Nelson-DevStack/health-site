import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LogoLink = () => {
  return (
    <Link href="/">
      <span className="flex items-center gap-2 text-lg cursor-pointer">
        <Image src="/fruit-logo.svg" color="#2211ee" width={30} height={30} />
        <span className="text-mainColor font-semibold">Health</span>
      </span>
    </Link>
  );
};

export default LogoLink;
