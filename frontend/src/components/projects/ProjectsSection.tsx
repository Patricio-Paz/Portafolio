import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_LIST } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { SmartYardDemo } from './SmartYardDemo';
import { 
  FolderGit2, 
  ArrowRight, 
  Maximize2,
  Cpu
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
            Plataformas Full Stack, APIs RESTful en Django y optimización industrial construidas con estándares modernos.
          </p>
        </motion.div>

        {/* Highlighted Project #1: SmartYard TPA Embedded Interactive Visualizer */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          id="smartyard" 
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" /> Proyecto 1: SmartYard TPA
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Plataforma inteligente para optimización de patios portuarios, dashboard operacional, gestión de contenedores, alertas predictivas e IA conversacional.
              </p>
            </div>
            <button
              onClick={() => setSelectedProject(PROJECTS_LIST[0])}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold hover:bg-blue-600/30 transition-all shrink-0"
            >
              <span>Ver Detalles del Proyecto</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <SmartYardDemo />
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {PROJECTS_LIST.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 dark:border-white/10 light:border-black/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
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

              {/* Card Footer Action: Ver Proyecto Only */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 transition-all"
                >
                  <span>Ver Caso de Estudio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
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
