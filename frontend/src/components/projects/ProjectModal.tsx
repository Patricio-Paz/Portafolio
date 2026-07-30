import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { SmartYardDemo } from './SmartYardDemo';
import { 
  X, 
  Cpu
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090A0F] dark:bg-[#090A0F] light:bg-white rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">ID: {project.id}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 px-6 sm:px-8 py-3 bg-white/5 border-b border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'overview' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Visión General
          </button>
          
          {project.id === 'smartyard-tpa' && (
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === 'demo' ? 'bg-emerald-600 text-white font-bold' : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" /> Live Demo 2D
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono">
                    El Desafío Operacional
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    La Solución de Ingeniería
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Métricas de Impacto Medibles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-xl font-extrabold text-blue-400 font-mono">{m.value}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Live Demo (SmartYard) */}
          {activeTab === 'demo' && (
            <SmartYardDemo />
          )}

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-white/10 bg-white/5 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all"
          >
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
};
