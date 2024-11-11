"use client";

import * as React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { cn } from "@/lib/utils";
import LinkStyled from "./ui/link";
import Button from "./ui/button";
import { useMask } from "@react-input/mask";
import { toast } from "react-toastify";
import { createClientService } from "@/services/client.service";
import { statusOptions } from "@/types/valueObjects";
import { useRouter } from "next/navigation"; 

interface FormValues {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  status: string;
}

const FormCreateClient: React.FC = () => {
  const router = useRouter();
  const inputRefCPF = useMask({
    mask: "___.___.___-__",
    replacement: { _: /\d/ },
  });
  const inputRefPhone = useMask({
    mask: "(__) ____-____",
    replacement: { _: /\d/ },
  });
  const methods = useForm<FormValues>({
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      telefone: "",
      status: "Desativado",
    },
  });
  const handleSubmit = async (
    cpf: string,
    nome: string,
    email: string,
    status: number,
    telefone: string
  ) => {
    try {
      const response = await createClientService(
        nome,
        email,
        cpf,
        telefone,
        status
      );
      console.log(response);
      toast.success("Usuário criado com sucesso", {
        position: "bottom-right",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
      // @ts-ignore
      toast.error(error?.response?.data?.message, {
        position: "bottom-right",
      });
    }
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { cpf, email, nome, status, telefone } = data;
    if (!cpf || !email || !nome || !status || !telefone) {
      return toast.error(
        "Certifique-se de que todos os campos estão preenchidos corretamente",
        {
          position: "bottom-right",
        }
      );
    }
    handleSubmit(cpf, nome, email, parseInt(status), telefone);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormItem>
          <FormField
            name="nome"
            render={({ field }) => (
              <>
                <FormControl>
                  <input
                    type="text"
                    className={
                      "w-64 h-10 border border-zinc-3 00 rounded p-2 my-2"
                    }
                    {...field}
                    placeholder="Nome"
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </FormItem>

        <FormItem>
          <FormField
            name="email"
            render={({ field }) => (
              <>
                <FormControl>
                  <input
                    type="email"
                    className={
                      "w-64 h-10 border border-zinc-3 00 rounded p-2 my-2"
                    }
                    {...field}
                    placeholder="E-mail"
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </FormItem>

        <FormItem>
          <FormField
            name="cpf"
            render={({ field }) => (
              <>
                <FormControl>
                  <input
                    type="text"
                    className={
                      "w-64  h-10 border border-zinc-3 00 rounded p-2 my-2"
                    }
                    {...field}
                    ref={inputRefCPF}
                    placeholder="CPF"
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </FormItem>

        <FormItem>
          <FormField
            name="telefone"
            render={({ field }) => (
              <>
                <FormControl>
                  <input
                    type="tel"
                    className={
                      "w-64 h-10 border border-zinc-3 00 rounded p-2 my-2"
                    }
                    {...field}
                    ref={inputRefPhone}
                    placeholder="Telefone"
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </FormItem>

        <FormItem>
          <FormField
            name="status"
            render={({ field }) => (
              <>
                <FormControl>
                  <select
                    className={
                      "w-64  h-10 border border-zinc-3 00 rounded p-2 my-2"
                    }
                    {...field}
                  >
                    {statusOptions.map((option, index) => (
                      <option key={option} value={index + 1}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </>
            )}
          />
        </FormItem>
        <div className="pt-10">
          <Button message="Criar" />
          <LinkStyled message="Voltar" href="/" />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormCreateClient;
