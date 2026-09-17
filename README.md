# Portfolio — Luciano Santa Cruz

Portfolio personal de una sola página, construido con Next.js y exportado como
sitio estático. Presenta quién soy, mis habilidades, mis proyectos y mi
formación, y se publica automáticamente en **https://lucho-39.github.io/** con
cada push a `main`.

---

## Camino rápido

```bash
pnpm install     # instala dependencias
pnpm dev         # levanta el sitio en http://localhost:3000
```

Para ver el build de producción tal como se publica:

```bash
pnpm build       # genera el sitio estático en out/
npx serve out    # lo sirve localmente para revisarlo
```

> **Requiere pnpm.** El proyecto usa un solo gestor de paquetes (`pnpm-lock.yaml`).
> La versión está fijada en el campo `packageManager` de `package.json`.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 14 (App Router) con `output: 'export'` |
| UI | React 18 + TypeScript |
| Estilos | Tailwind CSS v4 + `tw-animate-css` |
| Componentes | shadcn/ui (estilo new-york) sobre Radix UI |
| Iconos | lucide-react |
| Tipografías | Geist Sans / Geist Mono |
| Tema claro-oscuro | next-themes (`attribute="class"`) |
| Deploy | GitHub Pages vía GitHub Actions |

---

## Estructura

```
app/
  layout.tsx        Layout raíz: metadata y SEO, fuentes, ThemeProvider, Analytics
  page.tsx          Compone las secciones en orden
  globals.css       Tokens de diseño (colores, radios) y variantes de Tailwind
  sitemap.ts        Genera /sitemap.xml
  robots.ts         Genera /robots.txt
  opengraph-image.png  Tarjeta 1200x630 para redes sociales
  icon.png          Favicon 512x512
  apple-icon.png    Icono para iOS 180x180
components/
  navigation.tsx    Barra fija + toggle de tema + menú mobile
  hero.tsx          Portada con la foto de perfil
  about.tsx         Sobre mí + diploma
  skills.tsx        Habilidades por categoría
  projects.tsx      Tarjetas de proyectos
  contact.tsx       Datos de contacto
  footer.tsx        Pie de página
  theme-provider.tsx
  ui/               Componentes de shadcn/ui
hooks/              Hooks reutilizables
lib/utils.ts        Helper `cn()` para combinar clases de Tailwind
lib/site.ts         URL, nombre y descripción del sitio (fuente única para SEO)
public/             Imágenes: foto de perfil, fondos de sección, capturas, diploma
```

---

## Decisiones que conviene conocer

Estas son las cosas que no se ven leyendo el código y que cuestan tiempo si se
descubren a golpes.

### `next.config.js` debe seguir siendo un objeto literal

El workflow de GitHub Pages usa `actions/configure-pages` con
`static_site_generator: next`. Esa acción **lee y modifica** `next.config.js`:
busca una declaración de nivel superior (`const nextConfig = { ... }`) e inyecta
`output`, `basePath` e `images.unoptimized` ahí dentro.

Si se cambia la forma del export — por ejemplo a una función de `phase` — el paso
falla con un error engañoso (`TypeError: error must be an instance of Error`) y
**el deploy no se completa**.

### No hay `next/image` a propósito

Con `output: 'export'` activo y `images.unoptimized` sin aplicar de forma
explícita, usar `next/image` rompe el build. Todas las imágenes se renderizan con
`<img>` y dimensiones explícitas.

### `next build` y `next dev` comparten `.next`

Si se ejecuta `pnpm build` mientras hay un `pnpm dev` corriendo, la caché se
corrompe y el dev empieza a fallar con `Cannot find module './NNN.js'`.
La recuperación es simple:

```bash
rm -rf .next && pnpm dev
```

Si el navegador queda con la página rota después de esto, hay que recargar con
**Ctrl+Shift+R**: los chunks viejos siguen cacheados.

### Los fondos de sección dependen del tema

Las secciones usan imágenes de fondo con una capa `bg-background/85` en claro y
`dark:bg-background/90` en oscuro. Esas opacidades están calculadas para cumplir
contraste WCAG AA (7.30:1 y 5.29:1 en el peor caso). **No conviene bajarlas** para
"ver más la foto": los párrafos en modo oscuro caen por debajo del mínimo.

---

### Las imágenes de SEO son PNG estáticos, no rutas de Next

`app/opengraph-image.png`, `app/icon.png` y `app/apple-icon.png` son archivos,
no `opengraph-image.tsx` ni `icon.tsx`. La razón es concreta.

Cuando Next genera esas imágenes desde código, en un `output: 'export'` las
escribe **sin extensión** (la ruta queda en `/opengraph-image`). GitHub Pages
decide el `Content-Type` según la extensión del archivo, así que un archivo sin
extensión se sirve como `application/octet-stream` — y los crawlers de LinkedIn,
WhatsApp o Slack descartan la imagen sin avisar. Un PNG con extensión siempre se
sirve como `image/png`.

Un archivo estático además evita depender de Satori y de binarios WASM en cada
build.

Se generaron una sola vez con `ImageResponse` de `next/og`, usando la tipografía
Geist real del sitio, y después se congelaron como archivos. Para regenerarlas
hay que descargar `Geist-Regular.ttf`, `Geist-Medium.ttf` y `Geist-Bold.ttf`
(están en `vercel/geist-font`, carpeta `fonts/Geist/ttf`) — Satori no soporta el
woff2 que trae el paquete `geist` — recrear la ruta temporal con el diseño,
correr `pnpm build` y copiar el resultado de `out/` a `app/`.

### El SEO vive en tres lugares

| Qué | Dónde |
|---|---|
| Título, descripción, OpenGraph, Twitter, canonical, robots | `app/layout.tsx` |
| URL, nombre y descripción del sitio | `lib/site.ts` (fuente única) |
| `sitemap.xml` y `robots.txt` | `app/sitemap.ts` y `app/robots.ts` |

`sitemap.ts` no setea `lastModified` a propósito: cambiaría en cada build sin
decir nada útil.

---

## Deploy

Automático. Cada push a `main` dispara `.github/workflows/nextjs.yml`, que:

1. Instala pnpm y Node 22.
2. Ejecuta `pnpm install --frozen-lockfile`.
3. Ejecuta `pnpm build` y genera `out/`.
4. Publica `out/` en GitHub Pages.

Un detalle: lo que se publica es **todo `public/`**, esté referenciado o no. Un
asset que no se usa igual se descarga, así que conviene no dejar archivos
grandes ahí sin motivo.

---

## Scripts

| Script | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo en el puerto 3000 |
| `pnpm build` | Build de producción y export estático a `out/`. Corre ESLint y el type-check |
| `pnpm start` | Sirve `out/` para revisar el build de producción tal como se publica |
| `pnpm lint` | ESLint con el preset `next/core-web-vitals` |

`pnpm start` usa `serve`, que si encuentra el puerto 3000 ocupado —por ejemplo
porque tenés `pnpm dev` corriendo— elige otro y lo imprime en la terminal. Hay
que mirar la URL que muestra.

### ESLint está fijado en la versión 8

`eslint-config-next` 14.x declara `eslint: ^7.23.0 || ^8.0.0`, así que ESLint 8
es la versión correcta para este proyecto aunque ya existan la 9 y la 10. **No
conviene saltar a ESLint 9+ sin mover antes Next a una versión que lo soporte**:
`next lint` dejaría de funcionar.

La regla `@next/next/no-img-element` está desactivada a propósito, y
`.eslintrc.js` explica por qué.

---

## Sobre este repositorio

| Área | Autoría |
|---|---|
| Diseño, contenido y decisiones de producto | Luciano Santa Cruz |
| Implementación | Luciano Santa Cruz |
| Revisión de código, corrección de errores y puesta en marcha del deploy | Pair programming con asistencia de IA (OpenCode) |

La revisión de código, la detección y corrección de errores y la puesta en marcha
del pipeline de despliegue se hicieron en sesiones de pair programming junto a un
asistente de IA, usado como herramienta de análisis, verificación y edición.

Las decisiones de producto — qué muestra el portfolio, cómo se ve y qué se cuenta
de cada proyecto — fueron siempre humanas. La IA no tomó decisiones de diseño ni
de contenido por su cuenta: propuso, verificó y ejecutó lo que se le pidió.
