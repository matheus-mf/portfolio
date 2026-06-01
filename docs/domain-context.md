---
**Nome do Projeto:** Personal Developer Portfolio — Matheus Moreira Ferreira

**Descrição:** Portfólio pessoal de desenvolvedor Full Stack Senior com mais de 7 anos de experiência. Apresenta trajetória profissional, projetos entregues, stack tecnológica e habilidades técnicas/comportamentais.

Visual dark premium — inspirado em Linear, Vercel, GitHub e Raycast. Totalmente componentizado em Next.js 16 (Pages Router) + Chakra UI v3, com internacionalização via `react-i18next` (pt / en) e dados 100% estáticos em TypeScript.

---

**Personas:**

**Recrutador Técnico:** Avalia rapidamente senioridade, stack técnica, histórico de empresas e qualidade visual/profissional do portfólio. Necessita encontrar informações em segundos. Valoriza clareza, hierarquia visual e organização das experiências profissionais.

**Tech Lead / Engineering Manager:** Busca evidências de capacidade técnica, complexidade dos projetos entregues, arquitetura de soluções, clareza de comunicação e organização. Avalia skills técnicas e interpessoais para fins de contratação ou colaboração.

**Cliente ou Empresa Contratante:** Valida credibilidade profissional, cases anteriores, experiência de mercado e qualidade de execução. Decide por contato ou proposta com base na percepção de valor gerada pela experiência visual e pelos projetos apresentados.

---

**Entidades (interfaces TypeScript — `src/types/index.ts`):**

- **Developer** — Perfil único do dono do portfólio
  - `name: string`
  - `title: string`
  - `bio: string`
  - `location: string`
  - `available: boolean`
  - `email: string`
  - `github: string`
  - `linkedin: string`
  - `instagram?: string`
  - ⚠️ Sem `twitter` — rede não utilizada. Sem avatar/foto.

- **Experience** — Experiência profissional na timeline
  - `id: string` — slug único (ex.: `"tog-lab"`)
  - `company: string`
  - `isCurrent: boolean`
  - `employmentType: 'full-time' | 'internship' | 'temporary'`
  - `tech: string[]`
  - `accent: string` — OKLCH para identidade visual do card
  - `startDate: string` — ISO `"YYYY-MM-DD"`
  - `endDate?: string` — ISO `"YYYY-MM-DD"`; ausente se `isCurrent`
  - ⚠️ `role`, `period`, `location`, `highlights` vivem em `public/locales/{lang}/experiences.json`

- **Project** — Projeto do portfólio
  - `id: string` — slug único
  - `tech: string[]`
  - `company: string`
  - `year: string`
  - `status: 'Publicado' | 'Em produção' | 'Open Source' | 'Arquivado' | 'MVP'`
  - `statusColor: string` — OKLCH
  - `gradient: string` — CSS `linear-gradient(...)` aplicado como background do card
  - `featured: boolean`
  - `github?: string`
  - `demo?: string`
  - ⚠️ `name` e `description` vivem em `public/locales/{lang}/projects.json`

- **HardSkill**
  - `name: string`
  - `level: number` — 0–100
  - `category: 'Frontend' | 'Language' | 'Backend' | 'Database' | 'Cloud' | 'DevOps' | 'Design'`

- **SoftSkill**
  - `key: string` — referência à chave de i18n em `skills.softSkills`
  - ⚠️ Sem `name` ou `description` inline — todos via `t('softSkills.{key}.name')`

- **StackCategory**
  - `id: 'frontend' | 'backend' | 'cloud' | 'database' | 'ai' | 'tools'`
  - `icon: LucideIcon`
  - `color: string` — OKLCH
  - `items: StackItem[]`
  - ⚠️ Sem `label` ou `description` inline — vindos de `public/locales/{lang}/stack.json`

- **StackItem**
  - `name: string`
  - `key: string` — referência à nota em `stack.categories.{id}.items.{key}`

- **ContactFormData** — Dados do formulário
  - `name: string`
  - `email: string`
  - `message: string`

- **ContactFormErrors** — Erros inline por campo
  - `name?: string`
  - `email?: string`
  - `message?: string`

---

**Dados Reais — Desenvolvedor (`src/data/developer.ts`):**

```
Nome:       Matheus Moreira Ferreira
Cargo:      Senior Full-Stack Engineer & Tech Lead
Bio:        "Mais de 7 anos entregando software para empresas nacionais e internacionais — do MVP ao produto escalado. Além das tecnologias, mergulho nos produtos e mercados para gerar valor real ao negócio."
Localização: Curitiba, Brasil
Disponível: true
Email:      matheus.cll.g@gmail.com
GitHub:     https://github.com/matheus-mf
LinkedIn:   https://www.linkedin.com/in/matheus-m-ferreira/
Instagram:  https://www.instagram.com/matheusmoreiraferreira/
```

---

**Dados Reais — Experiências Profissionais (`src/data/experiences.ts` + `public/locales/pt/experiences.json`):**

1. **Tog Lab (Tog Design)** | Software Engineering Full Stack · Project Manager
   - id: `tog-lab` | isCurrent: true | full-time | accent: `oklch(0.63 0.2 272)`
   - startDate: 2024-07-01 | Remoto
   - Tech: React, TypeScript, Node.js, PostgreSQL, SQL
   - Destaques:
     - Desenvolvimento e manutenção de funcionalidades para gestão de clientes e vendas em sistema financeiro voltado ao mercado agropecuário
     - Gerenciamento de backlog e coordenação de equipe multidisciplinar como project manager
     - Co-criação de produto e definição de soluções estratégicas alinhadas às demandas do agronegócio
     - Atuação full stack cobrindo desde a jornada do vendedor até a intermediação com instituições financeiras

2. **NEES — Núcleo de Excelência em Tecnologias Sociais** | Senior Software Engineering Full Stack
   - id: `nees-senior` | isCurrent: true | temporary | accent: `oklch(0.65 0.2 145)`
   - startDate: 2024-06-01 | Remoto
   - Tech: Node.js, Python, PostgreSQL, Clean Architecture, Docker, Swagger
   - Destaques:
     - Desenvolvimento de funcionalidades no back-end para sistema de gestão escolar que atende todas as redes de ensino do Brasil
     - Apoio à equipe de banco de dados na modelagem e estruturação dos dados do sistema
     - Colaboração com o time de infraestrutura no processo de implantação e deploys
     - Atuação junto ao time de requisitos na priorização e avaliação das atividades do projeto

3. **DiTi Performance** | Software Engineering Full Stack
   - id: `diti-performance` | isCurrent: false | full-time | accent: `oklch(0.7 0.18 35)`
   - startDate: 2022-12-01 | endDate: 2024-05-01 | Remoto
   - Tech: Node.js, TypeScript, AWS Lambda, Serverless, Google APIs, Clean Architecture
   - Destaques:
     - Desenvolvimento de sistema de análise e metrificação de performance de SEO para multinacional líder em varejo
     - Integração com múltiplas APIs da Google Stack (Search Console, Analytics, Merchant Center)
     - Definição de padrões arquiteturais e implantação de Clean Architecture nos projetos back-end e front-end
     - Desenvolvimento de sistemas automatizados serverless na AWS com foco em escalabilidade

4. **NEES — Núcleo de Excelência em Tecnologias Sociais** | Software Engineering Full Stack
   - id: `nees-first` | isCurrent: false | temporary | accent: `oklch(0.6 0.18 160)`
   - startDate: 2022-04-01 | endDate: 2023-02-01 | Remoto
   - Tech: React, Node.js, Python, PostgreSQL, Swagger, Docker
   - Destaques:
     - Desenvolvimento de software escalável para mais de 26 mil alunos e professores de escolas públicas do Brasil
     - Criação de biblioteca de componentes em React JS adotada por 20+ desenvolvedores em projetos distintos
     - Definição de padrões arquiteturais e implantação de boas práticas de Clean Code e Clean Architecture
     - Projetos voltados à recuperação do aprendizado afetado pela pandemia de COVID-19

5. **Vetta** | Software Engineering Full Stack
   - id: `vetta` | isCurrent: false | full-time | accent: `oklch(0.6 0.2 220)`
   - startDate: 2021-12-01 | endDate: 2022-12-01 | Remoto
   - Tech: React, TypeScript, Node.js, PostgreSQL
   - Destaques:
     - Desenvolvimento de sistemas de eficiência energética e sustentabilidade para as maiores metalúrgicas do mundo
     - Criação de componentes frontend com princípios SOLID e virtualização de listas, melhorando performance e manutenção
     - Desenvolvimento de endpoints com cálculos estatísticos para visualização em tabelas e gráficos interativos

6. **Tog Design** | Software Engineering Trainee → Júnior → Full Stack
   - id: `tog-design` | isCurrent: false | full-time | accent: `oklch(0.65 0.15 300)`
   - startDate: 2019-09-01 | endDate: 2022-01-01 | Dois Vizinhos, PR (Híbrido)
   - Tech: Vue.js, React, TypeScript, Node.js, Docker, Tailwind CSS, PHP, Nginx
   - Destaques:
     - Criação de biblioteca de componentes em React JS com documentação de uso para padronização entre projetos
     - Desenvolvimento de micro frontends em React para empresa referência em medicina preventiva e diagnóstica no Brasil
     - Implementação de projetos web em servidores Linux com Docker e Nginx
     - Progressão de Trainee para Júnior e Full Stack ao longo de 2 anos e 4 meses na mesma empresa

7. **Pinha Digital** | Software Engineering Trainee
   - id: `pinha-digital` | isCurrent: false | internship | accent: `oklch(0.65 0.18 10)`
   - startDate: 2019-04-01 | endDate: 2019-10-01 | Dois Vizinhos, PR
   - Tech: HTML/CSS, JavaScript, Vue.js, Bootstrap
   - Destaques:
     - Desenvolvimento do sistema responsivo de catálogo para o Grupo Doce D'ocê (alimentos ultracongelados)
     - Colaboração na definição de comportamentos e interfaces gráficas para projetos nacionais e internacionais
     - Manutenção do sistema Accord Iluminação: implementação de nova página e correção de bugs

---

**Dados Reais — Projetos (`src/data/projects.ts` + `public/locales/pt/projects.json`):**

1. **Gestão Presente na Escola (GPE) do MEC** | NEES | 2025 | Publicado | featured
   - id: `gpe`
   - Descrição: "Plataforma do Governo Federal que moderniza a gestão das escolas públicas, automatizando matrículas, enturmação e diários de classe. Atuei como desenvolvedor e líder técnico na construção do sistema, que integra redes municipais a uma base nacional de dados educacionais."
   - Tech: React, Next.js, PostgreSQL, Python, Django, AWS
   - gradient: `linear-gradient(135deg, oklch(0.63 0.2 190 / 0.15) 0%, transparent 60%)`
   - statusColor: `oklch(0.65 0.2 145)`

2. **Dashboard de Análise de SEO** | DiTi | 2023 | Publicado
   - id: `seo-dashboard`
   - Descrição: "Sistema de metrificação de SEO para grande varejista multinacional, integrando múltiplas APIs da Google Stack para monitorar performance de páginas, palavras-chave e taxa de conversão de vendas em um dashboard interativo."
   - Tech: React, Node.js, Serverless, AWS, AWS Lambda, Amazon DynamoDB, Google APIs
   - gradient: `linear-gradient(135deg, oklch(0.63 0.2 60 / 0.15) 0%, transparent 60%)`

3. **NeeDS, Biblioteca de Componentes** | NEES | 2022 | Publicado | featured
   - id: `needs`
   - Descrição: "Design system institucionalizado inspirado na identidade visual do Governo Federal, criado para padronizar o desenvolvimento de mais de 10 equipes. Publicado via npm, eliminou a recriação redundante de componentes em todo o ecossistema."
   - Tech: React, Chakra UI, NPM
   - gradient: `linear-gradient(135deg, oklch(0.63 0.2 272 / 0.15) 0%, transparent 60%)`

4. **Seu Sistema de restauração florestal** | Tog Design | 2020 | Publicado
   - id: `seu-sistema`
   - Descrição: "Plataforma online que regulariza propriedades rurais com desmatamento ilegal na Amazônia, permitindo que produtores voltem ao mercado formal por meio de procedimentos técnicos auditáveis."
   - Tech: Vue.js, PostgreSQL, Node.js, Express
   - gradient: `linear-gradient(135deg, oklch(0.63 0.2 145 / 0.15) 0%, transparent 60%)`

5. **Site Institucional do Grupo Doce D'ocê** | Tog Design | 2019 | Publicado
   - id: `doce-doce`
   - Descrição: "O Grupo Doce D'ocê é a maior indústria de alimentos ultracongelados do Paraná, com 33 anos de história. O site apresenta sua trajetória, portfólio de marcas, presença nacional e valores da empresa."
   - Tech: Vue.js, PHP, Laravel
   - gradient: `linear-gradient(135deg, oklch(0.63 0.2 45 / 0.15) 0%, transparent 60%)`

---

**Dados Reais — Hard Skills (`src/data/skills.ts`):**

| Nome | Nível | Categoria |
|------|-------|-----------|
| React / Next.js | 95% | Frontend |
| Vue.js | 88% | Frontend |
| TypeScript / JavaScript | 92% | Language |
| Python | 82% | Language |
| Node.js / NestJS | 85% | Backend |
| Django / Express.js | 80% | Backend |
| PostgreSQL | 82% | Database |
| AWS (S3, Lambda, SQS, SNS) | 76% | Cloud |
| Docker | 78% | DevOps |
| Git / GitFlow | 90% | DevOps |

**Dados Reais — Soft Skills (`src/data/skills.ts` + `public/locales/pt/skills.json`):**

| Key | Nome | Descrição |
|-----|------|-----------|
| `team-leadership` | Liderança de Equipe | Condução técnica de times, mentoria, code review e definição de padrões |
| `communication` | Comunicação Clara | Documentação técnica, apresentações para stakeholders e comunicação assíncrona |
| `adaptability` | Adaptabilidade | Rápida assimilação de novas tecnologias, stacks e contextos de produto |
| `problem-solving` | Resolução de Problemas | Debug sistemático, análise de root cause e condução de post-mortems |
| `agile-methods` | Metodologias Ágeis | Scrum, sprints, cerimônias e melhoria contínua do processo de desenvolvimento |
| `systemic-thinking` | Pensamento Sistêmico | Visão de trade-offs, impacto arquitetural e tomada de decisões de longo prazo |

**Dados Reais — Tech Tags (`src/data/skills.ts`):**
React, Next.js, Vue.js, TypeScript, JavaScript, HTML5, CSS, SCSS, Bootstrap, Node.js, NestJS, Express.js, Django, Python, REST API, JWT, Swagger, PostgreSQL, MongoDB, DynamoDB, Redis, AWS, Lambda, S3, SQS, SNS, Serverless, Docker, Linux, Git, GitHub, Scrum, TDD, Clean Architecture, SOLID, GitFlow

---

**Dados Reais — Stack Tecnológica (`src/data/stack.ts` + `public/locales/pt/stack.json`):**

**Frontend** (ícone: `Code2`, cor: `oklch(0.63 0.2 272)`) — "Interfaces modernas, acessíveis e performáticas"
React (principal), Next.js (SSR/SSG), Vue.js (alternativa), TypeScript (sempre), Chakra UI (components), Ant Design (enterprise), TanStack (state/query), Storybook (componentes), Vitest (testes), Zod (validação)

**Backend** (ícone: `Server`, cor: `oklch(0.65 0.2 145)`) — "APIs robustas, escaláveis e bem testadas"
Node.js (runtime), NestJS (framework), Express (leve), Django (Python), REST (padrão), Prisma (ORM), JWT (auth), Jest (testes), PyTest (Python), SOLID (princípios)

**Cloud & DevOps** (ícone: `Cloud`, cor: `oklch(0.7 0.18 35)`) — "Infraestrutura como código, CI/CD e observabilidade"
AWS EC2 (compute), AWS Lambda (serverless), AWS S3 (storage), AWS RDS (managed DB), AWS CloudWatch (monitoring), AWS EventBridge (events), AWS IAM (segurança), GitHub Actions (CI/CD), Docker (containers)

**Banco de Dados** (ícone: `Database`, cor: `oklch(0.65 0.2 200)`) — "Persistência relacional, documental e em cache"
PostgreSQL (principal), MariaDB (relacional), Redis (cache/filas), DynamoDB (NoSQL AWS), Firebase (BaaS)

**AI & ML** (ícone: `Sparkles`, cor: `oklch(0.65 0.22 320)`) — "Ferramentas de IA e automação de desenvolvimento"
Figma Make (design AI), Claude API (Anthropic), Lovable (fullstack AI), Hill Climbing (otimização)

**Ferramentas** (ícone: `Wrench`, cor: `oklch(0.65 0.15 230)`) — "Produtividade, qualidade e entrega contínua"
Figma (design), Notion (docs), Swagger (API docs), Sentry (erros)

---

**Dados Reais — Stats (Sobre Mim — `src/components/sections/AboutSection.tsx`):**

```typescript
const START_YEAR = 2019
const yearsExp = new Date().getFullYear() - START_YEAR  // dinâmico
```

| Valor | Label (pt) |
|-------|------------|
| `${yearsExp}+` | anos de experiência |
| `15+` | projetos entregues |
| `4` | empresas parceiras |
| `18+` | países visitados |

---

**Seções da Aplicação:**

- **Hero / Home** — Status de disponibilidade (badge pulsante verde), nome, cargo, bio com `{{years}}` interpolado, localização, tech tags, CTA "Ver Projetos" + CTA "Download CV", links sociais (GitHub, LinkedIn, Instagram, Email), `LanguageSwitcher` (pt/en). Background com floating orbs OKLCH e radial-gradient mask. Scroll cue animado.

- **Sobre Mim** — Bio em 3 parágrafos (p1 com `{{years}}` interpolado) + grid 2×2 de stats + 4 pilares (Além do Código, Visão de Negócio, Visão Global, Sempre Aberto) com ícones Lucide.

- **Skills** — 3 abas: hard skills com `SkillBar` animado (nível%); soft skills como cards com nome + descrição; tech tags cloud com `TechTag`. Categorias de hard skills com badge colorido.

- **Experiência Profissional** — Timeline vertical com dot colorido por empresa (`accent`). Cards com: empresa, cargo, período, `isCurrent` badge ("Atual"), localização, bullet list de destaques, tech tags. 7 experiências em ordem decrescente. Badge de tipo de vínculo (full-time / bolsista / estágio).

- **Projetos** — Grid responsivo (1→2→3 colunas) com filter toggle "Todos / Destaques". Cards com gradiente de topo, nome, empresa + ano, `StatusBadge`, descrição, tech tags, links GitHub/Demo. 5 projetos, 2 featured.

- **Stack** — Grid 3×2 de category cards. Cada card: ícone Lucide colorido, label, descrição, divider, lista de itens com nota em mono. 6 categorias.

- **Contato** — Formulário (nome, email, mensagem com contagem de caracteres até 1000) + 3 social link cards (GitHub, LinkedIn, Instagram) + card de Email. Feedback visual pós-envio. API: `POST /api/contact` via Resend.

- **Footer** — Tagline "Construindo produtos digitais com qualidade e intenção.", links de navegação, email + localização, copyright, "Feito em Next.js + Chakra UI + Claude Code".

---

**Design System:**

**Paleta — Dark Premium (OKLCH):**
```
--background:           oklch(0.072 0.009 265)   /* fundo base */
--foreground:           oklch(0.93 0.005 265)    /* texto primário */
--card:                 oklch(0.1 0.009 265)     /* superfície de card */
--secondary:            oklch(0.14 0.01 265)     /* superfície secundária */
--muted-foreground:     oklch(0.52 0.008 265)    /* texto secundário */
--border:               oklch(0.22 0.01 265 / 0.6)
--accent-violet:        oklch(0.63 0.2 272)      /* acento principal */
--accent-violet-dim:    oklch(0.63 0.2 272 / 0.15)
--accent-violet-border: oklch(0.63 0.2 272 / 0.35)
--glow-violet:          0 0 40px oklch(0.63 0.2 272 / 0.25)
```

Tokens Chakra v3 equivalentes (`src/theme/index.ts`): `bg`, `fg`, `card`, `card-secondary`, `muted`, `border`, `accent`, `accent-dim`, `accent-border`.

**Tipografia:**
- `--font-sans`: Inter, system-ui — corpo e UI
- `--font-mono`: JetBrains Mono, monospace — tags, badges, datas, notas técnicas
- Base: 16px | Escala: `clamp()` responsiva para headings

**Espaçamento:** Sistema 4pt — valores usados: 4, 8, 12, 16, 20, 24, 32, 48, 64

**Border radius:** `--radius: 0.75rem` | sm: 0.5rem | xl: 1rem | 2xl: 1.25rem

**Breakpoints:** Mobile (<768px), Tablet (768–1279px), Desktop (≥1280px) | max-width conteúdo: 1024px

**Animações:** `motion/react` (Framer Motion) — fade+translateY por seção; skill bars animadas on-viewport; stagger delay em tags. Ease padrão: `[0.16, 1, 0.3, 1]`.

---

**Arquitetura i18n:**

- **Biblioteca:** `react-i18next` (hooks diretos) + `i18next` — **não** usa `next-i18next` para componentes
- **Locales ativos:** `['pt']` (único locale compilado) — inglês existe em `public/locales/en/` mas não está ativado em `next.config.ts`
- **Inicialização:** `src/lib/i18n.ts` importado em `_app.tsx`; provider: `<I18nextProvider i18n={i18n}>`
- **Namespaces (9):**

| Namespace | Conteúdo |
|-----------|----------|
| `hero` | title, bio, CTAs, scrollCue, available |
| `about` | eyebrow, title, bio (p1/p2/p3), stats labels, pillars |
| `skills` | eyebrow, title, tabs, categories, softSkills |
| `experiences` | eyebrow, title, labels, dados por id (role/period/location/highlights) |
| `projects` | eyebrow, title, filters, status labels, links labels, items (name/description) |
| `stack` | eyebrow, title, categories (label/description/items com notas) |
| `nav` | links de navegação, CV button |
| `footer` | tagline, builtWith, copyright, headings |
| `contact` | form labels, validation messages, social labels |

- **Uso nos componentes:** `const { t } = useTranslation('nome-do-namespace')`
- **Dados estruturais** (arrays de tech, datas ISO, URLs, valores numéricos) ficam em `src/data/*.ts` — sem i18n

---

**Componentes da Aplicação (`src/components/`):**

**Seções (`sections/`):**
`HeroSection`, `AboutSection`, `SkillsSection`, `ExperienceSection`, `ProjectsSection`, `TechStackSection`, `ContactSection`

**Layout (`layout/`):**
`Navigation` — fixed, scroll-aware, IntersectionObserver para seção ativa, hamburger mobile
`Footer`

**Átomos Chakra UI (`ui/`):**
- `SectionHeader` — eyebrow (mono, accent) + title + subtitle opcional
- `TechTag` — badge mono, tamanhos `sm` / `md`, hover com border accent
- `SkillBar` — barra de progresso animada via IntersectionObserver (threshold 0.3)
- `StatusBadge` — dot colorido + label traduzido por status de projeto
- `AvailableBadge` — badge pulsante verde para disponibilidade
- `SocialLink` — wrapper de link social com validação de href
- `SocialIcons` — SVGs inline: `GithubIcon`, `LinkedinIcon`, `InstagramIcon` (lucide-react v1.17 removeu brand icons)
- `LanguageSwitcher` — toggle pt/en, persiste em localStorage, atualiza `document.documentElement.lang`

---

**Regras de Negócio:**

**Conteúdo e Exibição:**
- RN-001: Portfólio de perfil único — sem multi-tenancy, autenticação ou controle de acesso.
- RN-002: Experiências exibidas em ordem cronológica decrescente. `isCurrent: true` recebe badge "Atual" e dot animado.
- RN-003: Projetos suportam filtro "Todos" / "Destaques" (`featured: true`). Estado local ao componente.
- RN-004: StatusBadge mapeia status → cor OKLCH: "Publicado" → verde `oklch(0.65 0.2 145)`, "Em produção" → cor customizada, "Open Source" → violet, "MVP" → orange, "Arquivado" → cinza.
- RN-005: Hard skills renderizam `SkillBar` ativado ao entrar no viewport (IntersectionObserver, threshold 0.3), largura = `level%`, animação 0.8s `cubic-bezier`.
- RN-006: `AvailableBadge` usa ponto verde com `animate-pulse` CSS.
- RN-007: Links externos de projetos (`github`, `demo`) só renderizados se o campo estiver preenchido.
- RN-008: Projetos sem imagem — identidade visual via `gradient` CSS no card. Nunca `<img>` ou `<Image>`.
- RN-009: Stack exibe todos os itens de cada categoria sem colapso.
- RN-010: CTA "Download CV" aponta para `/cv-matheus-ferreira.pdf` em `/public`.

**Formulário de Contato:**
- RN-011: Valida nome (obrigatório), email (obrigatório, formato válido) e mensagem (obrigatória, até 1000 caracteres).
- RN-012: Envio via `POST /api/contact` usando SDK Resend (`RESEND_API_KEY` em `.env`). Feedback visual pós-envio com reset de campos.
- RN-013: Erros de validação exibidos inline por campo.

**Internacionalização:**
- RN-014: Todas as strings visíveis na UI vêm dos arquivos `public/locales/pt/{namespace}.json` via `useTranslation('{namespace}')`. Sem texto hardcoded nos componentes.
- RN-015: Locale ativo: `pt` (não `pt-BR`). Inglês existe em `public/locales/en/` mas requer ativação em `next.config.ts` (`locales: ['pt', 'en']`).
- RN-016: Dados estruturais (arrays de tech, datas, URLs, valores numéricos) ficam em `src/data/*.ts` — sem i18n.

**Design e Componentes:**
- RN-017: `colorMode` fixo em `dark` via `className="dark"` em `<Html>` no `_document.tsx`. Sem toggle de tema.
- RN-018: Valores visuais (cor, espaçamento, radius, sombra) via tokens do tema Chakra — sem valores hardcoded nos componentes.
- RN-019: Navegação com scroll suave (`scrollIntoView({ behavior: 'smooth' })`). Seção ativa detectada por IntersectionObserver.
- RN-020: Contraste mínimo WCAG AA: 4.5:1 texto normal, 3:1 texto grande.
- RN-021: Mobile: menu hamburger, cards empilhados, tipografia via `clamp()`.

---

**Validações Transversais:**

- Email deve ter formato válido (campo de contato).
- Datas de término anteriores às de início são inválidas.
- Listas obrigatórias (`tech`, `highlights`) devem ter ao menos um item.
- Textos com limite de caracteres são truncados com ellipsis na exibição e validados no formulário.
- Links externos devem ter protocolo explícito (`https://`).
- Campos `github` e `demo` em Project: se ausentes, os botões não são renderizados.

---

**Requisitos Técnicos:**

**Stack:**
- Framework: Next.js 16.2.6 (Pages Router, TypeScript)
- UI: Chakra UI v3 — API `createSystem(defaultConfig, config)`, **não** `extendTheme`
- i18n hooks: `react-i18next` (v17) — `useTranslation(namespace)`
- i18n config: `next-i18next.config.js` + `next.config.ts` com `i18n: { locales: ['pt'], defaultLocale: 'pt' }`
- Animações: `motion/react` (Framer Motion v12)
- Ícones: `lucide-react` v1.17 — brand icons removidos; usar `SocialIcons.tsx`
- Email: `resend` SDK (variável `RESEND_API_KEY`)

**Estrutura de arquivos:**
```
/public/locales/{pt,en}/{namespace}.json  ← strings de UI por namespace
/src/data/developer.ts                    ← perfil do desenvolvedor
/src/data/experiences.ts                  ← experiências (sem role/highlights — em i18n)
/src/data/projects.ts                     ← projetos (sem name/description — em i18n)
/src/data/skills.ts                       ← hardSkills[], softSkills[], techTags[]
/src/data/stack.ts                        ← stackCategories[] (sem label/desc — em i18n)
/src/theme/index.ts                       ← Chakra UI v3 system (OKLCH tokens)
/src/types/index.ts                       ← interfaces TypeScript
/src/lib/i18n.ts                          ← inicialização react-i18next
/src/components/sections/                 ← uma seção por arquivo
/src/components/ui/                       ← átomos reutilizáveis
/src/components/layout/                   ← Navigation, Footer
/src/pages/_app.tsx                       ← ChakraProvider + I18nextProvider
/src/pages/_document.tsx                  ← html lang="pt" className="dark"
/src/pages/api/contact.ts                 ← endpoint POST /api/contact (Resend)
```

**Verificação:** `npm run build` — TypeScript strict + produção. Sem testes unitários.

---

**Resultado:**

Portfólio dark premium, moderno, totalmente componentizado, responsivo — em produção com dados 100% reais de Matheus Moreira Ferreira. Internacionalizado em pt (en pronto para ativar). Arquitetura: dados estáticos TypeScript + strings i18n por namespace + tokens Chakra OKLCH.
