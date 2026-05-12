export interface UsuarioResponse {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rol: string;
  avatar: string;
}

export interface UsuarioRegisterRequest {
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  telefono: string;
  rol?: string;
  avatar?: string;
}

export interface UpdateUsuarioRequest {
  nombre?: string;
  apellido?: string;
  telefono?: string;
  avatar?: string;
  rol?: string;
}