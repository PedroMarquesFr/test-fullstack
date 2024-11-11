import React from "react";
import LinkStyled from "./ui/link";
import ColorCircle from "./ui/color-circle";
import { statusOptions } from "@/types/valueObjects";

interface PanelClientProps {
  client: Client;
}

const PanelClient: React.FC<PanelClientProps> = (props) => {
  const { client } = props;

  return (
    <section className="py-4 px-6 my-5 border border-slate-200 flex flex-wrap flex-col justify-between md:items-center md:flex-row">
      <aside className="py-2 w-[200px]">
        <p className="font-bold text-zinc-600">{client.displayName}</p>
        <p className=" text-zinc-500">{client.email}</p>
      </aside>
      <aside className="py-2 w-[200px]">
        <p className="font-bold text-zinc-600">{client.document}</p>
        <p className=" text-zinc-500">{client.phone}</p>
      </aside>
      <aside className="flex items-center py-2 pb-4 w-[200px]">
        <ColorCircle roleId={props.client.roleId-1}/>
        <p className="text-zinc-500">{statusOptions[props.client.roleId-1]}</p>
      </aside>
      <LinkStyled
        message="Editar"
        href={`/edit?nameValue=${client.displayName}&document=${client.document}&email=${client.email}&id=${client.id}&phone=${client.phone}&roleId=${client.roleId}`}
      />
    </section>
  );
};

export default PanelClient;
