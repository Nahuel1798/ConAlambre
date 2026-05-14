import { api } from "../client/api";
import type { CreatePerfilProfesionalRequest, PerfilProfesionalResponse } from "../types/perfilProfesional";

export const perfilProfesionalService = {
  create: (data: CreatePerfilProfesionalRequest) =>
    api.post<PerfilProfesionalResponse>("/api/PerfilesProfesionales", data),

  getByUserId: (usuarioId: number) =>
    api.get<PerfilProfesionalResponse>(`/api/PerfilesProfesionales/usuario/${usuarioId}`),
};
