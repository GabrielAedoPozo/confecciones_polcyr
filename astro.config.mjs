// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://GabrielAedoPozo.github.io', // tu perfil de GitHub Pages
  base: '/confecciones_polcyr/',             // el nombre del repositorio con / al inicio y final
  outDir: 'dist',                            // carpeta donde se generará el sitio
  build: {
    format: 'directory',
  },
});
