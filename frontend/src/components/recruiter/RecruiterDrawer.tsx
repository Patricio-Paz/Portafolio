import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  X, 
  Sparkles, 
  Download, 
  CheckCircle2, 
  Building2, 
  ExternalLink
} from 'lucide-react';

interface RecruiterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterDrawer: React.FC<RecruiterDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const highlightedRoles = [
    { title: 'Desarrollador Backend Junior (Python / Django)', fit: 'Creación de APIs RESTful, serializers, vistas y ORM en PostgreSQL/SQLite.' },
    { title: 'Desarrollador Full Stack Junior (React + DRF)', fit: 'Arquitectura desacoplada en 2 capas con consumo mediante Axios.' },
    { title: 'Soporte Web & Mantenimiento de Plataformas', fit: 'Experiencia real en cPanel, WordPress, autenticación DNS (SPF, DKIM, DMARC) y respaldos.' },
    { title: 'Analista Programador / TI', fit: 'Título de Técnico Superior Analista Programador e Ingeniería en Informática en curso en INACAP.' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl h-full bg-[#090A0F] dark:bg-[#090A0F] light:bg-white border-l border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
        
        {/* Drawer Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-mono font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Modo Reclutador & Tech Leads (Fast-Track)</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Ficha Técnica — Patricio Paz
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Evaluación rápida para procesos de selección TI en Chile (Remoto / Presencial / Híbrido).
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Highlights Summary Table */}
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-blue-400">
            Resumen del Perfil
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#06070a] border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Cargos Objetivos</span>
              <span className="font-bold text-slate-200">Backend Junior / Full Stack Junior</span>
            </div>

            <div className="p-3 rounded-xl bg-[#06070a] border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Ubicación & Modalidad</span>
              <span className="font-bold text-emerald-400">Arica, Chile (Remoto / Presencial)</span>
            </div>

            <div className="p-3 rounded-xl bg-[#06070a] border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Formación Académica</span>
              <span className="font-bold text-slate-200">INACAP (Titulado & En Curso)</span>
            </div>

            <div className="p-3 rounded-xl bg-[#06070a] border border-white/5 space-y-1">
              <span className="text-slate-500 text-[10px] uppercase font-mono block">Stack Principal</span>
              <span className="font-bold text-slate-200">Python, Django, React, Postgres</span>
            </div>
          </div>
        </div>

        {/* Target Roles & Value */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-purple-400" /> Compatibilidad de Perfil por Oportunidad
          </h3>

          <div className="space-y-2.5">
            {highlightedRoles.map((role, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#06070a] border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-bold text-blue-400 font-mono">
                  <span>{role.title}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {role.fit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Direct CV Download & Contact Action Buttons */}
        <div className="space-y-3 pt-4 border-t border-white/10">
          <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-300">
            Descargas & Enlaces
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV de Patricio Paz (PDF)</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-slate-100 hover:bg-white/15 text-xs font-semibold border border-white/10"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-500 hover:text-slate-300 underline"
          >
            Cerrar Ficha de Reclutador
          </button>
        </div>

      </div>
    </div>
  );
};
