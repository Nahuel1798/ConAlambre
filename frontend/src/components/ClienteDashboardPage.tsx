import { useEffect, useState } from "react";
import { Bell, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";
import { BarraBusqueda } from "./dashboard/BarraBusqueda";
import { CategoriaChip } from "./dashboard/CategoriaChip";
import { ServicioCard } from "./dashboard/ServicioCard";
import { BottomNav } from "./dashboard/BottomNav";
import { FAB } from "./dashboard/FAB";
import type { CategoriaResponse } from "../types/categoria";
import type { ServicioResponse } from "../types/servicio";
import { servicioService } from "../services/servicioService";


export function ClienteDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [servicios, setServicios] = useState<ServicioResponse[]>([]);
  const [categorias, setCategorias] = useState<CategoriaResponse[]>([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  const fetchServicios = async () => {
    try {
      setLoading(true);
      const data = await servicioService.getAll();
      setServicios(data);
    } catch (error) {
      console.error("Error fetching servicios:", error);
      setError("No se pudieron cargar los servicios. Por favor, intentá de nuevo más tarde.");
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
      setError("No se pudieron cargar las categorías. Por favor, intentá de nuevo más tarde."); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicios();
    fetchCategorias();
  }, []);

  const handleServiceClick = (servicio: ServicioResponse) => {
    console.log("Service clicked:", servicio.id);
    // TODO: Navigate to service detail
  };

  const handlePostJob = () => {
    console.log("Post job clicked");
    // TODO: Open post job modal
  };
  
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface shadow-sm flex justify-between items-center w-full px-5 md:px-12 py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
            <img alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <span className="font-headline-md text-headline-md font-bold text-primary">
            ConAlambre
          </span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
          <Bell size={24} className="text-primary" />
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Search */}
        <BarraBusqueda value={searchQuery} onChange={setSearchQuery} />

        {/* Categories */}
        <section className="mt-10">
          <div className="flex items-center justify-between px-5 md:px-12 mb-4">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Categorías
            </h2>
            <button className="text-primary font-label-lg hover:underline transition-all">
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
            <h2 className="font-headline-md text-headline-md text-on-background">
              Servicios destacados
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <section className="mt-16 px-5 md:px-12 mb-16">
          <div className="bg-primary p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            <div className="z-10 text-center md:text-left">
              <h2 className="font-display-lg text-headline-lg text-on-primary mb-4">
                ¿No encontrás lo que necesitás?
              </h2>
              <p className="font-body-lg text-on-primary/80 mb-6">
                Publicá un trabajo y hacé que profesionales capacitados
                se.postulen con sus mejores ofertas.
              </p>
              <Button variant="secondary">Publicar trabajo</Button>
            </div>
            <div className="relative md:absolute md:right-0 md:top-0 h-40 md:h-full w-full md:w-1/3 z-0 opacity-20 pointer-events-none">
              <img alt="Decoración" />
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

