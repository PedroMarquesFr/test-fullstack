import React from "react";
import ClientsPanelWrapper from "./panel-clients-panel-wrapper";
import LinkStyled from "./ui/link";
import Title from "./ui/title";

const PanelClients: React.FC = async () => {
  try {
    const usersResponse = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
      method: "GET",
    });
    if (!usersResponse.ok) {
      console.error("Error fetching users:", usersResponse.statusText);
      return <p>Erro ao recuperar usuários: {usersResponse.statusText}</p>;
    }
    const apiResponse: Client[] = await usersResponse.json();
    console.log(apiResponse);
    return (
      <section className="px-6 pt-11 md:px-20">
        <Title />
        <section className="md:flex items-center justify-between md:px-4 py-6">
          <aside className="pb-2 md:pb-0">
            <h3 className="text-zinc-600 font-bold">Listagem de usuários</h3>
            <p className="text-zinc-500">
              Escolha um cliente para visualizar os detalhes
            </p>
          </aside>
          <LinkStyled message="Novo cliente" href="/create" />
        </section>
        <ClientsPanelWrapper clients={apiResponse} />
      </section>
    );
  } catch (error) {
    console.error(error)
    return <p>Verifique se a api esta funcionando corretamente</p>;
  }
};

export default PanelClients;
