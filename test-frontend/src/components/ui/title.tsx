import { User } from "lucide-react";
import React from "react";


const Title: React.FC = () => {
  return (
    <>
    <aside className="flex items-center">
      <User className="w-8 h-8 text-zinc-600" />
      <h1 className="text-2xl pl-3 text-center text-zinc-600">
        Painel de clientes
      </h1>
    </aside>
    <div className="w-full border-b-2 border-zinc-200 pt-4"></div>
    </>
  );
};

export default Title;
