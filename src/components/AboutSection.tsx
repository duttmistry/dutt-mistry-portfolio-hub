
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm Dutt, a software developer passionate about creating efficient, user-friendly applications 
                that solve real-world problems.
              </p>
              <p>
                My journey in software development began during my university studies, where I discovered my 
                enthusiasm for creating web applications. Since then, I've been continuously learning and improving 
                my craft, specializing in modern JavaScript frameworks and libraries.
              </p>
              <p>
                I enjoy working on both frontend and backend technologies, with a particular focus on React 
                and Angular for building responsive user interfaces. My experience at Cybercom Creation has 
                given me valuable insights into developing enterprise-level applications, while my 
                internships provided a solid foundation in software development practices.
              </p>
              <p>
                When I'm not coding, you might find me exploring new technologies, contributing to open-source 
                projects, or brushing up on the latest industry trends.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-highlight z-10">
              <div className="absolute inset-0 bg-highlight opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <img 
                src="https://placehold.co/400x500/112240/e6f1ff?text=Dutt+Mistry" 
                alt="Dutt Mistry" 
                className="w-full h-auto filter grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 border-2 border-highlight h-full w-full rounded-md z-0 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
