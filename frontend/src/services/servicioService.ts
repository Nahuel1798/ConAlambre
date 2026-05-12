import { api } from "../client/api";
import type { ServicioResponse } from "../types/servicio";

export const servicioService = {
  getAll: async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró el token de autenticación.");
    }
    const response = await api.get<ServicioResponse[]>("/api/servicios", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
