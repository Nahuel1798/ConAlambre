import { api } from "../client/api";
import type { AuthResponse, LoginRequest } from "../types/auth";
import type { RegisterRequest } from "../types/usuario";

export const loginService = {
  login: (request: LoginRequest) =>
    api.post<AuthResponse>("/api/auth/login", request),
  signup: (request: RegisterRequest) =>
    api.post<AuthResponse>("/api/auth/register", request),
};
