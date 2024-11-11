import React from "react";
import Image from "next/image";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <section className="bg-[#4f4f4f] flex justify-center p-4">
      <Image
        src="https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v11"
        alt="oul logo"
        width={100}
        height={100}
      />
    </section>
  );
};

export default Header;
