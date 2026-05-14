import { api } from "../client/api";
import type { ServicioResponse } from "../types/servicio";
import type { CategoriaResponse } from "../types/categoria";

export const servicioService = {
  getAll: async () => {
    const response = await api.get<ServicioResponse[]>("/api/servicios");
    return response.data;
  },
  getAllCategorias: async () => {
    const response = await api.get<CategoriaResponse[]>("/api/categorias");
    return response.data;
  }
};
