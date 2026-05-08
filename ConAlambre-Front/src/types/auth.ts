export interface UsuarioResponse {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  avatar: string;
}

export interface LoginRequest {
  email: string;
  contrasena: string;
}

export interface LoginResponse {
  token: string;
  usuarioResponse: UsuarioResponse;
}