import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Terminal, 
  Award
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#090A0F] dark:bg-[#090A0F] light:bg-slate-50">
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
            <Terminal className="w-3.5 h-3.5" />
            <span>Perfil & Formación Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Sobre Mí: Formación Académica, Experiencia y Solidez Técnica
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Apasionado por la tecnología, el desarrollo backend con Python/Django y la construcción de APIs REST eficientes consumidas desde frontend React.
          </p>
        </motion.div>

        {/* Story Grid Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          
          {/* Card 1: Formación Académica */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mb-4 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                1. Formación Académica
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase">Titulado</span>
                  <strong className="text-slate-100 block text-sm">INACAP</strong>
                  <span>Técnico Superior Analista Programador</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-blue-400 font-bold block uppercase">En Curso</span>
                  <strong className="text-slate-100 block text-sm">INACAP</strong>
                  <span>Ingeniería en Informática</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-blue-400">
              // Formación técnica y profesional sólida en INACAP
            </div>
          </div>

          {/* Card 2: Experiencia Práctica & Mantenimiento Web */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                2. Experiencia en Sistemas Reales
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Experiencia práctica como <strong className="text-slate-200">Apoyo en soporte web y sistemas en FAMCHI (2026)</strong>. Gestión de sitios WordPress en cPanel, optimización de plugins, autenticación de correo institucional (SPF, DKIM, DMARC), respaldos y despliegue de landing page automatizada.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-purple-400">
              // Soporte a sitios con 630+ visitantes en 28 días
            </div>
          </div>

          {/* Card 3: Orientación Backend & Full Stack */}
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-2">
                3. Stack de Desarrollo
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Especializado en <strong className="text-slate-200">Python 3 y Django REST Framework</strong> para la construcción de servicios backend limpios, estructuración de serializers, vistas y modelos ORM en PostgreSQL/SQLite, integrados con frontend interactivo en <strong className="text-slate-200">React y Axios</strong>.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-indigo-400">
              // Python + DRF + React + Postgres + SQL
            </div>
          </div>

        </motion.div>

        {/* Value Proposition Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 relative overflow-hidden shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                <Award className="w-3.5 h-3.5" /> Propuesta de Valor para Empresas TI
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Disponibilidad Inmediata para Equipos Backend, Full Stack & Soporte Web
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Perfil junior con base técnica sólida en backend, experiencia práctica demostrable en plataformas web reales y portafolio enfocado en APIs REST, integración de servicios y mejora continua. Preparado para aportar desde el primer día.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono transition-all shadow-lg shadow-blue-600/30"
            >
              Contactar para Entrevista
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
