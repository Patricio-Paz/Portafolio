import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { TimelineSection } from './components/timeline/TimelineSection';
import { ExperienceSection } from './components/experience/ExperienceSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ContactSection } from './components/contact/ContactSection';
import { RecruiterDrawer } from './components/recruiter/RecruiterDrawer';
import { Footer } from './components/layout/Footer';

export const AppContent: React.FC = () => {
  const [recruiterDrawerOpen, setRecruiterDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Navigation */}
      <Navbar onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection onOpenRecruiterDrawer={() => setRecruiterDrawerOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Drawer Quick View */}
      <RecruiterDrawer
        isOpen={recruiterDrawerOpen}
        onClose={() => setRecruiterDrawerOpen(false)}
      />

    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
