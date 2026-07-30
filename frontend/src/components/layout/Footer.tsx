import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 dark:border-white/10 light:border-black/10 bg-[#06070a] dark:bg-[#06070a] light:bg-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              Desarrollador Full Stack / Backend Developer Junior especializado en Python, Django REST Framework, React, PostgreSQL/SQLite y Soporte Web.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 text-slate-400 hover:text-purple-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre Mí</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Stack Tecnológico</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Experiencia Laboral</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Casos de Estudio</a></li>
              <li><a href="#smartyard" className="hover:text-blue-400 transition-colors">SmartYard TPA Demo</a></li>
            </ul>
          </div>

          {/* Col 3: Tech Stack & Deploy */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
              Arquitectura de Este Sitio
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">React 19</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Vite</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Tailwind v4</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Framer Motion</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Django DRF</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 dark:border-white/5 light:border-black/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Desarrollado con precisión técnica y enfoque premium.</p>
          <div className="flex items-center gap-1 mt-2 sm:mt-0">
            <span>Diseño inspirado en Stripe & Linear</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
