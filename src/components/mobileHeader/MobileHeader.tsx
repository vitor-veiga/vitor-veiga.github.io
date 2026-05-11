import me from "../../assets/me.jpeg";
import { Mail } from "lucide-react";

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

export default function MobileHeader() {
  return (
    <header className="bg-linear-to-b from-primary-900 to-primary-800 text-gray-300 flex flex-col items-center gap-4 px-6 py-8">
      {/* Foto + nome + cargo */}
      <div className="flex items-center gap-4 w-full">
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-primary-400 blur-md opacity-20 scale-105" />
          <img
            src={me}
            alt="Minha foto"
            className="relative w-16 h-16 rounded-full object-cover border-2 border-primary-500 shadow-lg"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-base font-bold tracking-wide text-white leading-tight">
            Vitor Cristian da Veiga
          </h2>
          <p className="text-xs text-primary-400 mt-0.5 uppercase tracking-widest">
            Desenvolvedor Web
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para projetos
          </span>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-3 shrink-0">
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
    </header>
  );
}
