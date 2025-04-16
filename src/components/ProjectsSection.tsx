import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const featuredProjects = [
    {
      title: "Vision Unnati App",
      description: "A comprehensive employee performance tracking application that helps organizations monitor and improve workforce productivity. The app provides insightful analytics and visualization for better decision-making.",
      technologies: ["Angular", "Chart.js", "MSAL Authentication", "Bootstrap", "SQL"],
      features: [
        "Role-based access control for managers and employees",
        "Interactive dashboards with performance metrics",
        "Real-time data visualization using Chart.js",
        "Secure authentication using MSAL",
        "Responsive design for mobile and desktop"
      ],
      imageUrl: "https://placehold.co/600x400/112240/e6f1ff?text=Vision+Unnati+App",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "NP-Tracker",
      description: "A project and task management tool designed to streamline workflow and enhance team collaboration. NP-Tracker helps teams organize tasks, set priorities, and track progress effectively.",
      technologies: ["Angular", "TypeScript", "Bootstrap", "SQL", "Node.js"],
      features: [
        "Kanban board for visual task management",
        "Task assignment and priority setting",
        "Progress tracking with status updates",
        "Team collaboration features",
        "Customizable project templates"
      ],
      imageUrl: "https://placehold.co/600x400/112240/e6f1ff?text=NP-Tracker",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const otherProjects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built to showcase my projects and skills.",
      technologies: ["React", "TailwindCSS", "TypeScript"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecast weather data for cities worldwide.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart management, and checkout process.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-lightNavy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">04.</span> Projects
        </h2>
        
        {/* Featured Projects */}
        <div className="mt-12 space-y-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="relative grid md:grid-cols-12 gap-4 items-center"
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Project Image (Left on Even, Right on Odd) */}
              <div 
                className={`md:col-span-7 relative group ${
                  index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'
                }`}
              >
                <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-highlight opacity-20 group-hover:opacity-0 z-10 transition-opacity duration-300"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter group-hover:filter-none transition-all duration-300" 
                  />
                </div>
              </div>
              
              {/* Project Info (Right on Even, Left on Odd) */}
              <div className={`md:col-span-6 ${
                  index % 2 === 0 ? 'md:col-start-6 order-2' : 'order-2 md:order-1'
                }`}
              >
                <div className={`text-right ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                  <p className="text-highlight font-mono mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold text-lightestSlate mb-4">{project.title}</h3>
                </div>
                
                <div className={`bg-lightNavy p-6 rounded-md shadow-xl ${
                  index % 2 === 0 ? 'text-right' : 'md:text-left'
                }`}>
                  <p className="text-slate mb-4">{project.description}</p>
                  
                  <h4 className="text-lightestSlate font-semibold mb-2">Key Features:</h4>
                  <ul className={`mb-4 space-y-1 ${
                    index % 2 === 0 ? 'list-inside' : ''
                  }`}>
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-slate text-sm flex items-start">
                        <span className="text-highlight mr-2">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 mb-6 ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}>
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-sm font-mono text-lightSlate">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-4 ${
                    index % 2 === 0 ? 'justify-end' : ''
                  }`}>
                    <a href={project.links.github} aria-label="GitHub Repository" className="text-lightestSlate hover:text-highlight transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} aria-label="Live Demo" className="text-lightestSlate hover:text-highlight transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-lightestSlate text-center mb-12">
            Other Noteworthy Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-navy border border-lightestNavy hover:border-highlight transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="h-10 w-10 text-highlight" />
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a href={project.links.github} aria-label="GitHub Repository" className="text-lightSlate hover:text-highlight transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} aria-label="Live Demo" className="text-lightSlate hover:text-highlight transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-lightestSlate mb-2">{project.title}</h4>
                  <p className="text-slate mb-6">{project.description}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-lightestNavy/20 text-lightSlate border-lightestNavy">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
