import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_LIST } from '../../data/portfolioData';
import { 
  Code2, 
  Search, 
  Terminal, 
  Database, 
  Box, 
  Wrench, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todas las Skills', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Terminal },
    { id: 'database', label: 'Bases de Datos', icon: Database },
    { id: 'devops', label: 'Cloud e Infraestructura', icon: Box },
    { id: 'tools', label: 'Herramientas', icon: Wrench },
  ];

  const filteredSkills = SKILLS_LIST.filter(skill => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#0B0D14] dark:bg-[#0B0D14] light:bg-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Matriz Técnica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 mb-4">
            Skills & Tecnologías
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Conocimientos organizados por categorías según formación y desarrollo práctico.
          </p>
        </motion.div>

        {/* Filter Bar & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white/5 dark:bg-white/5 light:bg-slate-100 p-1.5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold' 
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl text-xs text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
            />
          </div>

        </motion.div>

        {/* Skills Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header: Icon & Skill Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-mono text-blue-400 capitalize">
                    {skill.category === 'devops' ? 'Cloud & Infra' : skill.category}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Skill Activa
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No se encontraron tecnologías que coincidan con la búsqueda.
          </div>
        )}

      </div>
    </section>
  );
};
