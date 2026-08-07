# Uni Contabilidade Digital — Site

Redesign completo do site da [Uni Contabilidade Digital](https://www.unicontabilidadedigital.com/), desenvolvido do zero com stack de última geração.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack, 100% estático) |
| UI | React 19 + Tailwind CSS v4 |
| Animações | Motion 12 (Framer Motion) — scroll reveals, parallax, marquee, tickers |
| Ícones | lucide-react |
| Tipografia | Montserrat (display) + Inter (texto), via `next/font` |

## Identidade visual

Tokens extraídos de `Logo editada/Color Code Guide/Logo Color Guide.pdf`:

- Laranja `#F39A4A` (ação primária) · Azul `#5BA8E9` (acento) · Grafite `#494B4D` (texto)
- Azul profundo `#285A84` (seções escuras) · Cinza `#EFEFEF` (apoio)
- Ícone donut recriado como componente vetorial em `src/components/ui/logo.tsx`

Todos os tokens estão em `@theme` no `src/app/globals.css`.

## Rodando

```bash
npm install
npm run dev    # desenvolvimento — http://localhost:3000
npm run build  # build de produção (estático)
npm start      # serve o build
```

Deploy recomendado: Vercel (zero config).

## Estrutura

- `src/lib/site.ts` — **todo o conteúdo editável** (textos, serviços, depoimentos, FAQ, contatos). Alterações de copy são feitas aqui, sem tocar em componentes.
- `src/components/sections/` — seções da página na ordem de exibição.
- `src/components/ui/` — componentes reutilizáveis (reveal, ticker, spotlight, logo, FAB).

## Contatos oficiais (confirmados pelo cliente em 2026-08)

- WhatsApp/telefone: (27) 99272-3832
- E-mail: financeiro@uniservicos.com
- Endereço: Rua Moema, 25, Sala 1802, Ed. The Point — Divino Espírito Santo, Vila Velha - ES, 29107-250
- Instagram: @uni_contabilidade · Facebook: facebook.com/brunoafonsoservicos

## ⚠️ Validar com o cliente antes de publicar

1. **Estatísticas** (`stats` em `site.ts`) — "+200 empresas", "98% satisfação", "10+ anos", "15min resposta" são placeholders plausíveis; confirmar números reais.
2. **Depoimentos** — apenas o de Maria Silva veio do site atual; os demais são ilustrativos e devem ser trocados por depoimentos reais.
3. **Economia "R$ 12.480/ano"** no card do hero é ilustrativa.
