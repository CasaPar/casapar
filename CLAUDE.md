# Instruções do Projeto — Landing Page

## Skills Obrigatórias

Antes de criar qualquer interface, componente, layout ou texto, leia e aplique
as diretrizes nas seguintes skills:
~/.claude/skills/copywriting-pro/SKILL.md   → Todo conteúdo textual
~/.claude/skills/frontend-design/SKILL.md   → Direção criativa e estética
~/.claude/skills/ui-ux-pro-max/SKILL.md     → Design system e padrões de UX

Nunca comece a implementar copy, UI ou design sem consultar os arquivos acima primeiro.

---

## Responsabilidade dos Arquivos

Existem três tipos de arquivo neste projeto. Cada agente deve respeitar
essa separação sem exceção:

### `CLAUDE.md` — INTOCÁVEL
- Define processo de trabalho e regras de comportamento dos agentes
- Vale para qualquer projeto, qualquer nicho, qualquer cliente
- NUNCA deve ser editado por nenhum agente, sob nenhuma circunstância
- Não contém cores, fontes, estilos ou qualquer detalhe específico de projeto

### `PROJECT_SPEC.md` — Gerado pelo Orquestrador a cada projeto
- Criado do zero para cada novo projeto
- Contém tudo que é específico da referência: paleta, fontes, seções,
  espaçamentos, animações, padrões de layout
- É a fonte de verdade visual compartilhada entre todos os sub-agentes

### `CONTENT.md` — Gerado pelo Sub-Agente 0 a cada projeto
- Criado do zero pelo Sub-Agente 0 antes de qualquer agente de design começar
- Contém todo o conteúdo textual: headlines, serviços, depoimentos, contatos
- É a fonte de verdade de conteúdo compartilhada entre todos os sub-agentes
- Nenhum agente de design pode inventar texto fora do CONTENT.md

---

## Ordem de Execução Obrigatória

Orquestrador  → Lê skills, captura screenshots, cria PROJECT_SPEC.md
Sub-Agente 0  → Lê copywriting-pro/SKILL.md, cria CONTENT.md completo
Sub-Agente 1  → Lê frontend-design + ui-ux-pro-max, cria design system base
Sub-Agentes 2, 3, 4 → Rodam em PARALELO, usam PROJECT_SPEC.md + CONTENT.md
Sub-Agente 5  → Integra, valida copy + design + links, entrega QA final


Nenhum agente de design começa antes do CONTENT.md estar pronto.

---

## Padrão de Código

- **HTML**: Semântico (HTML5) — use `<section>`, `<article>`, `<header>`, `<main>`, `<footer>` corretamente
- **CSS**: Variáveis CSS obrigatórias (`--color-*`, `--font-*`, `--spacing-*`), mobile-first
- **JS**: Vanilla por padrão; React apenas quando o projeto exigir reatividade complexa
- **Nenhum framework CSS genérico** (sem Bootstrap, Bulma etc.) — escreva o CSS próprio do projeto

---

## Design

- Designs devem ser **únicos, memoráveis e profissionais** — nunca genéricos ou "template-like"
- **Fontes proibidas**: Inter, Roboto, Arial, Helvetica, Open Sans, system-ui
- As fontes usadas devem ser extraídas da referência e registradas no `PROJECT_SPEC.md`
- **Animações e micro-interações são obrigatórias**: hovers, scroll reveals, transições suaves
- Paleta de cores sempre extraída da referência e definida via variáveis CSS
- Contraste acessível obrigatório (WCAG AA mínimo)
- Hierarquia visual clara: tipografia expressiva + espaçamento generoso

## Copy

- Todo texto vem exclusivamente do `CONTENT.md` — nunca inventado pelos agentes de design
- **Nunca usar Lorem Ipsum** ou qualquer placeholder de texto
- Headlines nunca podem conter o nome da empresa
- Diferenciais nunca podem ser "qualidade", "excelência" ou "comprometimento"
- Todo texto escrito na segunda pessoa ("você")
- Serviços descritos por benefício, nunca por processo

## O que NUNCA fazer

- Usar fontes genéricas (Inter, Arial, Roboto, system-ui)
- Usar Lorem Ipsum ou qualquer placeholder de texto
- Usar cores, fontes ou estilos que não estejam no `PROJECT_SPEC.md`
- Usar texto que não esteja no `CONTENT.md`
- Editar o `CLAUDE.md` por qualquer motivo
- Pular etapas de screenshot e comparação visual
- Agente de design começar antes do CONTENT.md estar pronto

---

## Estrutura de Arquivos
src/
assets/     → imagens, fontes locais, ícones SVG
css/        → estilos (main.css + módulos por seção)
js/         → scripts (main.js + módulos)
components/ → partes reutilizáveis (hero, navbar, footer…)
public/       → arquivos estáticos prontos para deploy
screenshots/
reference/  → capturas do site de referência
progress/   → capturas durante o desenvolvimento

---

## Screenshot Workflow — Visual Validation

### Objetivo
Após cada mudança significativa na UI, o agente deve tirar um screenshot
e salvar na pasta de progresso para comparação visual com a referência.

### Fresh Start em Cada Nova Tarefa
No início de cada novo projeto ou demanda, limpe a pasta de progresso:

```bash
find screenshots/progress -type f -name "*.png" -delete && echo "Screenshots cleared."
```

Confirme ao usuário: "Progress screenshots cleared. Starting fresh capture."

### Quando Tirar Screenshots
- Após implementar ou atualizar a Navbar
- Após implementar ou atualizar o Hero
- Após adicionar ou modificar qualquer seção
- Após qualquer correção que afete o visual
- Na entrega final de cada seção ou da página completa

### Como Tirar Screenshots

```bash
npx playwright screenshot http://127.0.0.1:5500/index.html screenshots/progress/[section-name].png --viewport-size="1440,900" --full-page
```

Se o Playwright não estiver instalado:

```bash
npx playwright install chromium
```

### Convenção de Nomenclatura
screenshots/progress/01-navbar.png
screenshots/progress/02-hero.png
screenshots/progress/03-[nome-da-secao].png
screenshots/progress/04-[nome-da-secao].png
screenshots/progress/05-full-page.png

### Captura da Referência
Quando uma REFERENCE_URL for fornecida, capture automaticamente:

```bash
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('REFERENCE_URL', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/reference/reference-full.png', fullPage: true });
  await page.screenshot({ path: 'screenshots/reference/reference-viewport.png', fullPage: false });
  await browser.close();
  console.log('Reference captured!');
})();
"
```

Capture também seções específicas:
- `screenshots/reference/reference-hero.png`
- `screenshots/reference/reference-mid.png`
- `screenshots/reference/reference-footer.png`

### Relatório de Comparação
Após cada rodada de screenshots, gere um relatório com este formato:
COPY:
Headline sem nome da empresa: [✅ ou ❌]
Serviços orientados a benefício: [✅ ou ❌]
Depoimentos com resultado concreto: [✅ ou ❌]
FAQ com objeções reais: [✅ ou ❌]
CTA com verbo forte: [✅ ou ❌]
TYPOGRAPHY:
Heading font: [atual] vs [referência] → [✅ ou ❌]
Heading weight: [atual] vs [referência] → [✅ ou ❌]
Heading size: [atual] vs [referência] → [✅ ou ❌]
Letter spacing: [atual] vs [referência] → [✅ ou ❌]
Body font: [atual] vs [referência] → [✅ ou ❌]
Body size: [atual] vs [referência] → [✅ ou ❌]
Label style: [atual] vs [referência] → [✅ ou ❌]
Button font: [atual] vs [referência] → [✅ ou ❌]
LAYOUT:
Espaçamento de seções: [✅ ou ❌]
Grid de cards: [✅ ou ❌]
Responsivo mobile: [✅ ou ❌]
VISUAL:
Paleta de cores: [✅ ou ❌]
Animações: [✅ ou ❌]
Hover states: [✅ ou ❌]
LINKS:
Todos os CTAs linkados corretamente: [✅ ou ❌]
Redes sociais no footer: [✅ ou ❌]
Botão flutuante WhatsApp: [✅ ou ❌]
PRÓXIMOS AJUSTES: [lista do que ainda precisa de correção]

---

## Todo Workflow — Task Tracking

### Objetivo
Para cada novo projeto, criar e manter uma Todo list para rastrear
o progresso passo a passo, iterando até o resultado visual corresponder
à referência.

### Todo List Padrão

- [ ] Ler ~/.claude/skills/copywriting-pro/SKILL.md
- [ ] Ler ~/.claude/skills/frontend-design/SKILL.md
- [ ] Ler ~/.claude/skills/ui-ux-pro-max/SKILL.md
- [ ] Ler CLAUDE.md
- [ ] Capturar screenshots da referência
- [ ] Criar PROJECT_SPEC.md com análise da referência
- [ ] Sub-Agente 0: criar CONTENT.md completo
- [ ] Validar CONTENT.md (checklist de copy)
- [ ] Criar index.html — estrutura completa baseada no CONTENT.md
- [ ] Criar design system base (main.css + variáveis)
- [ ] Implementar seções com conteúdo do CONTENT.md
- [ ] Tirar screenshots e comparar copy + visual (rodada 1)
- [ ] Corrigir diferenças (rodada 2)
- [ ] Corrigir diferenças (rodada 3)
- [ ] Screenshot final — entrega da página completa

### Regras
- Marcar cada tarefa como concluída [x] antes de passar para a próxima
- Nunca pular as etapas de comparação visual
- Nunca pular a validação do CONTENT.md
- Continuar iterando até o resultado ser visualmente próximo da referência
- Compartilhar o caminho do screenshot após cada rodada

### screenshot.mjs Template

```js
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://127.0.0.1:5500/index.html');
await page.screenshot({
  path: 'screenshots/progress/full-page.png',
  fullPage: true
});
await browser.close();
console.log('Screenshot saved!');
```

---

## Checklist antes de entregar

- [ ] Skills copywriting-pro, frontend-design e ui-ux-pro-max aplicadas
- [ ] CONTENT.md criado pelo Sub-Agente 0 e validado
- [ ] PROJECT_SPEC.md criado e seguido
- [ ] Todo texto vem do CONTENT.md — nenhum texto inventado por agentes de design
- [ ] Design único (não genérico)
- [ ] Fonte da referência carregada (nunca Inter/Roboto/Arial)
- [ ] Animações implementadas
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Variáveis CSS usadas em todo o projeto
- [ ] HTML semântico
- [ ] Nenhum Lorem Ipsum ou texto placeholder
- [ ] Todos os links (CTA, WhatsApp, Instagram) verificados
- [ ] Screenshot final tirado e comparado com a referência