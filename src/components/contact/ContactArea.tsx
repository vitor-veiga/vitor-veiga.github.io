import { useState } from "react";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "E-mail",
    value: "vitorcristianveiga@gmail.com",
    href: "mailto:vitorcristianveiga@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Localização",
    value: "Ponta Grossa, PR — Brasil",
    href: null,
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Disponibilidade",
    value: "Aberto a projetos e oportunidades",
    href: null,
  },
];

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
    label: "E-mail",
    href: "mailto:vitorcristianveiga@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactArea() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const mailtoHref =
      `mailto:vitorcristianveiga@gmail.com` +
      `?subject=${encodeURIComponent(form.subject || "Contato via portfólio")}` +
      `&body=${encodeURIComponent(
        `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`,
      )}`;

    window.location.href = mailtoHref;

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 500);
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="contact" />

      {/* Cabeçalho */}
      <FadeIn>
        <div className="mb-14">
          <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Fale comigo
          </p>
          <h2 className="text-4xl font-extrabold text-secondary-900">
            Vamos <span className="text-primary-700">conversar</span>?
          </h2>
          <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />
        </div>
      </FadeIn>

      {/* Conteúdo em duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_460px] gap-8 md:gap-14 max-w-5xl">
        {/* Coluna esquerda — Informações */}
        <FadeIn delay={100}>
          <div className="flex flex-col gap-10">
            <p className="text-secondary-600 text-base leading-relaxed max-w-md">
              Estou disponível para projetos freelance, colaborações técnicas e
              oportunidades de trabalho. Se tiver uma ideia ou proposta, manda
              uma mensagem — responderei em breve.
            </p>

            {/* Cards de contato */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-secondary-200 bg-white/60 shadow-sm"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-700/10 text-primary-700 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400 font-medium uppercase tracking-widest">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-secondary-800 hover:text-primary-700 transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-secondary-800">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div>
              <p className="text-xs text-secondary-400 font-medium uppercase tracking-widest mb-3">
                Redes sociais
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-secondary-200 bg-white/60 text-secondary-500 hover:text-primary-700 hover:border-primary-600 shadow-sm transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Coluna direita — Formulário */}
        <FadeIn delay={200}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-8 rounded-2xl border border-secondary-200 bg-white/70 shadow-md backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold text-secondary-600 uppercase tracking-widest"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="px-3 py-2.5 rounded-lg border border-secondary-200 bg-secondary-50 text-sm text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-600/30 focus:border-primary-600 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-secondary-600 uppercase tracking-widest"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="px-3 py-2.5 rounded-lg border border-secondary-200 bg-secondary-50 text-sm text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-600/30 focus:border-primary-600 transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-semibold text-secondary-600 uppercase tracking-widest"
              >
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Sobre o que você quer conversar?"
                className="px-3 py-2.5 rounded-lg border border-secondary-200 bg-secondary-50 text-sm text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-600/30 focus:border-primary-600 transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold text-secondary-600 uppercase tracking-widest"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Descreva seu projeto, ideia ou proposta..."
                className="px-3 py-2.5 rounded-lg border border-secondary-200 bg-secondary-50 text-sm text-secondary-800 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-600/30 focus:border-primary-600 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-lg bg-primary-700 text-white text-sm font-semibold hover:bg-primary-800 transition-colors duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {status === "sending"
                ? "Abrindo cliente de e-mail..."
                : status === "sent"
                  ? "Mensagem enviada!"
                  : "Enviar mensagem"}
            </button>

            {status === "sent" && (
              <p className="text-center text-sm text-emerald-600 font-medium">
                Obrigado pelo contato! Responderei em breve.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
