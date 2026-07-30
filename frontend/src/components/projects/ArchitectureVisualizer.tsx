import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  ArrowRight, 
  Layers,
  Terminal
} from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('backend');

  const nodes = [
    {
      id: 'frontend',
      title: '1. React 19 Frontend (SPA)',
      tech: 'React 19, TypeScript, Tailwind, Framer Motion',
      role: 'Capa de Presentación & Renderizado Reactivo',
      description: 'Interfaz modular SPA optimizada con Code Splitting, mapas 2D interactivos y comunicación vía API REST JSON.',
      color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300'
    },
    {
      id: 'gateway',
      title: '2. API Gateway & Security',
      tech: 'Django REST Framework, JWT, CORS, Rate Limit',
      role: 'Control de Acceso & Autenticación',
      description: 'Validación estricta de esquemas, tokens JWT persistentes y throttlers para prevenir ataques DDoS.',
      color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300'
    },
    {
      id: 'backend',
      title: '3. Core Business & AI Engine',
      tech: 'Python 3.12, Django Services & Repositories',
      role: 'Motor de Asignación y Cálculo Logístico',
      description: 'Algoritmo heurístico RMC que evalúa prioridad, peso, buque de destino e índice de apilamiento en milisegundos.',
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300'
    },
    {
      id: 'database',
      title: '4. PostgreSQL Storage Layer',
      tech: 'PostgreSQL, Spatial Indexing, JSONB',
      role: 'Persistencia & Consultas Geométricas',
      description: 'Base de datos relacional con vistas materializadas para cálculo de KPIs y tablas de auditoría de contenedores.',
      color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300'
    },
    {
      id: 'devops',
      title: '5. Docker & Cloud Deploy',
      tech: 'Docker Compose, Vercel, Render',
      role: 'Infraestructura Portátil & CI/CD',
      description: 'Contenedores multi-stage livianos con despliegue automatizado vía GitHub Actions.',
      color: 'from-pink-500/20 to-rose-500/20 border-pink-500/40 text-pink-300'
    }
  ];

  const selectedNodeObj = nodes.find(n => n.id === activeNode);

  return (
    <div className="bg-[#06070a] p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
      
      {/* Visualizer Title */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" /> Diagrama de Arquitectura de Software
          </h4>
          <p className="text-xs text-slate-400">
            Haz clic en los bloques para inspeccionar la interacción entre capas.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
          Decoupled Full-Stack Architecture
        </span>
      </div>

      {/* Node Flow Map */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 bg-gradient-to-br ${node.color} ${
                isSelected ? 'ring-2 ring-blue-400 scale-[1.03] shadow-lg' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <span className="text-[11px] font-mono font-bold block mb-2">{node.title}</span>
              <span className="text-[10px] font-mono opacity-80 block">{node.tech}</span>
            </button>
          );
        })}
      </div>

      {/* Inspector Details for Selected Node */}
      {selectedNodeObj && (
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between">
            <h5 className="text-sm font-bold text-slate-200 font-mono">
              {selectedNodeObj.title}
            </h5>
            <span className="text-xs text-blue-400 font-mono">{selectedNodeObj.role}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {selectedNodeObj.description}
          </p>
        </div>
      )}

    </div>
  );
};
