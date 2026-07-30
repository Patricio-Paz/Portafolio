import React, { useState } from 'react';
import { INITIAL_YARD_SLOTS, INCOMING_TEST_CONTAINER } from '../../data/smartYardData';
import { ContainerSlot } from '../../types/portfolio';
import { 
  Box, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Cpu, 
  Layers, 
  Activity, 
  Terminal 
} from 'lucide-react';

export const SmartYardDemo: React.FC = () => {
  const [slots, setSlots] = useState<ContainerSlot[]>(INITIAL_YARD_SLOTS);
  const [selectedSlot, setSelectedSlot] = useState<ContainerSlot | null>(INITIAL_YARD_SLOTS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [aiOptimalSlotId, setAiOptimalSlotId] = useState<string | null>(null);
  const [apiResponseJson, setApiResponseJson] = useState<string | null>(null);

  const handleRunAiAllocation = () => {
    setIsSimulating(true);
    setAiOptimalSlotId(null);
    setApiResponseJson(null);

    setTimeout(() => {
      const optimalId = INCOMING_TEST_CONTAINER.targetSlotId;
      setAiOptimalSlotId(optimalId);

      // Update slot in matrix
      setSlots(prev => prev.map(s => {
        if (s.id === optimalId) {
          return {
            ...s,
            containerId: INCOMING_TEST_CONTAINER.containerId,
            status: 'ai-optimal',
            destination: INCOMING_TEST_CONTAINER.destination,
            weight: INCOMING_TEST_CONTAINER.weight,
            priority: INCOMING_TEST_CONTAINER.priority
          };
        }
        return s;
      }));

      const target = slots.find(s => s.id === optimalId);
      if (target) {
        setSelectedSlot({
          ...target,
          containerId: INCOMING_TEST_CONTAINER.containerId,
          status: 'ai-optimal',
          destination: INCOMING_TEST_CONTAINER.destination,
          weight: INCOMING_TEST_CONTAINER.weight,
          priority: INCOMING_TEST_CONTAINER.priority
        });
      }

      setApiResponseJson(JSON.stringify({
        status: "success",
        timestamp: new Date().toISOString(),
        algorithm: "SmartYard_RMC_v2",
        assigned_slot: {
          block: "B",
          row: 2,
          col: 3,
          slot_id: optimalId
        },
        metrics: {
          rehandling_coef: 0.04,
          stack_safety_score: "99.8%",
          estimated_dwell_hours: 14.5
        }
      }, null, 2));

      setIsSimulating(false);
    }, 1200);
  };

  const handleResetYard = () => {
    setSlots(INITIAL_YARD_SLOTS);
    setAiOptimalSlotId(null);
    setApiResponseJson(null);
    setSelectedSlot(INITIAL_YARD_SLOTS[0]);
  };

  const getSlotColor = (slot: ContainerSlot) => {
    if (slot.id === aiOptimalSlotId) {
      return 'bg-emerald-500/30 border-emerald-400 text-emerald-300 ring-2 ring-emerald-400 animate-pulse';
    }
    switch (slot.status) {
      case 'occupied':
        return 'bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600/30';
      case 'reserved':
        return 'bg-purple-600/20 border-purple-500/40 text-purple-300';
      case 'empty':
        return 'bg-white/5 border-white/10 text-slate-500 hover:bg-white/10 hover:border-slate-400';
      case 'ai-optimal':
        return 'bg-emerald-500/30 border-emerald-400 text-emerald-300 ring-2 ring-emerald-400';
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-blue-500/20 shadow-2xl space-y-6">
      
      {/* Interactive Canvas Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Simulador Interactivo en Tiempo Real</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            SmartYard TPA: Mapa de Yarda 2D & Motor IA
          </h3>
          <p className="text-xs text-slate-400">
            Haz clic en las celdas del patio para inspeccionar la carga o ejecuta el algoritmo de asignación de contenedores en vivo.
          </p>
        </div>

        {/* Simulator Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleRunAiAllocation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            <Sparkles className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'Calculando Slot...' : 'Simular Contenedor IA'}</span>
          </button>

          <button
            onClick={handleResetYard}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Reiniciar Mapa"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Grid Canvas & Detail Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 2D Interactive Grid Map */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>PATIO SUR (Bloques A - D)</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-blue-500/50 inline-block"></span> Ocupado</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500/50 inline-block"></span> IA Asignado</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-white/10 inline-block"></span> Disponible</span>
            </div>
          </div>

          {/* Grid Layout: 4 Rows x 6 Cols */}
          <div className="grid grid-cols-6 gap-2 bg-[#06070a] p-4 rounded-2xl border border-white/10">
            {slots.map((slot) => {
              const isSelected = selectedSlot?.id === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot)}
                  className={`h-20 sm:h-24 rounded-xl border p-2 flex flex-col justify-between transition-all duration-200 ${getSlotColor(slot)} ${
                    isSelected ? 'ring-2 ring-blue-400 scale-[1.02]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono">
                    <span className="font-bold">{slot.id.replace('slot-', '')}</span>
                    {slot.priority && (
                      <span className={`w-2 h-2 rounded-full ${
                        slot.priority === 'high' ? 'bg-red-400' : 'bg-amber-400'
                      }`} />
                    )}
                  </div>

                  <div className="flex flex-col items-center justify-center my-auto">
                    <Box className="w-5 h-5 opacity-80" />
                    <span className="text-[10px] font-mono font-medium truncate max-w-full">
                      {slot.containerId || 'Vacío'}
                    </span>
                  </div>

                  <div className="text-[9px] font-mono text-right opacity-70">
                    {slot.weight || '0 Tn'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Inspector Panel & Live REST API Payload */}
        <div className="space-y-4">
          
          {/* Selected Slot Meta */}
          <div className="bg-[#06070a] p-5 rounded-2xl border border-white/10 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between font-mono">
              <span>Inspector de Carga</span>
              <span className="text-blue-400">{selectedSlot?.id}</span>
            </h4>

            {selectedSlot ? (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">ID Contenedor:</span>
                  <span className="font-mono font-bold text-slate-200">{selectedSlot.containerId || 'Slot Disponible'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">Estado Slot:</span>
                  <span className="font-mono capitalize text-blue-400">{selectedSlot.status}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-500">Destino / Buque:</span>
                  <span className="text-slate-300 truncate max-w-[150px]">{selectedSlot.destination || 'N/A'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Peso Bruto:</span>
                  <span className="font-mono text-emerald-400">{selectedSlot.weight || '0 Tn'}</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-500 py-4 text-center">Selecciona una casilla de la yarda.</div>
            )}
          </div>

          {/* Live REST API Response Json Simulation */}
          <div className="bg-[#06070a] p-4 rounded-2xl border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Terminal className="w-3.5 h-3.5" /> POST /api/v1/containers/allocate/
              </span>
              <span className="text-emerald-400 font-bold">200 OK</span>
            </div>
            <pre className="text-[10px] font-mono text-slate-300 bg-black/50 p-3 rounded-xl overflow-x-auto max-h-36 border border-white/5">
              {apiResponseJson || `{\n  "status": "ready",\n  "message": "Presiona 'Simular Contenedor IA' para ejecutar algoritmo REST."\n}`}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
};
