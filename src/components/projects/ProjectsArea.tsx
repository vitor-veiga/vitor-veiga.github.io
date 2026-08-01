import { useState } from "react";
import { ExternalLink, File, Lock } from "lucide-react";
import ProjectMap from "./ProjectMap";
import GeometricBackground from "../ui/GeometricBackground";
import FadeIn from "../ui/FadeIn";
import valeDoRibeiraGeoJSON from "../../assets/vale_do_ribeira.json";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  longDescription: string;
  tags: string[];
  map: {
    longitude: number;
    latitude: number;
    label: string;
    zoom?: number;
    boundaryUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boundaryData?: any;
  };
  highlight?: string;
  documents?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WebGIS — Vias Públicas",
    subtitle: "Projeto de Extensão · UEPG",
    period: "fev/2025 – nov/2025",
    description:
      "Plataforma de registro georreferenciado de problemas em vias públicas de Ponta Grossa.",
    longDescription:
      "Plataforma WebGIS para registro georreferenciado de problemas em vias públicas, desenvolvida como extensão universitária na UEPG. Permite que cidadãos registrem ocorrências no mapa, com leitura de posição global, upload de fotos e autenticação de usuário. Gerou mais de 40 relatórios técnicos e recebeu avaliação positiva do Escritório / Laboratório de Planejamento Urbano e Regional da UEPG.",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "Leaflet",
    ],
    highlight: "+40 relatórios técnicos gerados",
    documents: "/webgis-vias-publicas.pdf",
    map: {
      longitude: -50.1583,
      latitude: -25.0994,
      label: "Ponta Grossa, PR",
      boundaryUrl:
        "https://servicodados.ibge.gov.br/api/v3/malhas/municipios/4119905?formato=application/vnd.geo+json",
    },
  },
  {
    id: 2,
    title: "WebGIS — Guaraqueçaba",
    subtitle: "Projeto de Extensão · UEPG",
    period: "dez/2024 – atualmente",
    description:
      "Plataforma WebGIS para gestão territorial, aprovada pela prefeitura municipal.",
    longDescription:
      "Sistema WebGIS desenvolvido no âmbito do projeto de assessoria para elaboração de Planos Diretores Participativos de municípios de baixo IDH no Paraná. A plataforma foi apresentada e aprovada diretamente pela prefeitura de Guaraqueçaba, com avaliação positiva quanto à usabilidade e aplicabilidade para a gestão territorial. Também utilizada como prova de conceito na Operação Rondon PR.",
    tags: [
      "React",
      "Python",
      "Flask",
      "MapLibre",
      "PostgreSQL",
      "PostGIS",
      "JWT",
    ],
    highlight: "Moção de Aplausos",
    documents: "/webgis-guaraquecaba.pdf",
    map: {
      longitude: -48.3321,
      latitude: -25.2778,
      label: "Guaraqueçaba, PR",
      boundaryUrl:
        "https://servicodados.ibge.gov.br/api/v3/malhas/municipios/4109500?formato=application/vnd.geo+json",
    },
    link: "https://webgis.uepg.br/guaraquecaba/",
  },
  {
    id: 3,
    title: "Operação Rondon PR",
    subtitle: "Sistema Integrado de Dados",
    period: "mar/2025 – atualmente",
    description:
      "App móvel para coleta em campo + plataforma WebGIS para visualização espacial das ações de extensão no Paraná.",
    longDescription:
      "Sistema integrado composto por aplicativo móvel de coleta de dados em campo e plataforma WebGIS para visualização e análise espacial. Proposto, aprovado e desenvolvido em reunião com todas as universidades participantes da Operação Rondon PR. Visa otimizar o fluxo de dados operacionais e dar suporte visual à tomada de decisão nas ações de extensão em municípios do Paraná.",
    tags: [
      "React",
      "React Native",
      "WebGIS",
      "MapLibre",
      "Flask",
      "PostgreSQL",
    ],
    highlight: "Aprovado por todas as universidades participantes",
    documents: "/operacao-rondon.pdf",
    map: {
      longitude: -51.5,
      latitude: -24.0,
      label: "Paraná, Brasil",
      boundaryUrl:
        "https://servicodados.ibge.gov.br/api/v3/malhas/estados/41?formato=application/vnd.geo+json",
    },
  },
  {
    id: 4,
    title: "WebGIS — Vale do Ribeira",
    subtitle: "Iniciação Tecnológica",
    period: "mar/2025 – atualmente",
    description:
      "Sistema WebGIS com modelagem preditiva para análise de dispersão de contaminantes em propriedades rurais.",
    longDescription:
      "Iniciação tecnológica focada no desenvolvimento de um sistema WebGIS integrado a modelos preditivos para análise da dispersão de contaminantes (chumbo, arsênio, cádmio, zinco) no Vale do Ribeira e seu impacto em propriedades rurais. O projeto integra ciência de dados geográficos e monitoramento ambiental, com potencial de aplicação em políticas públicas de saúde e meio ambiente.",
    tags: [
      "WebGIS",
      "MapLibre",
      "Modelagem Preditiva",
      "Dados Ambientais",
      "PostGIS",
      "Python",
    ],
    highlight: "Análise de 4 contaminantes",
    map: {
      longitude: -48.5,
      latitude: -24.7,
      label: "Vale do Ribeira, PR/SP",
      boundaryData: valeDoRibeiraGeoJSON,
    },
  },
  {
    id: 5,
    title: "WebGIS CTM e PGV — Fernandes Pinheiro",
    subtitle: "Contrato com a Prefeitura Municipal e FAUEPG",
    period: "maio/2026 – atualmente",
    description:
      "Sistema WebGIS para gestão territorial, com foco em Cadastro Técnico Multifinalitário e Planta Genérica de Valores.",
    longDescription:
      "Contrato com a Prefeitura Municipal de Fernandes Pinheiro e FAUEPG para desenvolvimento de uma plataforma de gestão territorial integrada, estruturada a partir da modernização do Cadastro Técnico Municipal (CTM) e da atualização da Planta Genérica de Valores (PGV). Ao unificar dados geoespaciais e tributários em um ambiente dinâmico, a ferramenta assegura a justiça fiscal, otimiza a arrecadação e subsidia diagnósticos precisos para a administração pública.",
    tags: ["WebGIS", "MapLibre", "PostGIS", "Python"],
    map: {
      latitude: -25.41519429729478,
      longitude: -50.54808274159921,
      label: "Fernandes Pinheiro, PR ",
      boundaryUrl:
        "https://servicodados.ibge.gov.br/api/v3/malhas/municipios/4107736?formato=application/vnd.geo+json",
    },
  },
];

export default function ProjectsArea() {
  const [selected, setSelected] = useState<Project>(projects[0]);

  return (
    <section
      id="projetos"
      className="relative overflow-hidden min-h-screen px-6 md:px-16 py-24 flex flex-col justify-center"
    >
      <GeometricBackground variant="projects" />
      {/* Cabeçalho */}
      <FadeIn>
        <div className="mb-10">
          <p className="text-secondary-400 text-sm uppercase tracking-widest font-semibold mb-2">
            Trabalhos recentes
          </p>
          <h2 className="text-4xl font-extrabold text-secondary-900">
            Meus <span className="text-primary-700">projetos</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary-600 rounded-full mt-4" />

          {/* Aviso de confidencialidade */}
          <div className="my-10 flex items-start gap-3 bg-secondary-50/80 backdrop-blur-sm border border-secondary-200 rounded-lg px-4 py-3 max-w-2xl">
            <Lock className="w-4 h-4 text-secondary-400 shrink-0 mt-0.5" />
            <p className="text-secondary-500 text-xs leading-relaxed">
              Os repositórios destes projetos são privados. Por envolverem
              plataformas institucionais com{" "}
              <span className="text-secondary-700">
                dados territoriais sensíveis, informações de gestão pública e
                acordos de confidencialidade
              </span>{" "}
              com prefeituras e universidades parceiras, o código-fonte não pode
              ser divulgado publicamente. Fico à disposição para apresentar os
              sistemas em uma conversa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:min-h-150">
            {/* Lista de projetos */}
            <div className="md:col-span-2 flex flex-col gap-3 md:overflow-y-auto pr-1">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelected(project)}
                  className={`text-left flex flex-col gap-2 px-5 py-4 rounded-xl border transition-all duration-200 ${
                    selected.id === project.id
                      ? "bg-primary-50/90 backdrop-blur-sm border-primary-500 shadow-sm"
                      : "bg-white/80 backdrop-blur-sm border-secondary-200 shadow-sm hover:bg-secondary-50/80 hover:border-secondary-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-secondary-800 font-semibold text-sm leading-snug">
                      {project.title}
                    </span>
                    {selected.id === project.id && (
                      <span className="shrink-0 w-1.5 h-1.5 mt-1.5 rounded-full bg-primary-600" />
                    )}
                  </div>
                  <span className="text-secondary-400 text-xs">
                    {project.subtitle}
                  </span>
                  <p className="text-secondary-500 text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-secondary-500 bg-secondary-50 border border-secondary-200 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-secondary-400 px-1">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Detalhe do projeto selecionado */}
            <div className="md:col-span-3 flex flex-col gap-4">
              {/* Info */}
              <div className="bg-white/80 backdrop-blur-sm border border-secondary-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-secondary-900 text-xl font-bold">
                      {selected.title}
                    </h3>
                    <p className="text-secondary-400 text-sm mt-0.5">
                      {selected.subtitle} · {selected.period}
                    </p>
                  </div>
                  {selected.highlight && (
                    <span className="text-xs text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1.5 rounded-full">
                      {selected.highlight}
                    </span>
                  )}
                </div>

                <p className="text-secondary-600 text-sm leading-relaxed">
                  {selected.longDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-secondary-600 bg-secondary-50 border border-secondary-200 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {selected.documents ? (
                    <a
                      href={selected.documents}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs bg-primary-700 text-white px-3 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 cursor-pointer"
                    >
                      <File className="w-3.5 h-3.5" />
                      Documento comprobatório
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs text-secondary-400 border border-secondary-200 px-3 py-2 rounded-lg">
                      <Lock className="w-3.5 h-3.5" />
                      Documentos indisponíveis
                    </div>
                  )}

                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-primary-700 bg-primary-50 border border-primary-200 px-3 py-2 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Acessar projeto
                    </a>
                  )}

                  <div className="inline-flex items-center gap-2 text-xs text-secondary-400 border border-secondary-200 px-3 py-2 rounded-lg">
                    <Lock className="w-3.5 h-3.5" />
                    Repositório privado
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="flex-1 min-h-64 rounded-xl overflow-hidden border border-secondary-200 relative">
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-secondary-600 text-xs px-3 py-1.5 rounded-lg border border-secondary-200 pointer-events-none">
                  📍 {selected.map.label}
                </div>
                <ProjectMap
                  key={selected.id}
                  longitude={selected.map.longitude}
                  latitude={selected.map.latitude}
                  zoom={selected.map.zoom}
                  label={selected.map.label}
                  boundaryUrl={selected.map.boundaryUrl}
                  boundaryData={selected.map.boundaryData}
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
