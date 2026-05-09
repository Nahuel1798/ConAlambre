import { Plus } from "lucide-react";
import { Button } from "../ui/Button";

interface FABProps {
  label?: string;
  onClick?: () => void;
}

export function FAB({ label = "Publicar", onClick }: FABProps) {
  return (
    <Button
      onClick={onClick}
      variant="secondary"
      className="fixed right-5 md:right-12 bottom-24 md:bottom-28 z-50 px-4 py-4 rounded-full"
      icon={<Plus size={20} />}
    >
      {label}
    </Button>
  );
}