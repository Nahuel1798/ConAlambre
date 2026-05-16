import type { UsuarioResponse } from "./usuario";

// Login-specific types
export interface LoginRequest {
  email: string;
  contrasena: string;
}

export interface AuthResponse {
  token: string;
  usuario: UsuarioResponse;
}

