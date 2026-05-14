import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { usuarioService } from "../services/usuarioService";
import {
  Network,
  Search,
  Briefcase,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

export function RoleSelectorPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = (location.state as { userId?: number } | null)?.userId;

  const [loading, setLoading] = useState<"Cliente" | "Profesional" | null>(
    null
  );
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
      setError("Ocurrió un error al seleccionar el rol.");
    }
  };

  const handleOmitir = async () => {
    try {
      await usuarioService.updateUser(userId, { rol: "Cliente" });
    } catch {}

    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Network className="text-primary" size={22} />
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-800">
                ConAlambre
              </h1>
              <p className="text-xs text-slate-500">
                Plataforma de servicios
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/SignupPage")}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition"
          >
            <ChevronLeft size={16} />
            Volver
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <section className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* HERO */}
          <div className="mb-10">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Bienvenido
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 max-w-2xl">
              ¿Cómo querés usar ConAlambre?
            </h2>

            <p className="text-slate-600 mt-3 text-lg max-w-2xl">
              Elegí tu experiencia dentro de la plataforma. Podés cambiar
              esto más adelante desde tu perfil.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CLIENTE */}
            <button
              onClick={() => handleSelect("Cliente")}
              disabled={loading !== null}
              className="group bg-white border border-slate-200 hover:border-primary/40 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Search size={30} className="text-primary" />
                  </div>

                  <ArrowRight
                    className="text-slate-300 group-hover:text-primary transition"
                    size={24}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Contratar servicios
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    Encontrá profesionales confiables para reparaciones,
                    instalaciones, mantenimiento y trabajos del hogar.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <span className="font-semibold text-primary">
                    {loading === "Cliente"
                      ? "Ingresando..."
                      : "Empezar a buscar"}
                  </span>
                </div>
              </div>
            </button>

            {/* PROFESIONAL */}
            <button
              onClick={() => handleSelect("Profesional")}
              disabled={loading !== null}
              className="group bg-slate-900 text-white border border-slate-800 hover:border-primary rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Briefcase size={30} className="text-white" />
                  </div>

                  <ArrowRight
                    className="text-slate-500 group-hover:text-white transition"
                    size={24}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-3">
                    Ofrecer servicios
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    Creá tu perfil profesional, conseguí clientes y administrá
                    tus trabajos desde una sola plataforma.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="font-semibold text-primary">
                    {loading === "Profesional"
                      ? "Creando perfil..."
                      : "Crear perfil profesional"}
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 text-red-600 rounded-2xl p-4">
              {error}
            </div>
          )}

          {/* FOOTER ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => navigate("/SignupPage")}
              className="text-slate-600 hover:text-slate-900 transition"
            >
              ← Volver al registro
            </button>

            <button
              onClick={handleOmitir}
              className="px-5 py-3 rounded-xl bg-white border hover:bg-slate-100 transition"
            >
              Omitir por ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}