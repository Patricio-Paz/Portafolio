export type ThemeMode = 'dark' | 'light';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'Senior' | 'Avanzado' | 'Intermedio';
  years: number;
  lastProject: string;
  icon: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & Optimization' | 'SaaS Platform';
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
    pipeline: string;
  };
  repoUrl: string;
  demoUrl: string;
  metrics: { label: string; value: string }[];
  images: { url: string; caption: string }[];
  videoUrl?: string;
  documentation: {
    overview: string;
    apiEndpoints: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; path: string; description: string }[];
    keyAlgorithms: string[];
  };
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'internship' | 'project' | 'course' | 'certification' | 'work';
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  badgeText?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: 'Práctica Profesional' | 'Full Time' | 'Consultor Freelance';
  period: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  results: { metric: string; detail: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: 'fullstack' | 'frontend' | 'backend' | 'consulting' | 'hire';
  message: string;
}

export interface ContainerSlot {
  id: string;
  row: number;
  col: number;
  containerId?: string;
  status: 'empty' | 'occupied' | 'reserved' | 'ai-optimal';
  destination?: string;
  weight?: string;
  priority?: 'high' | 'medium' | 'low';
}
