export interface CreatePerfilProfesionalRequest {
  usuarioId: number;
  experiencia: string;
  descripcion: string;
  categoriaIds: number[];
}

export interface PerfilProfesionalResponse {
  id: number;
  titulo: string;
  experiencia: string;
  descripcion: string;
  categorias: { id: number; nombre: string; descripcion: string }[];
  usuarioId: number;
}
