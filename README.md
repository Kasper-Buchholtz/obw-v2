# Superego

**Kunde:** - Superego

**Release:** 2024

**Beskrivelse:** Superego's nye starter til sanity baseret hjemmesider.

**Website:** Superego.nu

## Tech Stack

**Client:** React, Next.js, TailwindCSS, TypeScript, Gsap, Framer motion, Lenis, Lottie.js, ukiyo.js, icons.mynaui.com

**Server:** Node, Vercel, Sanity, GROQ

## Installation

Hent projektet ned fra Github

```bash
npm install
npm run dev
```

For at teste om der ville kommer server errors kan du kører

```bash
npm run build
npm run start
```

Test din code for fejl med EsLint

```bash
npm run lint
npm run lint:fix
```

Formater projektet så koden ser ordenlig ud på alle dokumenter

```bash
npm run format
```

## Sanity CLI

For at bruge Sanity CLI skal du installere det globalt

```bash
npm install -g @sanity/cli
```

For at logge ind i Sanity CLI

```bash
sanity login
```

for at lave en manuel backup af sanity content lake

```bash
sanity dataset export <dataset-name> <file-name>
```

## Fil Struktur

| Filer          | beskrivelse                                                                           | Eksempler                                                                        |
| -------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| src/app        | Selve appen bliver sat op her. (Sider, layout & api routes )                          | layout.tsx, page.tsx, route.tsx                                                  |
| src/components | Det sted vores components bliver placeret. Vi bruger atomic design som mappestruktur  | Header.tsx, Footer.tsx, Section.tsx                                              |
| src/sanity     | Sanity backend opsætning. Her bliver vores schemas og quries sat op.                  | queries/section/Hero.query.ts, lib/sanity.client.ts, schemas/section/HeroType.ts |
| src/styles     | Her bliver vores global styles sat op. Vi bruger tailwindcss som vores css framework. | globals.css, lenis.css, studio.css                                               |
| src/styles     | Her bliver vores global styles sat op. Vi bruger tailwindcss som vores css framework. | globals.css, lenis.css, studio.css                                               |
| src/types      | Her bliver vores global types sat op.                                                 | Button.types.ts, Heading.types.ts, Seo.types.ts                                  |
| src/utils      | Utility funktioner og hooks.                                                          | lenis.js, sanitize.ts, utils.js, date.ts                                         |

## Support

Spørgsmål? Hiv fat i Kasper Buchholtz kb@superego.nu // +4561302618
