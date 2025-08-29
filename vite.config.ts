import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se for publicar no GitHub Pages em um repositório NÃO do tipo <usuario>.github.io,
// ajuste a linha base abaixo para '/NOME-DO-REPO/' (incluindo as barras).
// Ex.: base: '/bruno-dada-site/'
export default defineConfig({
  plugins: [react()],
  // base: '/NOME-DO-REPO/'
})
