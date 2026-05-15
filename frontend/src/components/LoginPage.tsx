import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/loginService";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Network, Mail, Lock, LogIn } from "lucide-react";
import { setAuthToken } from "../client/api";

export function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await loginService.login({
      email,
      contrasena: password,
    });

    console.log("Login exitoso:", response);

    // Guardar token
    setAuthToken(response.data.token);

    localStorage.setItem(
      "token",
      response.data.token
    );

    // Guardar usuario
    localStorage.setItem(
      "usuario",
      JSON.stringify(response.data.usuario)
    );

    navigate("/dashboard");
  } catch (error) {
    console.error("Error de login:", error);
  }
};

  return (
    <main className="flex flex-col min-h-screen items-center px-5 md:px-12 pt-12 pb-12 relative overflow-hidden bg-background text-on-surface lg:flex-row lg:justify-center lg:gap-12 lg:px-12 lg:pt-20 lg:pb-20">
      {/* Left Side - Branding */}
      <div className="w-full max-w-sm flex flex-col items-center lg:max-w-md lg:items-start lg:flex-1">
        {/* Branding Section */}
        <header className="w-full mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-primary text-4xl lg:text-5xl">
              <Network size={48} strokeWidth={1.5} />
            </span>
            <h1 className="font-headline-lg text-on-surface font-extrabold tracking-tight lg:text-4xl">
              ConAlambre
            </h1>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-[280px] mx-auto lg:mx-0 lg:max-w-sm">
            Bienvenido de nuevo. Accedé a tu cuenta para conectar con clientes y profesionales.
          </p>
        </header>

        {/* Service Progress Decoration - Desktop only */}
        <div className="hidden mt-8 lg:flex items-center gap-2 opacity-30">
          <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
          <div className="w-20 h-0.5 bg-primary" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-outline" />
          <div className="w-20 h-0.5 bg-outline/30" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-outline/20" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full max-w-sm lg:flex-1 lg:max-w-md">
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 lg:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="text-center lg:text-left mb-2">
              <h2 className="font-headline-md text-on-surface font-bold lg:text-xl">
                Iniciar Sesión
              </h2>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Ingresá tus credenciales para continuar
              </p>
            </div>

            <Input
              label="CORREO ELECTRÓNICO"
              icon={<Mail size={20} />}
              placeholder="tu@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="CONTRASEÑA"
              icon={<Lock size={20} />}
              placeholder="••••••••"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPasswordToggle
            />
            <div className="mt-4">
              <Button fullWidth icon={<LogIn size={20} />}>
                Entrar
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Links - Below form on desktop */}
        <footer className="mt-6 text-center w-full lg:mt-8">
          <p className="font-body-sm text-on-surface-variant">
            ¿No tenés una cuenta?{" "}
            <a className="text-primary font-semibold hover:underline" href="/SignupPage">
              Registrate
            </a>
          </p>
        </footer>
      </div>

      {/* Service Progress Decoration - Mobile only */}
      <div className="mt-8 flex items-center gap-2 opacity-30 lg:hidden">
        <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
        <div className="w-20 h-0.5 bg-primary" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-outline" />
        <div className="w-20 h-0.5 bg-outline/30" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-outline/20" />
      </div>
    </main>
  );
}