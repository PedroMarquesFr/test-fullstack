import FormCreateClient from "@/components/form-create-client";
import Title from "@/components/ui/title";
import React from "react";

// import { Container } from './styles';

const Create: React.FC = () => {
  return (
    <section className="px-6 py-6 md:px-24 md:py-24">
      <Title />
      <h2 className="text-zinc-600 font-bold pt-8">Novo usuário</h2>
      <p className="text-zinc-500 pb-8">
        Informe os campos a seguir para criar novo usuário:
      </p>
      <FormCreateClient />
    </section>
  );
};

export default Create;
