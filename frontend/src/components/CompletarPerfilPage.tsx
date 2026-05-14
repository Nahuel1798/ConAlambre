import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Camera,
  Check,
  Star,
  Clock,
  FileText,
  Rocket,
  Network,
} from "lucide-react";
import { usuarioService } from "../services/usuarioService";
import { perfilProfesionalService } from "../services/perfilProfesionalService";

const CATEGORIAS = [
  { id: 1, nombre: "Electricity", icon: "⚡" },
  { id: 2, nombre: "Plumbing", icon: "🔧" },
  { id: 3, nombre: "Painting", icon: "🎨" },
  { id: 4, nombre: "Carpentry", icon: "🪚" },
];

const EXPERIENCIA_OPTS = ["1-2 Years", "3-5 Years", "5-10 Years", "10+ Years"];

export function CompletarPerfilPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as
    | { userId?: number; rol?: "Cliente" | "Profesional" }
    | null;
  const userId = state?.userId;
  const rol = state?.rol;

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [experiencia, setExperiencia] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Revoke object URL on cleanup to avoid memory leaks
  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  // Redirect if no valid state
  if (!userId || !rol) {
    navigate("/seleccionar-rol", { replace: true });
    return null;
  }

  const isProfesional = rol === "Profesional";

  const isValid = isProfesional
    ? selectedCategories.length > 0 &&
      experiencia.length > 0 &&
      descripcion.trim().length >= 10
    : true;

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    if (!userId || !rol) return;
    setSubmitting(true);
    setError(null);

    try {
      // 1. Upload avatar if selected
      if (avatarFile) {
        await usuarioService.uploadAvatar(userId, avatarFile);
      }

      // 2. Create professional profile or navigate
      if (isProfesional) {
        await perfilProfesionalService.create({
          usuarioId: userId,
          experiencia,
          descripcion,
          categoriaIds: selectedCategories,
        });
      }

      navigate("/dashboard");
    } catch {
      setError(
        "Ocurrió un error al guardar el perfil. Intentalo de nuevo."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-background text-on-surface">
      {/* AppBar */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20 flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              navigate("/seleccionar-rol", { state: { userId } })
            }
            className="active:scale-90 transition-transform"
          >
            <ArrowLeft size={24} className="text-primary-container" />
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary-container tracking-tight">
            Pro Activation
          </h1>
        </div>
        <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">
          STEP {isProfesional ? "4/4" : "2/2"}
        </span>
      </header>

      {/* Content */}
      <div className="flex-1 px-5 py-8 max-w-[680px] mx-auto w-full pb-36">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-10 px-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(13,92,99,0.3)]">
              <Check size={16} className="text-white" />
            </div>
          </div>

          {/* Connector 1 */}
          <div className="flex-1 h-[2px] bg-primary-container mx-2 shadow-[0_0_8px_rgba(13,92,99,0.15)]" />

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(13,92,99,0.3)]">
              <Check size={16} className="text-white" />
            </div>
          </div>

          {isProfesional && (
            <>
              {/* Connector 2 */}
              <div className="flex-1 h-[2px] bg-primary-container mx-2 shadow-[0_0_8px_rgba(13,92,99,0.15)]" />

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_15px_rgba(13,92,99,0.3)]">
                  <Check size={16} className="text-white" />
                </div>
              </div>

              {/* Connector 3 */}
              <div className="flex-1 h-[2px] bg-primary-container mx-2 shadow-[0_0_8px_rgba(13,92,99,0.15)]" />
            </>
          )}

          {/* Current Step */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary-container flex items-center justify-center ring-4 ring-primary-container/10">
              <Star
                size={18}
                className="text-primary-container"
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="space-y-2 mb-8">
          <h2 className="font-headline-lg text-headline-lg text-primary-container">
            Final Details
          </h2>
          <p className="text-on-surface-variant font-body-md">
            {isProfesional
              ? "Set up your professional profile to start receiving job leads."
              : "Just one more step to get started."}
          </p>
        </section>

        {/* Avatar Upload */}
        <section className="flex flex-col items-center justify-center py-6 mb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-[24px] overflow-hidden border-2 border-outline-variant/30 bg-surface-container-low flex items-center justify-center">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Network size={48} className="text-outline-variant/50" />
              )}
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 bg-primary-container text-white p-3 rounded-xl shadow-lg active:scale-90 transition-transform hover:bg-primary-container/90"
            >
              <Camera size={20} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
          <p className="mt-4 font-label-sm text-label-sm text-primary-container font-semibold">
            Upload Profile Photo
          </p>
        </section>

        {/* Professional Fields */}
        {isProfesional && (
          <>
            {/* Categories */}
            <section className="space-y-4 mb-8">
              <label className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                Primary Trade
              </label>
              <div className="grid grid-cols-2 gap-4">
                {CATEGORIAS.map((cat) => {
                  const isSelected = selectedCategories.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      className={`flex flex-col items-center justify-center p-6 rounded-[24px] border-2 transition-all active:scale-95 ${
                        isSelected
                          ? "bg-primary-container border-primary-container text-white shadow-md"
                          : "bg-white border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50 shadow-sm"
                      }`}
                    >
                      <span className="text-[32px] mb-2">{cat.icon}</span>
                      <span className="font-label-sm">{cat.nombre}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-4 mb-8">
              <label className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <Clock size={24} className="text-primary-container" />
                Years of Experience
              </label>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
                {EXPERIENCIA_OPTS.map((opt) => {
                  const isSelected = experiencia === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setExperiencia(opt)}
                      className={`px-6 py-3 rounded-full whitespace-nowrap font-label-sm transition-all active:scale-95 ${
                        isSelected
                          ? "bg-primary-container text-white font-bold shadow-md"
                          : "bg-white border border-outline-variant/30 text-on-surface-variant hover:border-primary-container/50 shadow-sm"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Bio */}
            <section className="space-y-4 mb-8">
              <label className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                <FileText size={24} className="text-primary-container" />
                Professional Bio
              </label>
              <div className="relative">
                <textarea
                  value={descripcion}
                  onChange={(e) =>
                    setDescripcion(e.target.value.slice(0, 300))
                  }
                  placeholder="Describe your skills, certifications, and what makes your work stand out..."
                  rows={4}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-[24px] p-6 text-on-surface focus:border-primary-container focus:ring-0 transition-all placeholder:text-on-surface-variant/40 resize-none outline-none"
                />
                <div className="absolute bottom-4 right-6 text-on-surface-variant/50 font-label-sm text-label-sm">
                  {descripcion.length}/300
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Fixed Bottom Bar */}
      <footer className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-xl border-t border-outline-variant/30 z-50">
        <div className="max-w-[680px] mx-auto">
          <button
            onClick={handleSubmit}
            disabled={submitting || !isValid}
            className="w-full bg-primary-container text-white py-5 rounded-[24px] font-headline-md text-headline-md font-extrabold flex items-center justify-center gap-3 shadow-[0_12px_32px_rgba(13,92,99,0.3)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              "Saving..."
            ) : isProfesional ? (
              <>
                Activate Pro Profile
                <Rocket size={24} />
              </>
            ) : (
              "Continue to Dashboard"
            )}
          </button>
          {isProfesional && (
            <p className="text-center mt-3 text-on-surface-variant/60 font-label-sm text-label-sm">
              By activating, you agree to our Pro Services Terms.
            </p>
          )}
        </div>
        {error && (
          <p className="mt-3 font-body-sm text-error text-center">{error}</p>
        )}
      </footer>
    </main>
  );
}
