import { useEffect, useRef, useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/ui/Button";
import { BarraBusqueda } from "../components/dashboard/BarraBusqueda";
import { CategoriaChip } from "../components/dashboard/CategoriaChip";
import { ServicioCard } from "../components/dashboard/ServicioCard";
import { BottomNav } from "../components/dashboard/BottomNav";
import { FAB } from "../components/dashboard/FAB";

import type { CategoriaResponse } from "../types/categoria";
import type { ServicioResponse } from "../types/servicio";
import type { UsuarioResponse } from "../types/usuario";

import { servicioService } from "../services/servicioService";

export function ClienteDashboardPage() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [servicios, setServicios] = useState<ServicioResponse[]>([]);
  const [categorias, setCategorias] = useState<CategoriaResponse[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  const [profileOpen, setProfileOpen] = useState(false);

  // Usuario logeado
  const [usuario, setUsuario] = useState<UsuarioResponse | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");

    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
    }
  }, []);

  const fetchServicios = async () => {
    try {
      setLoading(true);

      const data = await servicioService.getAll();

      setServicios(data);
    } catch (error) {
      console.error("Error fetching servicios:", error);

      setError(
        "No se pudieron cargar los servicios. Por favor, intentá de nuevo más tarde.",
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorias = async () => {
    try {
      setLoading(true);

      const data = await servicioService.getAllCategorias();

      setCategorias(data);

      console.log("Categorías obtenidas:", data);
    } catch (error) {
      console.error("Error fetching categorías:", error);

      setError(
        "No se pudieron cargar las categorías. Por favor, intentá de nuevo más tarde.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicios();
  }, []);

  useEffect(() => {
    fetchCategorias();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceClick = (servicio: ServicioResponse) => {
    console.log("Service clicked:", servicio.id);
  };

  const handlePostJob = () => {
    console.log("Post job clicked");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    navigate("/");
  };

  const handleProfile = () => {
    navigate("/perfil");
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 flex justify-between items-center w-full px-5 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-2xl font-bold text-primary">
            ConAlambre
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95">
            <Bell size={24} className="text-primary" />
          </button>

          {/* Avatar + Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded-2xl px-2 py-1 hover:bg-gray-100 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary shadow-sm">
                <img
                  src={
                    usuario?.avatar
                      ? `http://localhost:5120${usuario.avatar}`
                      : "https://ui-avatars.com/api/?name=Usuario"
                  }
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* User Info */}
                <div className="p-5 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img
                        src={
                          usuario?.avatar
                            ? `http://localhost:5120${usuario.avatar}`
                            : "https://ui-avatars.com/api/?name=Usuario"
                        }
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {usuario?.nombre || "Usuario"}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {usuario?.email || "usuario@email.com"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu */}
                <div className="p-2">
                  {/* Perfil */}
                  <button
                    onClick={handleProfile}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <User size={18} />

                    <span className="font-medium">Mi perfil</span>
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <LogOut size={18} />

                    <span className="font-medium">Cerrar sesión</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Search */}
        <BarraBusqueda value={searchQuery} onChange={setSearchQuery} />

        {/* Categories */}
        <section className="mt-10">
          <div className="flex items-center justify-between px-5 md:px-12 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Categorías</h2>

            <button className="text-primary font-medium hover:underline transition-all">
              Ver todas
            </button>
          </div>

          <div className="flex overflow-x-auto gap-4 px-5 md:px-12 hide-scrollbar py-2">
            {categorias.map((categoria) => (
              <CategoriaChip key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </section>

        {/* Featured Services */}
        <section className="mt-16 px-5 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Servicios destacados
            </h2>

            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                <ChevronLeft size={24} />
              </button>

              <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((servicio) => (
              <ServicioCard
                key={servicio.id}
                servicio={servicio}
                onClick={() => handleServiceClick(servicio)}
              />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mt-16 px-5 md:px-12 mb-20">
          <div className="bg-primary p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-xl">
            <div className="z-10 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-4">
                ¿No encontrás lo que necesitás?
              </h2>

              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Publicá un trabajo y hacé que profesionales capacitados se
                postulen con sus mejores ofertas.
              </p>

              <Button variant="secondary">Publicar trabajo</Button>
            </div>

            <div className="relative md:absolute md:right-0 md:top-0 h-40 md:h-full w-full md:w-1/3 z-0 opacity-20 pointer-events-none">
              <img alt="Decoración" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      </main>

      {/* FAB */}
      <FAB label="Publicar trabajo" onClick={handlePostJob} />

      {/* Bottom Navigation */}
      <BottomNav />
    </>
  );
}
