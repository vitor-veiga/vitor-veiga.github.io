import me from "../../assets/me.jpeg";
import { Mail, MapPin } from "lucide-react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/vitor-veiga",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vitor-veiga-6671a12b9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:vitorcristianveiga@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const navLinks = [
  { label: "Início", href: "#apresentacao" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "O que eu faço", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Meu maior projeto", href: "#maior-projeto" },
  { label: "Resumo", href: "#resumo" },
  { label: "Contato", href: "#contato" },
];

const sectionIds = navLinks.map(({ href }) => href.slice(1));

export default function SideBarArea() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <aside className="w-94 h-full overflow-y-auto bg-linear-to-b from-primary-900 to-primary-800 text-gray-300 flex flex-col items-center justify-between py-12 px-6 shadow-2xl">
      {/* Topo — foto + nome */}
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary-400 blur-md opacity-20 scale-105" />
          <img
            src={me}
            alt="Minha foto"
            className="relative w-50 h-50 rounded-full object-cover border-4 border-primary-500 shadow-xl"
          />
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wide text-white">
            Vitor Cristian da Veiga
          </h2>
          <p className="text-sm text-primary-400 mt-1 uppercase tracking-widest">
            Desenvolvedor Web
          </p>
        </div>

        {/* Status disponível */}
        <span className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Disponível para projetos
        </span>

        {/* Bio */}
        <p className="text-sm text-primary-400 text-center leading-relaxed">
          Criando plataformas web modernas, funcionais e elegantes para
          impulsionar a administração de cidades inteligentes.
        </p>

        {/* Localização */}
        <div className="flex items-center gap-1.5 text-xs text-primary-500">
          <MapPin className="w-3.5 h-3.5" />
          Ponta Grossa, PR — Brasil
        </div>

        <div className="w-12 h-0.5 bg-primary-500 rounded-full" />
      </div>

      {/* Meio — navegação */}
      <nav className="w-full py-4">
        <ul className="flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = activeId === href.slice(1);
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "text-white bg-primary-700/70"
                      : "text-gray-400 hover:text-white hover:bg-primary-700/60"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-primary-400 transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Base — tech tags + redes sociais */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Tech tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "HTML5",
            "CSS3",
            "React",
            "React Native",
            "TypeScript",
            "Tailwind",
            "Python",
            "Flask",
            "Redis",
            "PostgreSQL",
            "GeoServer",
            "PostGIS",
            "WebGIS",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs text-primary-400 bg-primary-700/50 border border-primary-600/50 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-12 h-0.5 bg-primary-700 rounded-full" />

        <div className="flex gap-4">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-primary-500 hover:text-white transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
