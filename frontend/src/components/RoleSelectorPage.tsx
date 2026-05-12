import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usuarioService } from "../services/usuarioService";
import { Network, Search, Briefcase, ArrowRight, ChevronLeft } from "lucide-react";

export function RoleSelectorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = (location.state as { userId?: number } | null)?.userId;

  const [loading, setLoading] = useState<"Cliente" | "Profesional" | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!userId) {
    navigate("/");
    return null;
  }

  const handleSelect = async (rol: "Cliente" | "Profesional") => {
    setLoading(rol);
    setError(null);
    try {
      await usuarioService.updateUser(userId, { rol });
      navigate("/dashboard");
    } catch {
      setLoading(null);
      setError("Ocurrió un error al seleccionar el rol. Intentalo de nuevo.");
    }
  };

  const handleOmitir = async () => {
    try {
      await usuarioService.updateUser(userId, { rol: "Cliente" });
    } catch {
      // Silently fall back — don't block navigation on omitir
    }
    navigate("/dashboard");
  };

  const handleVolver = () => {
    navigate("/SignupPage");
  };

  return (
    <main className="flex flex-col min-h-screen items-center px-5 md:px-12 pt-12 pb-12 relative overflow-hidden bg-background text-on-surface">
      {/* Branding Header */}
      <header className="w-full max-w-sm mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="text-primary text-4xl">
            <Network size={48} strokeWidth={1.5} />
          </span>
          <h1 className="font-headline-lg text-on-surface font-extrabold tracking-tight">
            ConAlambre
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="w-full max-w-sm flex-1 flex flex-col">
        <div className="mb-6">
          <h2 className="font-headline-md text-on-surface font-bold mb-1">
            ¿Qué querés hacer en ConAlambre?
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Elegí tu punto de partida. Siempre podés cambiar de rol más tarde.
          </p>
        </div>

        {/* Role Cards */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Card: Contratar servicios */}
          <button
            onClick={() => handleSelect("Cliente")}
            disabled={loading !== null}
            className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 text-left transition-all hover:border-primary-cta/30 border-2 border-transparent active:scale-95 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Search size={80} strokeWidth={1} />
            </div>
            <div className="flex flex-col h-full justify-between relative">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Search size={24} className="text-primary" />
                </div>
                <h3 className="font-headline-md text-on-surface font-bold mb-1">
                  Contratar servicios
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Buscá profesionales calificados para tus proyectos,
                  reparaciones o tareas del hogar.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold">
                <span className="font-label-lg">
                  {loading === "Cliente" ? "Cargando..." : "Empezar a buscar"}
                </span>
                {loading !== "Cliente" && <ArrowRight size={20} />}
              </div>
            </div>
          </button>

          {/* Card: Ofrecer servicios */}
          <button
            onClick={() => handleSelect("Profesional")}
            disabled={loading !== null}
            className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 text-left transition-all hover:border-primary-cta/30 border-2 border-transparent active:scale-95 relative overflow-hidden group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Briefcase size={80} strokeWidth={1} />
            </div>
            <div className="flex flex-col h-full justify-between relative">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <h3 className="font-headline-md text-on-surface font-bold mb-1">
                  Ofrecer servicios
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Publicá tu perfil, gestioná tus trabajos y conectá con nuevos
                  clientes en tu zona.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold">
                <span className="font-label-lg">
                  {loading === "Profesional" ? "Cargando..." : "Crear perfil pro"}
                </span>
                {loading !== "Profesional" && <ArrowRight size={20} />}
              </div>
            </div>
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 font-body-sm text-error text-center">{error}</p>
        )}

        {/* Progress Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-1.5 w-8 rounded-full bg-primary" />
          <div className="h-1.5 w-2 rounded-full bg-outline/30" />
          <div className="h-1.5 w-2 rounded-full bg-outline/30" />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-sm mt-8 flex items-center justify-between">
        <button
          onClick={handleVolver}
          className="font-label-sm text-on-surface-variant flex items-center gap-1 active:scale-90 transition-transform hover:text-on-surface"
        >
          <ChevronLeft size={16} />
          VOLVER
        </button>
        <button
          onClick={handleOmitir}
          className="font-label-sm text-on-surface-variant active:scale-90 transition-transform hover:text-on-surface"
        >
          OMITIR
        </button>
      </footer>
    </main>
  );
}
