import { api } from "../client/api";
import type { LoginRequest, LoginResponse } from "../types/auth";

export const loginService = async (
  request: LoginRequest,
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/login", request);
  return data;
};

