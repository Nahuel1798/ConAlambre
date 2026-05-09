import { api } from "../client/api";
import type { ServicioResponse } from "../types/servicio";

export const servicioService = {
  getAll: async () => {
    const response = await api.get<ServicioResponse[]>("/api/servicios");
    return response.data;
  },
};
