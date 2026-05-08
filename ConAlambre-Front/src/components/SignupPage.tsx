import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Network, User, Mail, Lock, ArrowRight } from "lucide-react";

export function SignupPage() {
  return (
    <main className="flex flex-col min-h-screen items-center px-5 md:px-12 pt-12 pb-12 relative overflow-hidden bg-background text-on-surface lg:flex-row lg:justify-center lg:gap-12 lg:px-12 lg:pt-20 lg:pb-20">
      {/* Left Side - Branding & Preview */}
      <div className="w-full max-w-sm flex flex-col items-center lg:max-w-md lg:items-start lg:flex-1">
        {/* Branding Section */}
        <header className="w-full mb-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-primary text-4xl lg:text-5xl">
              <Network size={48} strokeWidth={1.5} />
            </span>
            <h1 className="font-headline-lg text-on-surface font-extrabold tracking-tight lg:text-4xl">
              ConAlambre
            </h1>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-[280px] mx-auto lg:mx-0 lg:max-w-sm">
            Unite a la red premium de maestros artesanos y expertos técnicos.
          </p>
        </header>

        {/* Community Preview */}
        <section className="w-full mb-8 lg:mb-0">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
            {/* Preview Card 1 */}
            <div className="flex-none w-32 aspect-[3/4] rounded-xl overflow-hidden relative border border-outline-variant/50 group lg:w-36 lg:aspect-[3/5]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Professional working"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-label-sm text-white text-xs">Activo</span>
              </div>
            </div>

            {/* Preview Card 2 */}
            <div className="flex-none w-32 aspect-[3/4] rounded-xl overflow-hidden relative border border-outline-variant/50 group lg:w-36 lg:aspect-[3/5]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Workbench project"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-label-sm text-white text-xs">Proyecto</span>
              </div>
            </div>

            {/* Preview Card 3 */}
            <div className="flex-none w-32 aspect-[3/4] rounded-xl overflow-hidden relative border border-outline-variant/50 group lg:w-36 lg:aspect-[3/5]">
              <div className="w-full h-full flex flex-col items-center justify-center bg-surface-container p-4 text-center">
                <p className="font-headline-md text-primary font-extrabold lg:text-2xl">
                  +12k
                </p>
                <p className="font-label-sm text-on-surface-variant uppercase tracking-widest text-xs">
                  Pros
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Progress Decoration - Desktop only */}
        <div className="hidden mt-8 lg:flex items-center gap-2 opacity-30">
          <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
          <div className="w-20 h-0.5 bg-primary" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-outline" />
          <div className="w-20 h-0.5 bg-outline/30" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-outline/20" />
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full max-w-sm lg:flex-1 lg:max-w-md">
        <div className="bg-white rounded-2xl p-6 shadow-lg shadow-primary/5 lg:p-8">
          <form className="flex flex-col gap-4">
            <div className="text-center lg:text-left mb-2">
              <h2 className="font-headline-md text-on-surface font-bold lg:text-xl">
                Crear Cuenta
              </h2>
              <p className="font-body-sm text-on-surface-variant mt-1">
                Unite a miles de profesionales
              </p>
            </div>

            <Input
              label="NOMBRE COMPLETO"
              icon={<User size={20} />}
              placeholder="Juan Pérez"
              type="text"
            />
            <Input
              label="CORREO ELECTRÓNICO"
              icon={<Mail size={20} />}
              placeholder="tu@email.com"
              type="email"
            />
            <Input
              label="CONTRASEÑA"
              icon={<Lock size={20} />}
              placeholder="••••••••"
              type="password"
              showPasswordToggle
            />
            <div className="mt-4">
              <Button fullWidth icon={<ArrowRight size={20} />}>
                Crear Cuenta
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Links - Below form on desktop */}
        <footer className="mt-6 text-center w-full lg:mt-8">
          <p className="font-body-sm text-on-surface-variant">
            ¿Ya tenés una cuenta?{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Iniciá Sesión
            </a>
          </p>
        </footer>
      </div>

      {/* Service Progress Decoration - Mobile only */}
      <div className="mt-8 flex items-center gap-2 opacity-30 lg:hidden">
        <div className="w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
        <div className="w-20 h-0.5 bg-primary" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-outline" />
        <div className="w-20 h-0.5 bg-outline/30" />
        <div className="w-2.5 h-2.5 rounded-full border-2 border-outline/20" />
      </div>
    </main>
  );
}