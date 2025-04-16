
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-32 px-6 md:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <p className="text-highlight font-mono mb-6 animate-fade-in">Hi, my name is</p>
        <h1 className="text-4xl md:text-7xl font-bold text-lightestSlate mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
          Dutt Mistry.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold text-slate mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          I build things for the web.
        </h2>
        <p className="text-slate max-w-xl text-lg mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
          I'm a software developer specializing in building exceptional digital experiences.
          Currently focused on building accessible, human-centered products using modern web technologies.
        </p>
        <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Button asChild className="btn-primary group">
            <a href="#projects">
              Check out my projects
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
