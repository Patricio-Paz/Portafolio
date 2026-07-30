import React from 'react';
import { TIMELINE_ITEMS } from '../../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Code, 
  BookOpen, 
  Award, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'internship': case 'work': return Briefcase;
      case 'project': return Code;
      case 'course': return BookOpen;
      case 'certification': return Award;
      default: return Briefcase;
    }
  };

  return (
    <section className="py-24 relative bg-[#090A0F] dark:bg-[#090A0F] light:bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Línea del Tiempo: Estudios, Práctica & Certificaciones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Evolución continua desde la formación en ingeniería de software hasta proyectos de alta complejidad técnica.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-white/10 dark:border-white/10 light:border-black/10 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => {
            const Icon = getItemIcon(item.type);
            return (
              <div key={item.id} className="relative pl-8 group">
                
                {/* Timeline Node Point */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#090a0f] border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md shadow-blue-500/20">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Left Date label for Desktop */}
                <div className="hidden sm:block absolute -left-36 top-2 text-xs font-mono font-semibold text-slate-400 text-right w-24">
                  {item.period}
                </div>

                {/* Timeline Card */}
                <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 transition-all">
                  
                  {/* Mobile Period */}
                  <span className="sm:hidden inline-block text-[11px] font-mono text-blue-400 font-semibold mb-2">
                    {item.period}
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {item.badgeText}
                    </span>
                  </div>

                  <h4 className="text-xs font-semibold text-blue-400 mb-3 font-mono">
                    {item.organization}
                  </h4>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Technologies if available */}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.technologies.map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Achievements if available */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-1">
                      {item.achievements.map(ach => (
                        <div key={ach} className="flex items-center gap-1.5 text-xs text-emerald-400 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
