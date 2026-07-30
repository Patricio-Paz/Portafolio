import React from 'react';
import { WORK_EXPERIENCE } from '../../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  TrendingUp, 
  Code2, 
  Award,
  Layers
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0B0D14] dark:bg-[#0B0D14] light:bg-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Experiencia Profesional & Práctica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Experiencia Laboral Relevante
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mantenimiento web, administración de servidores cPanel, automatización de procesos y configuración de correo institucional.
          </p>
        </div>

        {/* Experience List */}
        {WORK_EXPERIENCE.map((exp) => (
          <div key={exp.id} className="glass-panel p-8 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 shadow-xl space-y-8">
            
            {/* Header: Role, Company & Tag */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {exp.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" /> {exp.period}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-blue-400 flex items-center gap-2 mt-1">
                  <Layers className="w-4 h-4" /> {exp.company}
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 text-xs font-normal flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </h4>
              </div>
            </div>

            {/* Content Breakdown: Responsabilidades, Tecnologías, Logros */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Col 1 & 2: Responsabilidades */}
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider flex items-center gap-2 font-mono">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> Responsabilidades e Hitos Principales
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Logros Clave */}
                <div className="pt-4 space-y-3">
                  <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider flex items-center gap-2 font-mono">
                    <Award className="w-4 h-4 text-amber-400" /> Logros en la Práctica
                  </h4>
                  <div className="space-y-2">
                    {exp.achievements.map((ach, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200 font-medium">
                        🏆 {ach}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3: Tecnologías & Resultados (Métricas) */}
              <div className="space-y-6">
                
                {/* Tecnologías Usadas */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider flex items-center gap-2 font-mono">
                    <Code2 className="w-4 h-4 text-purple-400" /> Tecnologías Aplicadas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impacto / Resultados Medibles */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 uppercase tracking-wider flex items-center gap-2 font-mono">
                    <TrendingUp className="w-4 h-4 text-emerald-400" /> Resultados del CV
                  </h4>
                  <div className="space-y-2.5">
                    {exp.results.map((res, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="text-lg font-extrabold text-emerald-400 font-mono">
                          {res.metric}
                        </div>
                        <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                          {res.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
