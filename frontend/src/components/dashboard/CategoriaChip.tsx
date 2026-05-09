import type { CategoriaResponse } from "../../types/categoria";
import {
  Sparkles,
  Wrench,
  Compass,
  Zap,
  Droplets,
  Flower2,
  Briefcase,
} from "lucide-react";

interface CategoriaChipProps {
  categoria: CategoriaResponse;
  onClick?: () => void;
}

// Mapeo de nombre de categoría a icono
const categoryIconMap: Record<string, React.ReactNode> = {
  Plomería: <Droplets size={32} />,
  Electricista: <Zap size={32} />,
  Pintura: <Sparkles size={32} />,
  Albañilería: <Wrench size={32} />,
  Jardinería: <Flower2 size={32} />,
  Gasista: <Compass size={32} />,
};

const iconColorMap: Record<string, string> = {
  Plomería: "bg-primary-container text-on-primary-container",
  Electricista: "bg-secondary-container text-on-secondary-container",
  Pintura: "bg-surface-container-high text-primary",
  Albañilería: "bg-surface-container-high text-primary",
  Jardinería: "bg-surface-container-high text-primary",
  Gasista: "bg-surface-container-high text-primary",
};

export function CategoriaChip({ categoria, onClick }: CategoriaChipProps) {
  const icono = categoryIconMap[categoria.nombre] || <Briefcase size={32} />;
  const colorClass = iconColorMap[categoria.nombre] || "bg-surface-container-high text-primary";

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer active:scale-95 transition-transform"
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${colorClass}`}>
        {icono}
      </div>
      <span className="font-label-lg text-on-surface">{categoria.nombre}</span>
    </button>
  );
}