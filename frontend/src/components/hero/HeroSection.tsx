import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { 
  Download, 
  Send, 
  Sparkles, 
  Code2, 
  Database, 
  Terminal, 
  FolderGit2,
  Cpu,
  Globe,
  Layers,
  Zap
} from 'lucide-react';

interface HeroSectionProps {
  onOpenRecruiterDrawer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRecruiterDrawer }) => {
  const { scrollY } = useScroll();

  // Mouse Parallax Motion Springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const cardRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const cardRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);
  const avatarTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);
  const avatarTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXPos = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  // Scroll Parallax Transformations
  const yDeepGlow = useTransform(scrollY, [0, 800], [0, 260]);
  const yCascadeGrid = useTransform(scrollY, [0, 800], [0, 160]);
  const yRingsParallax = useTransform(scrollY, [0, 800], [0, -100]);
  const yFloatingLeft = useTransform(scrollY, [0, 800], [0, -220]);
  const yFloatingRight = useTransform(scrollY, [0, 800], [0, -280]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0.1]);
  const scaleGlow = useTransform(scrollY, [0, 600], [1, 1.35]);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090A0F]"
    >
      
      {/* ========================================================================= */}
      {/* 🌊 HIGH-DYNAMICS MULTI-LAYER PARALLAX BACKGROUND CASCADE                  */}
      {/* ========================================================================= */}
      
      {/* LAYER 1: Pulsing Deep Ambient Neon Orbs */}
      <motion.div 
        style={{ y: yDeepGlow, scale: scaleGlow, opacity: opacityParallax }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-tr from-blue-600/35 via-indigo-600/30 to-purple-600/40 blur-[150px] rounded-full pointer-events-none z-0" 
      />

      <motion.div 
        style={{ y: yDeepGlow, opacity: opacityParallax }}
        className="absolute top-1/3 left-1/5 w-[450px] h-[450px] bg-cyan-500/25 blur-[120px] rounded-full pointer-events-none z-0" 
      />

      {/* LAYER 2: Rotating Orbital Parallax Rings */}
      <motion.div 
        style={{ y: yRingsParallax, opacity: opacityParallax }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/20 pointer-events-none z-0 flex items-center justify-center"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-[520px] h-[520px] rounded-full border border-dashed border-indigo-500/25 flex items-center justify-center"
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="w-[360px] h-[360px] rounded-full border border-purple-500/30"
          />
        </motion.div>
      </motion.div>

      {/* LAYER 3: Grid Pattern & Vertical Digital Waterfall Streams */}
      <motion.div 
        style={{ y: yCascadeGrid, opacity: opacityParallax }}
        className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" 
      />

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-1/6 w-[2px] h-[380px] bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-lg shadow-blue-500/50"
        />
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'linear', delay: 1.2 }}
          className="absolute top-0 left-2/6 w-[2px] h-[480px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-500/50"
        />
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'linear', delay: 2.8 }}
          className="absolute top-0 left-4/6 w-[2px] h-[420px] bg-gradient-to-b from-transparent via-indigo-400 to-transparent shadow-lg shadow-indigo-500/50"
        />
        <motion.div 
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear', delay: 4.5 }}
          className="absolute top-0 left-5/6 w-[2px] h-[320px] bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-lg shadow-purple-500/50"
        />
      </div>

      {/* LAYER 4: Floating Tech Nodes (Left Side Parallax) */}
      <motion.div 
        style={{ y: yFloatingLeft, opacity: opacityParallax }}
        className="absolute top-24 left-4 lg:left-12 hidden md:flex flex-col gap-10 pointer-events-none z-0"
      >
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 backdrop-blur-xl shadow-xl shadow-blue-500/20 flex items-center gap-2 text-xs font-mono"
        >
          <Terminal className="w-4 h-4 text-blue-400" />
          <span>Django REST</span>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 backdrop-blur-xl shadow-xl shadow-indigo-500/20 flex items-center gap-2 text-xs font-mono"
        >
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>React SPA</span>
        </motion.div>
      </motion.div>

      {/* LAYER 4: Floating Tech Nodes (Right Side Parallax) */}
      <motion.div 
        style={{ y: yFloatingRight, opacity: opacityParallax }}
        className="absolute top-32 right-4 lg:right-12 hidden md:flex flex-col gap-10 pointer-events-none z-0"
      >
        <motion.div 
          animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 backdrop-blur-xl shadow-xl shadow-purple-500/20 flex items-center gap-2 text-xs font-mono"
        >
          <Database className="w-4 h-4 text-purple-400" />
          <span>PostgreSQL</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-xl shadow-xl shadow-emerald-500/20 flex items-center gap-2 text-xs font-mono"
        >
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span>Python 3</span>
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 🚀 MAIN PRESENTATION CONTENT (SIDE-ALIGNED 2-COLUMN LAYOUT)                */}
      {/* ========================================================================= */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Avatar, Title & Action Buttons */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Profile Avatar + Name */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center md:items-start gap-5"
            >
              {/* Circular Avatar with Interactive Mouse Shift */}
              <motion.div 
                style={{ x: avatarTranslateX, y: avatarTranslateY }}
                className="relative group shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-blue-500/40 p-1 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-2xl shadow-blue-500/40 overflow-hidden">
                  <img 
                    src="/patricio_paz.jpg" 
                    alt="Patricio Paz" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#090A0F]" title="Disponible para contratar" />
              </motion.div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Hola, soy <span className="text-gradient-electric">{PERSONAL_INFO.name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 font-medium leading-snug">
                  Desarrollador Full Stack / Backend Developer Junior
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-blue-400">
                    Python / Django
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-400">
                    React & JS
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-400">
                    PostgreSQL / Supabase
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2"
            >
              {/* Button 1: Ver Proyectos */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Ver Proyectos</span>
              </a>

              {/* Button 2: Descargar CV */}
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-200 hover:bg-purple-600/30 font-semibold text-xs transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Descargar CV</span>
              </a>

              {/* Button 3: Contactarme */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-slate-100 hover:bg-white/15 font-semibold text-xs border border-white/10 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Contactarme</span>
              </a>

              {/* Recruiter Drawer Quick View */}
              <button
                onClick={onOpenRecruiterDrawer}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Reclutadores</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Eye-Catching Side Presentation 3D Motion Glass Card */}
          <motion.div 
            style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 text-left transform-gpu perspective-1000"
          >
            <div className="relative group p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-blue-500/30 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 hover:border-blue-500/60 transition-all duration-300">
              
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span>Perfil & Propuesta Técnica</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  INACAP Titulado / En Curso
                </span>
              </div>

              {/* Exact User Bio Text Highlighted */}
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3 font-sans">
                <p>
                  🎓 <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 font-extrabold">Técnico Superior Analista Programador</strong> y estudiante de <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-extrabold">Ingeniería en Informática en INACAP</strong>, con enfoque en desarrollo <strong className="text-emerald-400 font-bold">Backend y Full Stack Junior</strong>.
                </p>
                <p>
                  ⚡ <strong className="text-blue-300 font-bold">Experiencia práctica</strong> desarrollando aplicaciones web con <strong className="text-indigo-300 font-semibold">Python, Django REST Framework, React y JavaScript</strong>, incluyendo creación de <strong className="text-purple-300 font-semibold">APIs REST</strong>, integración frontend-backend, manejo de bases de datos y administración de plataformas web en hosting <strong className="text-cyan-300 font-semibold">cPanel / WordPress</strong>.
                </p>
                <p>
                  💡 Interesado en crear <strong className="text-emerald-300 font-semibold">soluciones tecnológicas eficientes</strong>, mejorar procesos mediante software y seguir creciendo profesionalmente dentro de <strong className="text-slate-100 font-bold">equipos de desarrollo TI</strong>, aportando conocimientos en programación, bases de datos e infraestructura.
                </p>
              </div>

              {/* Bottom Key Badges */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-blue-400" /> APIs RESTful
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  React SPA
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  PostgreSQL
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  cPanel / DNS
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Targeted Tech & HR Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            Orientado a oportunidades Junior en Backend, Full Stack & Soporte Técnico Web
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 text-xs font-semibold text-slate-400">
            <span className="hover:text-blue-400 transition-colors">Python / Django Backend</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-400 transition-colors">React SPA / APIs REST</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-400 transition-colors">Bases de Datos PostgreSQL & SQL</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-blue-400 transition-colors">Chile & Remoto</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
