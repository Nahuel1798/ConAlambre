import { api } from "../client/api";
import type { LoginRequest, LoginResponse } from "../types/auth";
import type { UsuarioRegisterRequest } from "../types/usuario";

export const loginService = {
  login: (request: LoginRequest) => api.post<LoginResponse>("/Api/login", request),
  signup: (request: UsuarioRegisterRequest) => api.post<void>("/Api/login/register", request),
};

