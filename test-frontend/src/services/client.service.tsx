import { AxiosResponse } from "axios";
import { api } from "./api";

interface ResponseAuth {
  access_token: string;
}

const createClientService = async (
  displayName: string,
  email: string,
  document: string,
  phone: string,
  roleId: number
) => {
  const response = await api.post<ResponseAuth>(`/user`, {
    displayName,
    email,
    document,
    phone,
    status:roleId,
  });

  return response;
};

const updateClientService = async (
    displayName: string,
    email: string,
    document: string,
    phone: string,
    roleId: number,
    id: string
  ) => {
    const response = await api.put<ResponseAuth>(`/user/${id}`, {
      displayName,
      email,
      document,
      phone,
      roleId,
    });
  
    return response;
  };

const getClientsService = async () => {
  const response = await api.get<Client[]>(`/user`);

  return response;
};

export { createClientService, getClientsService, updateClientService };
