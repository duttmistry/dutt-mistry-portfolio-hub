
import React from 'react';
import { Code, Database, BarChart, Layout, Terminal, Server, Users, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: "Frontend Technologies",
      icon: <Layout className="h-6 w-6 text-highlight" />,
      skills: ["React JS", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="h-6 w-6 text-highlight" />,
      skills: ["Node.js", "Express", "REST APIs", "MongoDB"]
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-highlight" />,
      skills: ["SQL", "MongoDB", "Firebase"]
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-6 w-6 text-highlight" />,
      skills: ["Git", "GitHub", "VS Code", "npm", "Webpack", "Babel"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <Code className="h-6 w-6 text-highlight" />,
      skills: ["Redux", "Chart.js", "MSAL Authentication", "Material UI"]
    },
    {
      title: "Other Skills",
      icon: <Users className="h-6 w-6 text-highlight" />,
      skills: ["Responsive Design", "UI/UX Design Principles", "Agile/Scrum", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-lightNavy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">02.</span> Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-navy p-6 rounded-md border border-lightestNavy hover:border-highlight transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3 text-lightestSlate">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-lightestNavy text-lightSlate px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-lightestSlate mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["React JS", "Angular", "JavaScript", "TypeScript", "SQL"].map(skill => (
              <div key={skill} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-highlight to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-navy px-6 py-4 rounded-lg border border-lightestNavy">
                  <span className="text-lightestSlate font-semibold">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
