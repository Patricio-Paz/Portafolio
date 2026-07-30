import { ContainerSlot } from '../types/portfolio';

export const INITIAL_YARD_SLOTS: ContainerSlot[] = [
  // Block A - Row 1
  { id: 'slot-A1', row: 1, col: 1, containerId: 'MSC-8942-CL', status: 'occupied', destination: 'Valparaíso - Buque MSC Maya', weight: '24.5 Tn', priority: 'high' },
  { id: 'slot-A2', row: 1, col: 2, containerId: 'HAP-3011-CL', status: 'occupied', destination: 'San Antonio - Hapag Lloyd', weight: '18.2 Tn', priority: 'medium' },
  { id: 'slot-A3', row: 1, col: 3, status: 'empty' },
  { id: 'slot-A4', row: 1, col: 4, containerId: 'CMA-9012-CL', status: 'occupied', destination: 'Rotterdam - CMA CGM', weight: '28.0 Tn', priority: 'high' },
  { id: 'slot-A5', row: 1, col: 5, status: 'empty' },
  { id: 'slot-A6', row: 1, col: 6, status: 'reserved' },

  // Block B - Row 2
  { id: 'slot-B1', row: 2, col: 1, status: 'empty' },
  { id: 'slot-B2', row: 2, col: 2, containerId: 'ONE-4421-JP', status: 'occupied', destination: 'Tokyo - ONE Express', weight: '21.0 Tn', priority: 'medium' },
  { id: 'slot-B3', row: 2, col: 3, status: 'empty' },
  { id: 'slot-B4', row: 2, col: 4, status: 'empty' },
  { id: 'slot-B5', row: 2, col: 5, containerId: 'EVER-7710-TW', status: 'occupied', destination: 'Long Beach - Evergreen', weight: '30.1 Tn', priority: 'high' },
  { id: 'slot-B6', row: 2, col: 6, status: 'empty' },

  // Block C - Row 3
  { id: 'slot-C1', row: 3, col: 1, containerId: 'MAEU-1092-DK', status: 'occupied', destination: 'Hamburg - Maersk', weight: '22.4 Tn', priority: 'medium' },
  { id: 'slot-C2', row: 3, col: 2, status: 'empty' },
  { id: 'slot-C3', row: 3, col: 3, status: 'empty' },
  { id: 'slot-C4', row: 3, col: 4, containerId: 'COS-5541-CN', status: 'occupied', destination: 'Shanghai - COSCO', weight: '26.8 Tn', priority: 'high' },
  { id: 'slot-C5', row: 3, col: 5, status: 'empty' },
  { id: 'slot-C6', row: 3, col: 6, status: 'empty' },

  // Block D - Row 4
  { id: 'slot-D1', row: 4, col: 1, status: 'empty' },
  { id: 'slot-D2', row: 4, col: 2, status: 'empty' },
  { id: 'slot-D3', row: 4, col: 3, containerId: 'HMM-2209-KR', status: 'occupied', destination: 'Busan - HMM Korea', weight: '19.5 Tn', priority: 'low' },
  { id: 'slot-D4', row: 4, col: 4, status: 'empty' },
  { id: 'slot-D5', row: 4, col: 5, status: 'empty' },
  { id: 'slot-D6', row: 4, col: 6, status: 'empty' }
];

export const INCOMING_TEST_CONTAINER = {
  containerId: 'SCL-2026-AI',
  destination: 'Puerto de Antofagasta (Buque Polar Star)',
  weight: '23.8 Tn',
  priority: 'high' as const,
  imoClass: 'Estándar Seco (ISO 20ft)',
  targetSlotId: 'slot-B3'
};
