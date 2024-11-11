import React from "react";
import PanelClient from "./panel-client";

interface ClientsPanelWrapperProps {
  clients: Client[];
}

const ClientsPanelWrapper: React.FC<ClientsPanelWrapperProps> = (props) => {
  return (
    <section>
      {props.clients.map((client, index) => (
        <PanelClient client={client} key={index}/>
      ))}
      <p>Exibindo {props.clients.length} clientes</p>
    </section>
  );
};

export default ClientsPanelWrapper;
