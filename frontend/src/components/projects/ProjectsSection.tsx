import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_LIST } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ArrowRight, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#090A0F] dark:bg-[#090A0F] light:bg-slate-50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Casos de Estudio & Proyectos Destacados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aplicaciones web modernas, clientes SPA en React/TypeScript y plataformas orientadas a alta experiencia de usuario.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {PROJECTS_LIST.map((proj, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={proj.id}
                className={`glass-panel glass-panel-hover p-6 rounded-3xl border flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                  isFeatured 
                    ? 'border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-slate-900/50 to-[#090A0F] shadow-xl shadow-yellow-500/5' 
                    : 'border-white/10 dark:border-white/10 light:border-black/10'
                }`}
              >
                <div>
                  {/* Featured Badge Header for top project (Pokédex) */}
                  {isFeatured && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[10px] font-mono font-bold w-fit mb-4">
                      <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                      <span>PROYECTO DESTACADO</span>
                    </div>
                  )}

                  {/* Image / Mockup thumbnail */}
                  {proj.images && proj.images.length > 0 && (
                    <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 group-hover:border-blue-500/40 transition-colors">
                      <img
                        src={proj.images[0].url}
                        alt={proj.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/70 text-blue-300 backdrop-blur-md border border-white/10">
                        {proj.category}
                      </div>
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-400 mb-3 font-mono">
                    {proj.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Action: Ver Proyecto & Demo */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 transition-all"
                  >
                    <span>Ver Caso de Estudio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold hover:bg-emerald-600/30 transition-all"
                    >
                      <span>Ver Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Case Study Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
