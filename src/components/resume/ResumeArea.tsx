import {
  Briefcase,
  GraduationCap,
  Languages,
  Download,
  // Eye,
} from "lucide-react";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";

const experiences = [
  {
    period: "Mar/2026 – Atualmente",
    title: "Projeto de Extensão / RPA – Plataforma WebGIS CTM e PGV",
    org: "UEPG – Fernandes Pinheiro",
    description:
      "Desenvolvimento integral e autônomo (end-to-end) de plataforma de gestão territorial para modernização do Cadastro Técnico Municipal e atualização da Planta Genérica de Valores de Fernandes Pinheiro-PR, incluindo modelagem do banco geoespacial e deploy.",
    tags: ["WebGIS", "PostGIS", "Docker", "Nginx"],
  },
  {
    period: "Mar/2026 – Atualmente",
    title: "Operação Rondon PR – Desenvolvedor de Sistemas de Dados",
    org: "Operação Rondon PR",
    description:
      "Proposta, aprovação e desenvolvimento de sistema integrado com app móvel para coleta de dados em campo e plataforma WebGIS para visualização e análise espacial, aprovado em reunião com todas as universidades participantes.",
    tags: ["WebGIS", "Mobile", "React"],
  },
  {
    period: "Mar/2026 – Atualmente",
    title: "Iniciação Tecnológica – Modelagem Preditiva e WebGIS",
    org: "UEPG – Vale do Ribeira",
    description:
      "Sistema WebGIS com modelagem preditiva para análise da dispersão de contaminantes (chumbo, arsênio, cádmio, zinco) no Vale do Ribeira, com aplicação em políticas públicas de saúde e meio ambiente.",
    tags: ["Ciência de Dados", "GIS", "Modelagem"],
  },
  {
    period: "Fev/2025 – Nov/2025",
    title: "Projeto de Extensão – WebGIS para Vias Públicas",
    org: "UEPG",
    description:
      "Plataforma WebGIS para registro georreferenciado de problemas em vias públicas, com mapa interativo, autenticação e armazenamento de arquivos. Gerou ~40 relatórios técnicos com avaliação positiva do LABPLAN - UEPG.",
    tags: ["React", "TypeScript", "Supabase", "PostGIS"],
  },
  {
    period: "Dez/2024 – Atualmente",
    title: "Projeto de Extensão – Planos Diretores Participativos",
    org: "UEPG – Guaraqueçaba",
    description:
      "Desenvolvimento da plataforma WebGIS do município de Guaraqueçaba, aprovada diretamente pela prefeitura municipal com avaliação positiva quanto à usabilidade e aplicabilidade para gestão territorial.",
    tags: ["React", "Flask", "WebGIS", "APIs"],
  },
  {
    period: "Nov/2024 – Atualmente",
    title: "Secretário – DAESC",
    org: "Diretório Acadêmico de Engenharia de Software e Computação",
    description:
      "Gestão administrativa do diretório acadêmico: redação de atas, coordenação entre diretorias e suporte à execução de projetos e eventos estudantis como Semana Acadêmica e Hackathons.",
    tags: ["Gestão", "Coordenação", "Eventos"],
  },
];

const education = [
  {
    period: "Fev/2024 – Atualmente",
    title: "Bacharelado em Engenharia de Computação",
    org: "UEPG – Universidade Estadual de Ponta Grossa",
    description:
      "Formação em computação com ênfase em sistemas, algoritmos e desenvolvimento de software aplicado.",
  },
  {
    period: "Maio/2022 – Dez/2023",
    title: "Ensino Médio",
    org: "Colégio Elite Rede de Ensino, Ponta Grossa",
    description: "",
  },
];

const languages = [
  { name: "Inglês Técnico", level: "Avançado", pct: 85 },
  { name: "Espanhol", level: "Básico", pct: 25 },
  { name: "Português", level: "Nativo", pct: 100 },
];

export default function ResumeArea() {
  return (
    <section
      id="resumo"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="resume" />

      {/* Cabeçalho */}
      <FadeIn>
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-5xl">
          <div>
            <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
              Trajetória
            </p>
            <h2 className="text-4xl font-extrabold text-secondary-900">
              Meu <span className="text-primary-700">resumo</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="/curriculo.pdf"
              target="_blank"
              download
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 transition-colors duration-200 px-4 py-2.5 rounded-lg shadow-sm"
            >
              <Download className="w-4 h-4" />
              Baixar CV
            </a>
            {/* <a
              href="/certificados.pdf"
              download
              className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-primary-700 hover:bg-primary-800 transition-colors duration-200 px-4 py-2.5 rounded-lg shadow-sm"
            >
              <Eye className="w-4 h-4" />
              Ver Certificados
            </a> */}
          </div>
        </div>
      </FadeIn>

      {/* Conteúdo em duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-8 md:gap-14 max-w-5xl">
        {/* Coluna esquerda — Experiências */}
        <FadeIn delay={100}>
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <Briefcase className="w-5 h-5 text-primary-600" />
              <h3 className="text-base font-bold text-secondary-800 uppercase tracking-wider">
                Experiência
              </h3>
            </div>

            <div className="relative flex flex-col gap-0">
              {/* Linha vertical da timeline */}
              <div className="absolute left-1.75 top-2 bottom-2 w-px bg-secondary-200" />

              {experiences.map(
                ({ period, title, org, description, tags }, i) => (
                  <div key={i} className="relative pl-8 pb-8 last:pb-0">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary-600 bg-white" />

                    <span className="text-xs text-secondary-400 font-medium uppercase tracking-widest">
                      {period}
                    </span>
                    <h4 className="text-secondary-800 font-semibold text-sm mt-1 leading-snug">
                      {title}
                    </h4>
                    <p className="text-primary-600 text-xs font-medium mt-0.5">
                      {org}
                    </p>
                    {description && (
                      <p className="text-secondary-500 text-sm leading-relaxed mt-2">
                        {description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-secondary-500 bg-secondary-100 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </FadeIn>

        {/* Coluna direita — Formação + Idiomas */}
        <div className="flex flex-col gap-10">
          {/* Formação */}
          <FadeIn delay={200}>
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-secondary-800 uppercase tracking-wider">
                  Formação
                </h3>
              </div>

              <div className="relative flex flex-col gap-0">
                <div className="absolute left-1.75 top-2 bottom-2 w-px bg-secondary-200" />

                {education.map(({ period, title, org, description }, i) => (
                  <div key={i} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-primary-600 bg-white" />

                    <span className="text-xs text-secondary-400 font-medium uppercase tracking-widest">
                      {period}
                    </span>
                    <h4 className="text-secondary-800 font-semibold text-sm mt-1 leading-snug">
                      {title}
                    </h4>
                    <p className="text-primary-600 text-xs font-medium mt-0.5">
                      {org}
                    </p>
                    {description && (
                      <p className="text-secondary-500 text-sm leading-relaxed mt-2">
                        {description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Idiomas */}
          <FadeIn delay={300}>
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Languages className="w-5 h-5 text-primary-600" />
                <h3 className="text-base font-bold text-secondary-800 uppercase tracking-wider">
                  Idiomas
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {languages.map(({ name, level, pct }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-secondary-700 font-medium">
                        {name}
                      </span>
                      <span className="text-xs text-secondary-400">
                        {level}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-600 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
