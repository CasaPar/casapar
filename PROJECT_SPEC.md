# PROJECT_SPEC.md — CasaPar: Consultório de Casal

> Fonte de verdade visual. Gerado pelo Orquestrador. Não editar o CLAUDE.md.

---

## 1. Análise da Referência

### Referência: congra.framer.website
**Estilo identificado:** Dark editorial — event/conference page com layout single-column,
tipografia pesada e bold, divisão clara de seções, acento elétrico (azul) sobre fundo quase preto.

**Padrões extraídos:**
- Fundo extremamente escuro (quase preto, tom neutro/frio)
- Hierarquia tipográfica agressiva: headings grandes e condensados
- Seções claramente delimitadas com espaçamento generoso
- Tags/badges com cor de acento (azul na referência → ouro na CasaPar)
- Grid de cards para apresentação de pessoas/conteúdo
- Stats section com números grandes e contexto curto
- Seção de cronograma/agenda (adaptado para protocolo)
- Seção de preços/ingressos (adaptado para lista de espera)
- Linha fina horizontal como separador de seções
- Mobile: layout completamente stacked (single column)

---

## 2. Adaptação para CasaPar

O site de referência é tech/evento — neutro e geométrico.
A CasaPar é luxury/estratégico — elegante e editorial.

**Adaptações aplicadas:**
- Azul elétrico → Ouro envelhecido (#C9A458)
- Tipografia condensada/bold → Serif sofisticada + sans refinada
- Tom frio → Tom quente (preto amanteigado, não neutro)
- Grid de speakers → Grid de mentores + metodologia
- Agenda → Protocolo Alicerce Inabalável (estrutura dos encontros)
- Ingressos → Lista de espera (sem preço visível)

---

## 3. Paleta de Cores

```css
/* === CORES BASE === */
--color-bg:           #080706;   /* Preto amanteigado — fundo principal */
--color-bg-card:      #0F0E0C;   /* Cards e seções alternadas */
--color-bg-elevated:  #161410;   /* Elementos elevados, modais, destaque */
--color-border:       #2A2620;   /* Bordas sutis entre seções */
--color-border-gold:  #3D3020;   /* Bordas com toque dourado */

/* === TEXTO === */
--color-text-primary: #F5EED8;   /* Branco cremoso — texto principal */
--color-text-secondary:#9E9080;  /* Cinza quente — subtextos, labels */
--color-text-muted:   #5C5548;   /* Texto de apoio, placeholders */

/* === ACENTO — OURO === */
--color-gold:         #C9A458;   /* Ouro principal */
--color-gold-light:   #E8C97A;   /* Ouro claro — hover, highlights */
--color-gold-dark:    #8B6E32;   /* Ouro escuro — sombras, subtexto dourado */
--color-gold-muted:   #2A220E;   /* Fundo dourado muted (badges, tags) */

/* === UTILITÁRIOS === */
--color-white:        #FFFFFF;
--color-overlay:      rgba(8, 7, 6, 0.85);  /* Overlay sobre imagens */
```

---

## 4. Tipografia

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,700;1,800&display=swap');
```

### Variáveis de Fonte
```css
--font-display: 'Plus Jakarta Sans', sans-serif;  /* Headings — 800/700, extraída da referência */
--font-caps:    'Plus Jakarta Sans', sans-serif;  /* Labels/tags — 700 uppercase */
--font-body:    'Plus Jakarta Sans', sans-serif;  /* Corpo, nav, botões — 300/400 */
```

> **Nota:** Plus Jakarta Sans extraída diretamente da referência (congra.framer.website).
> Substituiu Cormorant Garamond + Cinzel + Jost.

### Escala Tipográfica
```css
--text-xs:    0.75rem;   /* 12px — labels, micro-texto */
--text-sm:    0.875rem;  /* 14px — captions, rodapé */
--text-base:  1rem;      /* 16px — corpo padrão */
--text-lg:    1.125rem;  /* 18px — corpo destacado */
--text-xl:    1.25rem;   /* 20px — subtítulos */
--text-2xl:   1.5rem;    /* 24px — títulos de seção pequenos */
--text-3xl:   2rem;      /* 32px — títulos de seção */
--text-4xl:   2.75rem;   /* 44px — headings secundários */
--text-5xl:   3.75rem;   /* 60px — headings principais */
--text-6xl:   5rem;      /* 80px — display hero (desktop) */
--text-7xl:   6.5rem;    /* 104px — display hero XL (1440px+) */
```

### Usos
| Elemento | Fonte | Peso | Tamanho | Case |
|----------|-------|------|---------|------|
| Hero headline | Cormorant Garamond | 600 | 5xl–7xl | Normal |
| Hero headline (itálico) | Cormorant Garamond Italic | 400 | 5xl–7xl | Normal |
| Section headings | Cormorant Garamond | 500 | 3xl–4xl | Normal |
| Labels / tags | Cinzel | 500 | xs | Uppercase + letter-spacing 0.15em |
| Nav links | Jost | 500 | sm | Uppercase + letter-spacing 0.1em |
| Botões | Jost | 600 | sm | Uppercase + letter-spacing 0.12em |
| Body text | Jost | 300–400 | base–lg | Normal |
| Stats (números) | Cormorant Garamond | 300 | 5xl–6xl | Normal |
| Depoimentos | Cormorant Garamond Italic | 400 | xl–2xl | Normal |

---

## 5. Espaçamentos

```css
--spacing-xs:   0.5rem;    /*  8px */
--spacing-sm:   1rem;      /* 16px */
--spacing-md:   1.5rem;    /* 24px */
--spacing-lg:   2.5rem;    /* 40px */
--spacing-xl:   4rem;      /* 64px */
--spacing-2xl:  6rem;      /* 96px */
--spacing-3xl:  8rem;      /* 128px */
--spacing-4xl:  10rem;     /* 160px */

/* Padding de seção */
--section-padding-y: var(--spacing-3xl);  /* 128px top/bottom padrão */
--section-padding-x: 1.5rem;              /* Mobile */
--container-max:     1280px;
--container-narrow:  860px;
```

---

## 6. Estrutura de Seções (Ordem)

1. **Navbar** — Logo + nav links + CTA "Lista de Espera"
2. **Hero** — Headline principal + subtítulo + CTAs + prova rápida
3. **Problema** — Espelho da dor (3 pontos)
4. **Solução / Apresentação** — Quem são Edson e Carol + posicionamento
5. **Serviço** — Protocolo Alicerce Inabalável (detalhes da oferta)
6. **Metodologia** — Tríade Evolutiva (3 pilares visuais)
7. **Diferenciais** — 4 cards com especificidade
8. **Depoimentos** — 3 cards com nome, negócio, resultado
9. **Stats** — 4 números com contexto
10. **FAQ** — 5 perguntas/objeções com accordion
11. **CTA Final** — Headline de reforço + CTA + redutor de risco
12. **Footer** — Tagline + links + contato + redes sociais
13. **WhatsApp Flutuante** — Botão fixo no canto inferior direito

---

## 7. Layout e Grid

```css
/* Container */
.container { max-width: 1280px; margin: 0 auto; padding: 0 var(--spacing-lg); }
.container--narrow { max-width: 860px; }

/* Grid de Cards */
--grid-2: repeat(2, 1fr);
--grid-3: repeat(3, 1fr);
--gap-cards: 1.5rem;   /* 24px entre cards */
--gap-section: 4rem;   /* 64px entre blocos dentro da seção */
```

### Breakpoints
```css
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg:  1024px;
--bp-xl:  1280px;
--bp-2xl: 1440px;
```

---

## 8. Animações e Interações

### Fade-up (scroll reveal — padrão)
```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger (escalonamento entre elementos)
```css
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
```

### Hover em Cards
```css
/* Sem scale que cause layout shift */
transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
border-color: var(--color-border) → var(--color-gold-dark);
box-shadow: 0 0 0 1px var(--color-gold-dark), 0 8px 32px rgba(201, 164, 88, 0.08);
```

### Linha Dourada de Destaque (hero accent)
- Linha fina horizontal `1px` em ouro sob a palavra de destaque da headline

### Navbar Scroll Behavior
- Default: transparente sobre o hero
- Após 80px de scroll: `background: rgba(8,7,6,0.92); backdrop-filter: blur(12px);`

### Durations
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 600ms;
--duration-reveal: 700ms;
--easing: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 9. Componentes Visuais

### Tag / Badge
```
background: var(--color-gold-muted);
border: 1px solid var(--color-gold-dark);
color: var(--color-gold);
font: Cinzel 500, 11px, uppercase, letter-spacing 0.15em;
padding: 6px 14px;
border-radius: 2px;
```

### Botão Primário
```
background: var(--color-gold);
color: #080706;
font: Jost 600, 13px, uppercase, letter-spacing 0.12em;
padding: 16px 36px;
border-radius: 2px;
hover: background var(--color-gold-light), transform translateY(-1px);
```

### Botão Secundário (outline)
```
background: transparent;
border: 1px solid var(--color-gold-dark);
color: var(--color-gold);
hover: background var(--color-gold-muted);
```

### Linha Separadora de Seção
```
border-top: 1px solid var(--color-border);
margin: 0 auto;
max-width: 1280px;
```

### Card de Depoimento
```
background: var(--color-bg-card);
border: 1px solid var(--color-border);
padding: 40px;
border-radius: 4px;
font: Cormorant Garamond Italic, 20px;
hover: border-color var(--color-gold-dark);
```

### Card de Diferencial
```
background: transparent;
border: 1px solid var(--color-border);
padding: 32px;
border-radius: 4px;
ícone: SVG inline ouro (24px)
```

### Stats
```
font: Cormorant Garamond 300, 80px;
cor: var(--color-text-primary);
label: Cinzel 500, 11px, uppercase, var(--color-text-secondary);
```

### Accordion FAQ
```
border-bottom: 1px solid var(--color-border);
pergunta: Jost 500, 16px;
ícone: + / − em ouro;
resposta: Jost 300, 15px, var(--color-text-secondary);
```

---

## 10. Elementos Visuais de Identidade

- **Motivo xadrez:** Grade sutil em SVG como textura de fundo em seções selecionadas
  (opacity 0.03, apenas decorativo — nunca dominante)
- **Linha dourada:** Separador fino horizontal `1px solid var(--color-gold)` usado
  em momentos-chave (início do hero, após o logo)
- **Diagonal accent:** Elemento tipográfico em itálico na headline principal (palavra-chave)
- **Aspectos de tabuleiro:** Numeração de etapas em estilo "casa de xadrez" (01, 02, 03)

---

## 11. Responsividade — Regras Específicas

### Mobile (até 768px)
- Headline hero: `--text-4xl` (44px) → nunca abaixo de 36px
- Padding seções: `80px 24px`
- Grid cards: 1 coluna
- Stats: 2 colunas (2x2)
- Navbar: hamburger menu, fundo sólido quando aberto

### Tablet (768px–1024px)
- Headline hero: `--text-5xl` (60px)
- Grid cards: 2 colunas
- Stats: 2 colunas

### Desktop (1024px+)
- Headline hero: `--text-6xl` a `--text-7xl`
- Grid diferenciais: 2x2
- Grid depoimentos: 3 colunas
- Stats: 4 colunas

---

## 12. O que NUNCA fazer neste projeto

- Usar cores pastel, rosas ou tons associados a terapia de casal convencional
- Usar ícones de coração, casal abraçado ou metáforas românticas óbvias
- Usar Inter, Roboto, Arial, Helvetica ou system-ui
- Usar gradientes coloridos (arco-íris, purple-to-blue etc.)
- Usar sombras agressivas brancas — apenas sombras douradas/escuras sutis
- Usar Bootstrap ou qualquer framework CSS genérico
- Criar layout "template de terapia" — o design deve lembrar uma firma de estratégia de alto nível
