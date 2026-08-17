# 🎨 Dito — Landing Page

> **Crea. Juega. Vuelve a crear.** — Landing page de marca para *Dito*, kits de plastilina creativa para niños con estética **Claymorphism**.

Landing page estática construida con **Astro 7 + Tailwind CSS v4 + TypeScript**, preparada para **Cloudflare Pages**. Serie de 9 landing pages por estilo de diseño (este proyecto: **Claymorphism**).

---

## 🚀 Producción

| Recurso | URL |
|---|---|
| Producción (Cloudflare Pages) | `https://dito.stevemoya.me` *(cuando conectes el repo)* |
| Preview Pages | `https://landing-dito.pages.dev` |

---

## 🧱 Stack

- **Astro 7** — SSG puro, sin adaptador
- **Tailwind CSS v4** — tokens clay en `src/styles/global.css` (`@theme`)
- **TypeScript 5** estricto
- **@fontsource/fredoka + @fontsource/nunito** auto-hospedadas
- **Vanilla JS** — menú móvil, header scrolled, newsletter — CSP estricta sin `unsafe-eval` ni inline
- **`.node-version` (22.14.0)** + `assetsInlineLimit: 0` + `packageManager` pnpm — fixes CF v3 + CSP de la serie

## 📁 Arquitectura

```
src/
├── components/
│   ├── ui/          → Clay (superficie plastilina), Clay-btn, Badge, Icon, Section, Container
│   ├── layout/      → Header, Navigation, MobileMenu (vanilla JS), Footer
│   ├── sections/    → Hero (mascota clay animada), Steps, Kits, Benefits, Gallery, Testimonials, CTA+Newsletter
│   └── brand/       → Logo (blob de gota)
├── data/            → site, kits, steps, benefits, gallery, testimonials
├── layouts/BaseLayout.astro  → SEO + OG + JSON-LD (Product)
├── pages/           → index.astro, 404.astro
├── scripts/         → header, reveal, newsletter
└── styles/global.css → Design System clay: blobs + gradientes gloss + sombras internas + reduce-motion
public/              → _headers (CSP), favicon.svg, robots.txt, og.png
```

## 🎨 Design System (Claymorphism)

| Token | Valor | Uso |
|---|---|---|
| `cream` / `ink` | `#FFF6E9` / `#4A3728` | fondo cálido / chocolate suave |
| `clay-coral/yellow/blue/mint/pink/lilac` | juguete | superficies de plastilina |
| `--shadow` | internas | `inset` blanco arriba + `inset` oscuro abajo = volumen |
| `.blob` / `.blob-2` | asimétrico | border-radius orgánico de plastilina |

- **Volumen sin aristas:** gradiente radial con highlight gloss + sombras internas (blanco arriba-izquierda, oscuro abajo-derecha)
- **Sombra de suelo** difusa (`blur-md`) bajo la mascota
- **Hero:** mascota blob que **respira** (animation 4.5s, desactivada con reduced-motion) con ojos, mejillas, gorro y extremidades de plastilina
- **Galería:** emojis sobre blobs con radios asimétricos alternados
- Nota: el brief pedía Spline para esta landing; sin acceso a la herramienta se implementó el 3D blando **100 % CSS** (mismo criterio CSS-first de la serie, CSP intacta)

## 🛠️ Scripts

```bash
pnpm install
pnpm dev / build / preview / check
```

## ☁️ Deploy en Cloudflare Pages

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git** → repo `landing-dito`.
2. Build: `pnpm build` · Output: `dist` · Node 22+ (`.node-version` ya lo fija).
3. Custom domain → `dito.stevemoya.me`.

> ⚠️ Crearlo como **Pages**, no Worker. Si el build falla con *"error occurred while installing tools or dependencies"*, añade `NODE_VERSION=22.14.0` en Environment variables.

## 🛡️ Seguridad

- CSP estricta (`default-src 'self'`), HSTS, nosniff, frame DENY
- `vite.build.assetsInlineLimit: 0` → scripts siempre externos
- Sin secretos; `.env`/`.dev.vars` ignorados

## 📝 Decisiones

- **100 % CSS-first** + vanilla JS (CSP sin `unsafe-eval`)
- **Datos mock** — marca ficticia de portafolio
- Precios: Básico 18€ · Volcán 32€ (más vendido) · Explorador 39€ · Escuela 120€

© 2026 Dito — Proyecto de portafolio de Steve Moya.