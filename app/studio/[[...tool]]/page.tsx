/**
 * Página principal de Sanity Studio embebido en /studio
 *
 * Este archivo maneja todas las rutas bajo /studio mediante
 * catch-all routes de Next.js.
 *
 * El layout de esta ruta está definido en app/studio/layout.tsx,
 * que aísla completamente el Studio del sitio público.
 * El metadata y viewport se exportan desde layout.tsx para evitar conflictos.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
