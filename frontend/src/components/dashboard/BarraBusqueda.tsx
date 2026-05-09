import { Search } from "lucide-react";

interface BarraBusquedaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function BarraBusqueda({
  value,
  onChange,
  placeholder = "¿Qué servicio necesitás hoy?",
}: BarraBusquedaProps) {
  return (
    <section className="px-5 md:px-12 mt-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
          <Search className="text-outline" size={24} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white border border-outline-variant/30 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-md"
        />
      </div>
    </section>
  );
}