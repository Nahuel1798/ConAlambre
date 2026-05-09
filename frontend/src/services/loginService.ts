import { api } from "../client/api";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const loginService = {
  login: (request: LoginRequest) => api.post<LoginResponse>("/Api/login", request),
};
