import {
  Home,
  Briefcase,
  MessageCircle,
  User,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

interface BottomNavProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { icon: <Home size={24} />, label: "Inicio", href: "#", active: true },
  { icon: <Briefcase size={24} />, label: "Mis trabajos", href: "#" },
  { icon: <MessageCircle size={24} />, label: "Mensajes", href: "#" },
  { icon: <User size={24} />, label: "Perfil", href: "#" },
];

export function BottomNav({ items = defaultItems }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface px-2 pb-2 pt-1 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] rounded-t-xl">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-all active:scale-90 duration-100 ${
            item.active
              ? "bg-primary-container text-on-primary-container"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          {item.icon}
          <span className="font-label-sm text-label-sm">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}