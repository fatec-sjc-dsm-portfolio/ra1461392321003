import { useEffect, useState } from 'react'
import nefroImage from '../assets/nefro.png'
import serviceDeskImage from '../assets/service-desk.png'
import fapgImage from '../assets/fapg.png'
import tecsusImage from '../assets/tecsus.png'
import unesImage from '../assets/unes.png'
import tripwiseImage from '../assets/tripwise.png'
import petfinderImage from '../assets/petfinder.png'
import huntpilotImage from '../assets/huntpilot.png'
import reforteImage from '../assets/reforte.png'
import castelloImage from '../assets/castello.png'
import yakinikuImage from '../assets/yakiniku.png'
import atlantisImage from '../assets/atlantis.png'
import almoxarifadoImage from '../assets/almoxarifado.png'
import visionaImage from '../assets/visiona.png'
import indicadoresImage from '../assets/indicadores-conversao.png'
import dashboardImage from '../assets/dash-agendamento.png'
import treinamentoImage from '../assets/plataforma-treinamento.png'
import microassistImage from '../assets/microassist.png'

export default function Projects() {
    const [activeTab, setActiveTab] = useState<'todos' | 'api' | 'academicos' | 'pessoais'>('todos')
    const [showCards, setShowCards] = useState(false)
    const [selectedProject, setSelectedProject] = useState<any>(null)

    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedProject])

    useEffect(() => {
        setShowCards(false)

        const animationFrame = requestAnimationFrame(() => {
            setShowCards(true)
        })

        return () => cancelAnimationFrame(animationFrame)
    }, [activeTab])

    const projects = [
        {
            title: "Unes",
            description:
                "Site institucional desenvolvido para prática de desenvolvimento web.",
            fullDescription:
                "O projeto Site UNES foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em desenvolvimento web, utilizando HTML, CSS e o framework Bootstrap para a construção de uma interface moderna, responsiva e organizada. O site simula a página institucional de uma universidade fictícia.\n\nDurante o desenvolvimento, foram trabalhados conceitos essenciais de front-end, como criação de layouts, organização de conteúdo, utilização de componentes visuais e adaptação da interface para diferentes tamanhos de tela. O Bootstrap foi utilizado para otimizar o processo de desenvolvimento, aproveitando seu sistema de grid, componentes prontos e recursos responsivos para garantir uma navegação intuitiva e agradável.",
            technologies: ["HTML", "CSS", "Bootstrap", "Flask", "Python", "MySQL"],
            image: unesImage,
            category: "Site",
            status: "Concluído",
            type: "academico",
            github: "https://github.com/Ana-Laura-Moratelli/site-unes"
        },
        {
            title: "TripWise",
            description:
                "Aplicativo para planejamento de viagens com organização de itinerários, pesquisa de voos e acomodações.",
            fullDescription:
                "O projeto TripWise foi desenvolvido com o objetivo de facilitar a organização e o planejamento de viagens, oferecendo uma plataforma completa para gerenciamento de itinerários, pesquisa de voos, acomodações e acompanhamento das informações da viagem em um único ambiente.\n\nO sistema permite que os usuários pesquisem voos e hotéis por meio da integração com APIs externas, exibindo informações detalhadas como preços, horários, companhias aéreas, avaliações de hospedagens e localização. Além disso, a plataforma oferece funcionalidades para organização de itinerários personalizados.\n\nOutro diferencial do projeto é o gerenciamento centralizado das informações da viagem, possibilitando armazenar dados importantes como reservas, documentos, contatos de emergência, seguros e detalhes dos deslocamentos. O sistema também conta com recursos de visualização em mapas.",
            technologies: ["TypeScript", "React Native", "Expo", "Firebase"],
            image: tripwiseImage,
            category: "Mobile",
            status: "Concluído",
            type: "academico",
            github: "https://github.com/Ana-Laura-Moratelli/tripwise",
        },
        {
            title: "Pet Finder App",
            description:
                "Protótipo de aplicativo voltado para adoção e localização de animais utilizando geolocalização em tempo real.",
            fullDescription:
                "O projeto Pet Finder consiste no desenvolvimento do protótipo de um aplicativo voltado para auxiliar na busca, localização e adoção de animais, utilizando recursos de geolocalização e notificações em tempo real para conectar pessoas interessadas em adoção, protetores independentes e organizações de resgate animal.\n\nNeste projeto, o foco esteve totalmente na criação da experiência do usuário (UX) e da interface visual (UI) da aplicação, desenvolvendo todo o protótipo no Figma. O objetivo foi construir uma solução intuitiva, moderna e acessível, proporcionando uma navegação simples e eficiente para usuários que desejam encontrar animais perdidos ou disponíveis para adoção.",
            technologies: ["Figma", "Experiência do Usuário"],
            image: petfinderImage,
            category: "Mobile",
            status: "Concluído",
            type: "academico",
            demo: "https://www.behance.net/gallery/231794167/Pet-Finder"
        },
        {
            title: "Atlantis",
            description:
                "Plataforma integrada para gestão de parques aquáticos, clubes e hotéis, centralizando operações e reservas.",
            fullDescription:
                "O projeto Atlantis foi desenvolvido com o objetivo de criar uma plataforma integrada para auxiliar parques aquáticos, clubes e hotéis na gestão e organização de suas operações diárias. A solução foi projetada para centralizar processos administrativos e operacionais em um único sistema.\n\nA plataforma contempla funcionalidades voltadas para diferentes áreas da gestão, permitindo o controle de usuários, reservas, atendimentos, serviços e operações internas. O sistema foi pensado para otimizar processos rotineiros, reduzir falhas manuais e facilitar o acompanhamento das informações em tempo real.\n\nEntre as funcionalidades implementadas estão o gerenciamento de clientes, controle de acessos, organização de reservas e serviços, além de módulos administrativos que auxiliam no monitoramento das operações do estabelecimento.",
            technologies: ["Tailwind CSS", "TypeScript", "Node.js", "React", "MySQL"],
            image: atlantisImage,
            category: "Sistema",
            status: "Concluído",
            type: "academico",
            github: "https://github.com/Ana-Laura-Moratelli/atlantis",
        },
        {
            title: "Nefrologia Pediátrica - API 1º semestre",
            description:
                "Esse projeto consiste em desenvolver um site com o objetivo de ajudar mães de crianças com insuficiência renal crônica, oferecendo orientações e informações importantes.",
            fullDescription: "O projeto Nefrologia Pediátrica é uma plataforma digital humanizada desenvolvida para servir como um porto seguro para mães e responsáveis de crianças enfrentando a jornada da insuficiência renal crônica. O site combina um robusto portal de orientações médicas simplificadas com um blog interativo, onde histórias reais são compartilhadas para criar uma rede de apoio emocional.\n\nDesenvolvido com Python (Flask) no backend e MySQL para persistência de dados, a plataforma prioriza a acessibilidade e a clareza visual, utilizando um design concebido no Figma. O sistema inclui uma área administrativa intuitiva que permite a gestão de conteúdos educativos e a moderação de relatos enviados pela comunidade, garantindo um ambiente seguro e informativo para todas as famílias.\n\nMinha contribuição no projeto envolveu a atuação no desenvolvimento Front-end e Back-end da plataforma, participando da criação das interfaces do sistema, implementação das funcionalidades da área administrativa e desenvolvimento das funcionalidades relacionadas ao gerenciamento dos conteúdos e relatos compartilhados na plataforma.",
            technologies: ["Figma", "HTML", "CSS", "JavaScript", "Flask", "Python", "MySQL"],
            image: nefroImage,
            category: "Site",
            status: "Concluído",
            type: "api",
            github: "https://github.com/Ana-Laura-Moratelli/API-NEFRO",
        },
        {
            title: "Service Desk - API 2º semestre",
            description:
                "Sistema desenvolvido para gestão de chamados técnicos, permitindo controle de SLA, cadastro de usuários e acompanhamento completo dos atendimentos.",
            fullDescription:
                "O projeto foi desenvolvido com o objetivo de criar uma solução completa para gestão de chamados de serviços (Service Desk), auxiliando empresas no controle, acompanhamento e organização do atendimento técnico. A plataforma foi projetada para centralizar os processos de suporte, permitindo uma gestão mais eficiente dos chamados, usuários, técnicos e acordos de nível de serviço (SLA).\n\nO sistema conta com funcionalidades voltadas para diferentes perfis de usuários, como administradores, técnicos e clientes, garantindo níveis de acesso específicos para cada tipo de operação. Entre as principais funcionalidades estão o cadastro de usuários, técnicos, equipamentos e horários de atendimento, além da abertura, acompanhamento e gerenciamento de chamados técnicos em diferentes status, como aberto, em processo, finalizado e concluído.\n\nOutro diferencial do projeto é o gerenciamento de SLA (Service Level Agreement), permitindo monitorar prazos e qualidade no atendimento dos chamados, contribuindo para maior organização operacional e melhoria na experiência do usuário. O sistema também inclui funcionalidades como base de conhecimento (FAQ) e cadastro de soluções para problemas recorrentes, facilitando a resolução rápida de incidentes e reduzindo retrabalho das equipes de suporte.\n\nMinha contribuição no projeto envolveu a atuação como Product Owner (PO), desenvolvedora Front-end e apoio no Back-end, participando da organização das demandas, definição das funcionalidades e desenvolvimento das interfaces da plataforma. Também contribui na implementação de funcionalidades relacionadas ao gerenciamento de chamados, usuários e acompanhamento dos atendimentos do sistema.",
            technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "Node.js", "MySQL"],
            image: serviceDeskImage,
            category: "Sistema",
            status: "Concluído",
            type: "api",
            github: "https://github.com/Ana-Laura-Moratelli/API-DESK",
        },
        {
            title: "Portal da Transparência - API 3º semestre",
            description:
                "Portal desenvolvido para a FAPG com foco em transparência, gerenciamento de projetos e visualização de dados institucionais.",
            fullDescription:
                "O projeto foi desenvolvido com o objetivo de criar um Portal da Transparência moderno e eficiente para a Fundação de Apoio à Pesquisa de Pós-Graduandos (FAPG), proporcionando maior acessibilidade, organização e transparência na gestão das informações institucionais e dos projetos administrados pela fundação. O sistema foi pensado para centralizar e disponibilizar dados públicos de forma clara, segura e intuitiva.\n\nA plataforma oferece funcionalidades completas para gerenciamento de projetos, usuários e dados institucionais, permitindo o cadastro, edição, exclusão e consulta de projetos vinculados à fundação. Além disso, o sistema conta com mecanismos de importação de dados do sistema legado da FAPG, garantindo a preservação das informações já existentes e facilitando a migração para a nova plataforma.\n\nOutro destaque do projeto é a implementação de dashboards e relatórios interativos, permitindo a visualização de dados por meio de filtros dinâmicos e indicadores que auxiliam no acompanhamento dos projetos e na tomada de decisões. O portal também foi desenvolvido com foco em segurança da informação e acessibilidade.\n\nMinha contribuição no projeto envolveu a atuação como Product Owner (PO), desenvolvedora Front-end e apoio no Back-end, participando da organização das demandas, definição das funcionalidades e desenvolvimento das interfaces do portal. Também contribui na implementação de funcionalidades relacionadas ao gerenciamento de projetos, dashboards interativos e integração de dados do sistema.", technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "Java", "Spring", "Python", "MySQL"],
            image: fapgImage,
            github: "https://github.com/Ana-Laura-Moratelli/API-2024.2-3SEM",
            category: "Sistema",
            status: "Concluído",
            type: "api",
        },
        {
            title: "Sistema de Monitoramento Ambiental - API 4º semestre",
            description:
                "Sistema desenvolvido para monitoramento ambiental em tempo real, integrando sensores IoT e dashboards meteorológicos.",
            fullDescription:
                "O projeto foi desenvolvido em parceria com a Tecsus com o objetivo de criar um sistema inteligente de monitoramento ambiental capaz de coletar, processar e visualizar dados meteorológicos em tempo real. A solução foi projetada para auxiliar no acompanhamento de condições climáticas e ambientais, promovendo maior conscientização ambiental e apoiando ações preventivas relacionadas a eventos meteorológicos.\n\nA plataforma integra sensores IoT responsáveis pela captura de informações como temperatura, umidade do ar, pressão atmosférica, velocidade do vento e índice pluviométrico. Esses dados são enviados automaticamente para o sistema, onde passam por processamento e armazenamento para posterior análise e exibição em dashboards interativos.\n\nO sistema foi estruturado com uma arquitetura escalável, permitindo o gerenciamento completo de estações meteorológicas, parâmetros climáticos, usuários e alertas. Entre as funcionalidades implementadas estão o cadastro, edição, visualização e remoção de estações meteorológicas e sensores, além do controle de permissões de acesso.\n\nMinha contribuição no projeto envolveu a atuação como Product Owner (PO), desenvolvedora Front-end e apoio no Back-end, participando da organização das demandas, definição das funcionalidades e desenvolvimento das interfaces da plataforma. Também contribui na implementação de funcionalidades relacionadas aos dashboards, gerenciamento das estações meteorológicas e integração dos dados ambientais exibidos no sistema.",
            technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "MongoDB", "MySQL"],
            image: tecsusImage,
            category: "Sistema",
            status: "Concluído",
            type: "api",
            github: "https://github.com/Ana-Laura-Moratelli/API-2025.1-4SEM"
        },
        {
            title: "App Gestão Almoxarifado Militar - API 5º semestre",
            description:
                "Aplicativo desenvolvido para gerenciamento de almoxarifado militar, controle de estoque e rastreabilidade de materiais.",
            fullDescription:
                "O projeto App Gestão Almoxarifado Militar foi desenvolvido com o objetivo de criar uma solução digital para gerenciamento de almoxarifado militar, permitindo maior controle, organização e rastreabilidade de materiais, equipamentos e recursos utilizados em operações e rotinas administrativas.\n\nO sistema contempla funcionalidades completas para controle de entradas e saídas de materiais, cadastro de produtos, gerenciamento de usuários e acompanhamento do estoque em tempo real. A solução permite registrar movimentações de itens, monitorar quantidades disponíveis e controlar níveis mínimos de estoque.\n\nEntre as funcionalidades implementadas estão o cadastro e categorização de materiais, controle de solicitações e entregas, gerenciamento de fornecedores e visualização de relatórios estratégicos para acompanhamento do estoque.\n\nMinha contribuição no projeto envolveu a atuação como Product Owner (PO) e também no desenvolvimento Front-end da aplicação. Fui responsável pelo acompanhamento e organização das demandas do projeto, alinhamento entre equipe e definição das funcionalidades do sistema, garantindo que as entregas estivessem de acordo com os objetivos propostos. Além disso, participei diretamente do desenvolvimento das interfaces da aplicação, criação de telas responsivas e implementação das funcionalidades relacionadas ao gerenciamento de estoque, movimentações de materiais e visualização das informações do almoxarifado, contribuindo para uma experiência mais intuitiva e eficiente aos usuários do sistema.",
            technologies: ["Figma", "TypeScript", "CSS", "HTML", "React", "Flutter", "Python", "Firebase", "PostgreSQL"],
            image: almoxarifadoImage,
            category: "Mobile",
            status: "Concluído",
            type: "api",
            github: "https://github.com/Ana-Laura-Moratelli/API-2025.2-5SEM",
        },
        {
            title: "Plataforma web para análise de aspectos ASG - API 6º semestre",
            description:
                "Plataforma desenvolvida em parceria com a Visiona para análise de indicadores ASG de propriedades rurais.",
            fullDescription:
                "O projeto consiste no desenvolvimento de uma plataforma web para análise de aspectos Ambientais, Sociais e de Governança (ASG) aplicada a propriedades rurais do Estado de São Paulo, desenvolvido em parceria com a Visiona Tecnologia Espacial.\n\nA plataforma foi projetada para integrar diferentes bases de dados ambientais, territoriais e cadastrais, possibilitando uma análise mais completa das propriedades rurais por meio de mapas interativos, indicadores ASG e visualizações geográficas em tempo real.\n\nMinha contribuição no projeto envolveu tanto a atuação como Product Owner (PO) quanto o desenvolvimento Front-end da plataforma. Fui responsável pelo acompanhamento e organização das demandas, alinhamento entre equipe e cliente, priorização de funcionalidades e apoio na definição dos requisitos do sistema. Além disso, atuei diretamente no desenvolvimento das interfaces da aplicação, contribuindo na criação de telas, implementação das funcionalidades visuais e integração das visualizações geoespaciais, indicadores ASG e mapas interativos da plataforma.",
            technologies: ["Figma", "TypeScript", "Tailwind CSS", "Next JS", "Leaflet", "Python", "FastAPI", "PostgreSQL", "PostGIS", "Docker"],
            image: visionaImage,
            category: "Sistema",
            status: "Andamento",
            type: "api",
            github: "https://github.com/Ana-Laura-Moratelli/API-2026-6SEM",
        },
        {
            title: "Hunt Pilot",
            description:
                "Landing page desenvolvida para apresentar uma plataforma de IA para automação de atendimentos via WhatsApp.",
            fullDescription:
                "O projeto Hunt Pilot consiste no desenvolvimento da landing page institucional de uma plataforma com inteligência artificial voltada para automação de atendimentos e processos comerciais via WhatsApp.\n\nO objetivo da página foi apresentar de forma estratégica e visualmente atrativa as funcionalidades do sistema, destacando como a IA pode auxiliar empresas na qualificação de leads, atendimento automatizado, suporte ao cliente e aumento da produtividade comercial.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            image: huntpilotImage,
            category: "Landing Page",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/242214743/Hunt-Pilot",
        },
        {
            title: "Reforte Seguros",
            description:
                "Landing page institucional desenvolvida para empresa especializada em seguros e consórcios.",
            fullDescription:
                "O projeto Reforte Seguros consiste no desenvolvimento da landing page institucional da empresa Reforte Seguros, especializada em soluções de seguros e consórcios.\n\nO objetivo da página foi criar uma presença digital moderna e profissional, capaz de apresentar os serviços da empresa de forma clara, transmitir credibilidade e gerar novos contatos comerciais por meio de uma navegação estratégica e voltada para conversão.",
            technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
            image: reforteImage,
            category: "Landing Page",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/249379873/Reforte-Seguros-e-Consorcios",
        },
        {
            title: "Castello Locações",
            description:
                "Landing page institucional desenvolvida para empresa especializada em locação audiovisual.",
            fullDescription:
                "O projeto Castello Locações consiste no desenvolvimento da landing page institucional de uma empresa especializada em locação audiovisual, com foco em apresentar seus serviços de forma profissional, moderna e objetiva.\n\nA página foi desenvolvida para destacar as soluções oferecidas pela empresa, como locação de equipamentos audiovisuais, suporte para eventos, estruturas técnicas e recursos voltados à produção de experiências visuais e sonoras de qualidade.",
            technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
            image: castelloImage,
            category: "Landing Page",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/243834457/Castello-Locacoes",
        },
        {
            title: "Yakiniku",
            description:
                "Landing page desenvolvida para restaurante especializado em culinária japonesa.",
            fullDescription:
                "O projeto Yakiniku Floripa consiste no desenvolvimento da landing page institucional do restaurante Yakiniku, especializado em culinária japonesa.\n\nO objetivo da página foi criar uma presença digital moderna e atrativa, capaz de transmitir a identidade do restaurante, valorizar a experiência gastronômica oferecida e facilitar o contato com clientes e visitantes.",
            technologies: ["Vite", "React", "TypeScript", "Tailwind CSS"],
            image: yakinikuImage,
            category: "Landing Page",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/244458855/Yakiniku-Floripa",
        },
        {
            title: "Micro Assist",
            description:
                "Site institucional desenvolvido para empresa especializada em assistência técnica e soluções em tecnologia.",
            fullDescription:
                "O projeto Micro Assist consiste no desenvolvimento do site institucional da empresa Micro Assist, especializada em assistência técnica, manutenção e soluções em tecnologia.\n\nO site foi desenvolvido com foco em criar uma presença digital moderna, profissional e estratégica, permitindo apresentar os serviços da empresa de forma clara e organizada. A plataforma destaca os serviços oferecidos, informações da empresa, canais de contato e diferenciais do atendimento.\n\nAlém do foco visual e responsivo, o projeto foi pensado para fortalecer a credibilidade da marca, facilitar o contato com clientes e gerar novos atendimentos por meio de uma navegação intuitiva e voltada para conversão.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
            image: microassistImage,
            category: "Site",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/242214597/Micro-Assist",
        },
        {
            title: "Indicadores de conversão",
            description:
                "Dashboard integrado à plataforma de atendimento Hunt Pilot para análise de métricas, conversões e desempenho dos atendimentos.",
            fullDescription:
                "O projeto Indicadores de Conversão consiste no desenvolvimento de um dashboard integrado à plataforma de atendimento Hunt Pilot, permitindo o acompanhamento em tempo real de métricas relacionadas aos atendimentos, desempenho da equipe, conversões e resultados operacionais.\n\nA plataforma foi desenvolvida para centralizar informações estratégicas em um único ambiente, possibilitando análises visuais por meio de gráficos, indicadores e relatórios dinâmicos. Entre os dados exibidos estão métricas de conversão, quantidade de atendimentos, desempenho dos operadores, tempo de resposta e acompanhamento dos resultados comerciais.\n\nO objetivo do dashboard foi facilitar a tomada de decisões, otimizar processos de atendimento e fornecer uma visualização clara e organizada dos dados da operação.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
            image: indicadoresImage,
            category: "Dashboard",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/249380039/Indicadores-de-Conversao",
        },
        {
            title: "Dashboard de agendamento",
            description:
                "Dashboard integrado à plataforma de atendimento Hunt Pilot para acompanhamento de agendamentos, atendimentos e métricas operacionais.",
            fullDescription:
                "O projeto Dashboard de Agendamento consiste no desenvolvimento de um dashboard integrado à plataforma de atendimento Hunt Pilot, permitindo o acompanhamento em tempo real dos agendamentos realizados, desempenho operacional e métricas relacionadas aos atendimentos.\n\nA plataforma foi desenvolvida para centralizar informações estratégicas em um único ambiente, exibindo indicadores como quantidade de agendamentos realizados, atendimentos concluídos, desempenho da equipe, horários com maior volume de agendamentos e métricas operacionais.\n\nO objetivo do dashboard foi facilitar o monitoramento da operação, otimizar o acompanhamento dos atendimentos e fornecer uma visualização clara e organizada dos dados da plataforma.",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
            image: dashboardImage,
            category: "Dashboard",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/249380183/Dashboard-de-Agendamentos",
        },
        {
            title: "Hunt Treinamentos",
            description:
                "Plataforma corporativa desenvolvida para gerenciamento de treinamentos, trilhas de aprendizado, certificados e acompanhamento de progresso em tempo real, com arquitetura multi-tenant e personalização whitelabel.",
            fullDescription:
                "Hunt Treinamentos é uma plataforma corporativa de aprendizado desenvolvida para centralizar treinamentos, trilhas de conhecimento e capacitação de equipes em um ambiente moderno, intuitivo e responsivo. A plataforma permite gerenciamento completo de usuários, conteúdos, certificados e acompanhamento de progresso em tempo real.\n\nO sistema foi desenvolvido com arquitetura multi-tenant (whitelabel), permitindo que diferentes empresas utilizem a mesma aplicação com personalização de identidade visual, isolamento de dados e gestão independente de usuários, treinamentos e relatórios. Além disso, a plataforma conta com emissão automática de certificados, avaliações, dashboards administrativos e controle completo das trilhas de aprendizagem.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase"],
            image: treinamentoImage,
            category: "Sistema",
            status: "Concluído",
            type: "pessoal",
            demo: "https://www.behance.net/gallery/249443721/Hunt-Treinamentos",
        },
    ]

    const filteredProjects = projects.filter(project => {
        if (activeTab === 'todos') return true
        if (activeTab === 'api') return project.type === 'api'
        if (activeTab === 'academicos') return project.type === 'academico'
        if (activeTab === 'pessoais') return project.type === 'pessoal'
        return true
    })

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Projetos</h2>
                    <p className="section-subtitle">Alguns dos meus trabalhos mais recentes e significativos</p>
                </div>

                <div className="projects-tabs">
                    <button
                        className={`tab-button ${activeTab === 'todos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('todos')}
                    >
                        Todos
                    </button>
                     <button
                        className={`tab-button ${activeTab === 'api' ? 'active' : ''}`}
                        onClick={() => setActiveTab('api')}
                    >
                        API
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'academicos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('academicos')}
                    >
                        Acadêmicos
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'pessoais' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pessoais')}
                    >
                        Pessoais
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.slice().reverse().map((project, index) => (
                        <div
                            key={`${activeTab}-${project.title}`}
                            className={`project-card ${showCards ? 'content-animate' : ''}`}
                            style={{ transitionDelay: showCards ? `${index * 60}ms` : '0ms' }}
                        >
                            <div className="project-image">
                                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                                {(project.demo || project.github) && (
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Ver projeto"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15,3 21,3 21,9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Ver código"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <div className="project-category">{project.category}</div>
                                    <div className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                                        {project.status}
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(project.demo || project.github) && (
                                    <div className="project-actions">
                                        <button
                                            type="button"
                                            className="project-action-btn info-btn"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            Ver mais informações
                                        </button>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                className="project-action-btn demo-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Ver projeto"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15,3 21,3 21,9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Acesse a página
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="project-action-btn github-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Ver código"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Ver Código
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="project-modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Fechar modal"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="project-modal-content">
                            <h3 className="project-title" style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
                                {selectedProject.title}
                            </h3>
                            <p className="project-description" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                                {selectedProject.fullDescription || selectedProject.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
