import { api } from "../client/api";
import type { UpdateUsuarioRequest } from "../types/usuario";

export const usuarioService = {
  updateUser: (id: number, data: UpdateUsuarioRequest) =>
    api.put<unknown>(`/api/Usuarios/${id}`, data),
};
