# Site Pessoal — Bruno Dada

Projeto criado com **Vite + React + TypeScript** e **Tailwind CSS**.

## Rodar localmente
```bash
npm i
npm run dev
```
Abra o endereço mostrado no terminal (ex.: `http://localhost:5173`).


> Observação: já configuramos `base: '/brunodada/'` em `vite.config.ts` para GitHub Pages.

## Deploy gratuito

### Opção A — Vercel (recomendada)
1. Crie um repositório no GitHub e envie o código (`git init`, `git remote add origin ...`, `git push -u origin main`).
2. Vá em https://vercel.com → **Add New Project** → importe seu repositório.
3. Aceite as detecções automáticas (Framework: Vite/React).  
4. Ao final você terá um domínio `algo.vercel.app`.

### Opção B — GitHub Pages
1. **Se o repositório NÃO for** `seuusuario.github.io`, edite `vite.config.ts` e **descomente** a linha `base` ajustando para o nome do repositório:
   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/NOME-DO-REPO/' // <= ajuste aqui
   })
   ```
2. Ative o GitHub Pages no repositório (Settings → Pages → “Build and deployment: GitHub Actions”).  
3. Deixe o workflow `pages.yml` (já incluso em `.github/workflows/`) — ele gera e publica automaticamente a pasta `dist/`.

## Personalização rápida
- **Nome, textos e contatos:** edite `src/App.tsx` (busque por “Bruno Dada”).  
- **Cores:** altere classes Tailwind (ex.: `bg-slate-900`, `text-sky-600`).  
- **Ícones:** usamos [`lucide-react`](https://lucide.dev/icons/).  
- **Animações:** [`framer-motion`](https://www.framer.com/motion/).

---
Feito com ♥️
