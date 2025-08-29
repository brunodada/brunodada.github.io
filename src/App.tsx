import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, Github, Linkedin, MapPin, ArrowRight, Download,
  Briefcase, Code2, Sparkles, ExternalLink
} from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

function Section({ id, title, subtitle, children }:{ id:string; title:string; subtitle?:string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
          <motion.h2 variants={item} className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</motion.h2>
          {subtitle && <motion.p variants={item} className="mt-2 text-slate-600 max-w-2xl">{subtitle}</motion.p>}
          <motion.div variants={item} className="mt-10">{children}</motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  const year = new Date().getFullYear()
  const categories = ['Todos','Web','Mobile','Data','Design'] as const
  type Category = typeof categories[number]

  const projects = useMemo(() => [
    { title: 'Painel Financeiro Pessoal', desc: 'Dashboard interativo para controle de gastos e metas mensais.', tags: ['React','Tailwind','Charts'], category: 'Web' as Category, href: '#' },
    { title: 'Checklist de Viagem', desc: 'Aplicativo mobile para organizar bagagens e documentos.', tags: ['React Native','Expo'], category: 'Mobile' as Category, href: '#' },
    { title: 'Scraper de Oportunidades', desc: 'Coleta e consolidação de vagas/boletins usando Python.', tags: ['Python','ETL'], category: 'Data' as Category, href: '#' },
    { title: 'Landing Page Minimalista', desc: 'Site de apresentação com foco em conversão.', tags: ['Next.js','SEO'], category: 'Web' as Category, href: '#' },
    { title: 'Identidade Visual Pessoal', desc: 'Guia de marcas com paleta, tipografia e componentes.', tags: ['Figma','Design System'], category: 'Design' as Category, href: '#' },
  ], [])

  const [active, setActive] = useState<Category>('Todos')
  const filtered = useMemo(() => active === 'Todos' ? projects : projects.filter(p => p.category === active), [active, projects])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())
    console.log('Mensagem enviada:', payload)
    alert('Obrigado! Sua mensagem foi registrada.')
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white shadow px-3 py-2 rounded-md">Ir para o conteúdo</a>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Bruno Dada</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:opacity-70" href="#sobre">Sobre</a>
            <a className="hover:opacity-70" href="#servicos">Serviços</a>
            <a className="hover:opacity-70" href="#projetos">Projetos</a>
            <a className="hover:opacity-70" href="#contato">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#cv" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-slate-900 text-white text-sm shadow hover:shadow-md transition">
              <Download size={16} /> Baixar CV
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section id="home" className="pt-16 sm:pt-24">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-slate-100 rounded-full px-3 py-1">
                <Sparkles size={14} /> Portfólio Pessoal
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                Olá, eu sou <span className="underline decoration-4 decoration-sky-300">Bruno Dada</span>
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                Desenvolvedor focado em experiências digitais simples, rápidas e elegantes. Aqui você encontra meus projetos, serviços e formas de contato.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contato" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-sky-600 text-white shadow hover:shadow-md">
                  Fale comigo <ArrowRight size={16} />
                </a>
                <a href="#projetos" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-white border hover:bg-slate-50">
                  Ver projetos
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <div className="rounded-2xl bg-white border p-4 shadow-sm">
                  <p className="text-2xl font-semibold">5+ anos</p>
                  <p className="text-sm text-slate-500">de experiência</p>
                </div>
                <div className="rounded-2xl bg-white border p-4 shadow-sm">
                  <p className="text-2xl font-semibold">20+</p>
                  <p className="text-sm text-slate-500">projetos</p>
                </div>
                <div className="rounded-2xl bg-white border p-4 shadow-sm">
                  <p className="text-2xl font-semibold">São Paulo</p>
                  <p className="text-sm text-slate-500 inline-flex items-center gap-1"><MapPin size={14}/> Brasil</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
              <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-gradient-to-br from-sky-100 via-white to-sky-200 p-1 shadow-lg">
                <div className="h-full w-full rounded-full bg-white grid place-items-center border">
                  <div className="h-60 w-60 sm:h-64 sm:w-64 rounded-full bg-slate-100 grid place-items-center text-5xl font-bold text-slate-500">
                    BD
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-2xl bg-white/90 backdrop-blur border shadow p-3 text-sm">
                <p className="font-medium">Disponível para projetos</p>
                <p className="text-slate-600">Freelance / Part-time</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="sobre" title="Sobre mim" subtitle="Um resumo rápido de quem eu sou e como posso ajudar.">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border p-6 shadow-sm leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por transformar ideias em produtos reais. Gosto de trabalhar
                do conceito à entrega: pesquisa, prototipação, desenvolvimento e iteração guiada por dados.
              </p>
              <p className="mt-3">
                Tecnologias com as quais me sinto em casa: React/Next.js, TypeScript, Node, Tailwind, e integrações
                com APIs. Também tenho experiência com automações e ETL em Python.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                { k: 'Stack', v: 'React, Next.js, TypeScript, Node' },
                { k: 'Ferramentas', v: 'Git, Vite, Prisma, Supabase' },
                { k: 'Idiomas', v: 'Português, Inglês' },
                { k: 'Interesses', v: 'UX, automações, dados' },
              ].map((it) => (
                <li key={it.k} className="rounded-2xl bg-white border p-4 shadow-sm">
                  <p className="text-sm text-slate-500">{it.k}</p>
                  <p className="font-medium">{it.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="servicos" title="Serviços" subtitle="Como posso gerar valor para você ou sua empresa.">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code2 className="h-5 w-5" />, title: 'Desenvolvimento Web', desc: 'Sites e apps responsivos com foco em performance e SEO.' },
              { icon: <Briefcase className="h-5 w-5" />, title: 'Produtos Digitais', desc: 'Do zero ao lançamento: discovery, UX, MVP e iteração.' },
              { icon: <Sparkles className="h-5 w-5" />, title: 'Automação & Dados', desc: 'Integrações, ETL e dashboards para decisões mais rápidas.' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-md transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projetos" title="Projetos" subtitle="Alguns trabalhos e protótipos recentes.">
          <div className="flex flex-wrap gap-2">
            {(['Todos','Web','Mobile','Data','Design'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm transition ${active === cat ? 'bg-slate-900 text-white' : 'bg-white hover:bg-slate-50'}`}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.title} className="group rounded-2xl bg-white border shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 grid place-items-center">
                  <span className="text-sm text-slate-500">Prévia do projeto</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold group-hover:underline inline-flex items-center gap-1">
                    {p.title}
                    <ExternalLink className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs rounded-full bg-slate-100 px-2 py-0.5 border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contato" title="Vamos conversar" subtitle="Me conte sobre sua ideia ou necessidade e eu retorno em breve.">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 rounded-2xl bg-white border p-6 shadow-sm">
              <form onSubmit={onSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="nome" className="text-sm">Nome</label>
                  <input id="nome" name="nome" required className="mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm">E-mail</label>
                    <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="text-sm">Telefone (opcional)</label>
                    <input id="telefone" name="telefone" className="mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-sm">Mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={4} required className="mt-1 w-full rounded-xl border bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-slate-900 text-white shadow hover:shadow-md">
                  Enviar mensagem <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className="md:col-span-2 grid gap-4">
              <div className="rounded-2xl bg-white border p-6 shadow-sm">
                <h4 className="font-semibold">Contato direto</h4>
                <ul className="mt-3 grid gap-2 text-sm">
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> bruno.dada@email.com</li>
                  <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +55 (51) 999756-5042</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Osório/RS, Brasil</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white border p-6 shadow-sm">
                <h4 className="font-semibold">Redes</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a aria-label="GitHub" className="rounded-full border p-2 hover:bg-slate-50" href="#"><Github className="h-5 w-5"/></a>
                  <a aria-label="LinkedIn" className="rounded-full border p-2 hover:bg-slate-50" href="#"><Linkedin className="h-5 w-5"/></a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between text-sm text-slate-600">
          <p>© {year} Bruno Dada. Todos os direitos reservados.</p>
          <p>Construído com <span className="font-medium">React + Tailwind</span></p>
        </div>
      </footer>
    </div>
  )
}
