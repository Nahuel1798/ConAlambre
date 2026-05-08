import { useId, type InputHTMLAttributes, useState, type ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  icon?: ReactNode;
  showPasswordToggle?: boolean;
}

export function Input({
  label,
  icon,
  showPasswordToggle = false,
  type = "text",
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="space-y-xs">
      <label
        className="font-label-sm text-on-surface-variant px-1"
        htmlFor={inputId}
      >
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary-container transition-colors">
            {icon}
          </span>
        )}
        <input
          id={inputId}
          type={inputType}
          className={`w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-4 text-on-surface focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all placeholder:text-outline-variant/50 font-body-md ${
            icon ? "pl-12" : "pl-4"
          } ${isPassword ? "pr-12" : "pr-4"}`}
          {...props}
        />
        {showPasswordToggle && isPassword && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}