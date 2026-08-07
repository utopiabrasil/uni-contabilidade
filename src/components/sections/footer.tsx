import { Mail, MapPin, Phone } from "lucide-react";
import { UniLogo } from "@/components/ui/logo";
import { site, services } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink-strong text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <UniLogo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Contabilidade e consultoria fiscal 100% digital, com soluções
              financeiras personalizadas para empresas de todos os portes.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Uni Contabilidade"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-brand-orange/50 hover:bg-brand-orange hover:text-white"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Uni Contabilidade"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-brand-blue/50 hover:bg-brand-blue hover:text-white"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Uni Contabilidade"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-brand-blue/50 hover:bg-brand-blue hover:text-white"
              >
                <Phone className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-brand-orange"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Serviços">
            <p className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Serviços
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="#servicos"
                    className="text-sm text-white/65 transition-colors hover:text-brand-blue"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-semibold tracking-wide text-white/90 uppercase">
              Contato
            </p>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                {site.address}
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://utopiasolutions.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#00FF41] transition-opacity hover:opacity-80"
            >
              Utopia
            </a>{" "}
            🐍
          </p>
        </div>
      </div>
    </footer>
  );
}
