import type { UsuarioResponse } from "./usuario";

// Login-specific types
export interface LoginRequest {
  email: string;
  contrasena: string;
}

export interface LoginResponse {
  token: string;
  usuario: UsuarioResponse;
}