import type { ServicioResponse } from "../../types/servicio";
import {
  Sparkles,
  Wrench,
  Compass,
  Zap,
  Droplets,
  Flower2,
  Briefcase,
  User,
} from "lucide-react";

interface ServicioCardProps {
  servicio: ServicioResponse;
  onClick?: () => void;
}

// Mapeo de ID de categoría a icono
const categoryIconMap: Record<number, React.ReactNode> = {
  1: <Sparkles size={48} />,
  2: <Wrench size={48} />,
  3: <Compass size={48} />,
  4: <Zap size={48} />,
  5: <Droplets size={48} />,
  6: <Flower2 size={48} />,
};

export function ServicioCard({ servicio, onClick }: ServicioCardProps) {
  const categoryIcon = categoryIconMap[servicio.idCategoria] || <Briefcase size={48} />;
  const priceDisplay = `$${servicio.precio}`;

  return (
    <div
      onClick={onClick}
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden bg-surface-container-high flex items-center justify-center">
        {/* TODO: El backend no tiene imagen — hay que agregarla */}
        <span className="text-outline">{categoryIcon}</span>
      </div>
      <div className="p-sm">
        <div className="flex justify-between items-start mb-xs">
          <h3 className="font-headline-md text-headline-md text-on-background">
            {servicio.nombre}
          </h3>
          <span className="font-headline-md text-primary">{priceDisplay}</span>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-md">
          {servicio.descripcion}
        </p>
        <div className="flex items-center gap-2">
          {/* TODO: El backend no tiene prestador anidado — falta JOIN con Usuario */}
          <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="font-label-sm text-outline">
            Por Usuario #{servicio.idUsuario}
          </span>
        </div>
      </div>
    </div>
  );
}