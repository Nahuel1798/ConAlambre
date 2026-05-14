import { api } from "../client/api";
import type { UpdateUsuarioRequest } from "../types/usuario";

export const usuarioService = {
  updateUser: (id: number, data: UpdateUsuarioRequest) =>
    api.put<unknown>(`/api/Usuarios/${id}`, data),

  uploadAvatar: (id: number, file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post<{ avatarUrl: string }>(`/api/Usuarios/${id}/avatar`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
