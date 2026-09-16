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
  layout.tsx        Layout raíz: metadata, fuentes, ThemeProvider, Analytics
  page.tsx          Compone las secciones en orden
  globals.css       Tokens de diseño (colores, radios) y variantes de Tailwind
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

| Script | Estado | Qué hace |
|---|---|---|
| `pnpm dev` | ✅ | Servidor de desarrollo en el puerto 3000 |
| `pnpm build` | ✅ | Build de producción + export estático a `out/` |
| `pnpm start` | ⚠️ | **No funciona**: `next start` no es compatible con `output: 'export'`. Usar `npx serve out` |
| `pnpm lint` | ⚠️ | **No funciona**: no hay configuración de ESLint en el proyecto |

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
