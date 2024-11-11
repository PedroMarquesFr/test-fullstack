import FormEditClient from "@/components/form-edit-client";
import Title from "@/components/ui/title";
import React from "react";

interface EditProps {
  searchParams: {
    nameValue: string;
    document: string;
    email: string;
    id: string;
    phone: string;
    roleId: string;
  };
}

const Edit: React.FC<EditProps> = ({ searchParams }) => {
  console.log(searchParams.nameValue)
  return (
    <section className="px-6 py-6 md:px-24 md:py-24">
      <Title />
      <h2 className="text-zinc-600 font-bold pt-8">Editar usuário</h2>
      <p className="text-zinc-500 pb-8">
        Informe os campos a seguir para editar o usuário:
      </p>
      <FormEditClient {...searchParams}/>
    </section>
  );
};

export default Edit;
