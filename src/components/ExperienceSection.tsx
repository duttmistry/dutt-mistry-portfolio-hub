
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Cybercom Creation",
      position: "Software Developer",
      date: "March 2021 - Present",
      location: "Ahmedabad, India",
      responsibilities: [
        "Led development of responsive web applications using React and Angular",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented user authentication using MSAL Authentication",
        "Developed RESTful APIs and integrated with frontend applications",
        "Participated in code reviews and maintained coding standards"
      ]
    },
    {
      company: "Cybercom Creation",
      position: "Software Development Intern",
      date: "July 2020 - February 2021",
      location: "Ahmedabad, India",
      responsibilities: [
        "Assisted in developing web applications using JavaScript frameworks",
        "Learned and implemented best practices for frontend development",
        "Worked on UI improvements for existing applications",
        "Participated in agile development processes",
        "Gained experience with version control using Git"
      ]
    },
    {
      company: "Maxgen Technologies",
      position: "Web Development Intern",
      date: "January 2020 - June 2020",
      location: "Ahmedabad, India",
      responsibilities: [
        "Built dynamic web pages using HTML, CSS, and JavaScript",
        "Learned fundamentals of responsive web design",
        "Assisted senior developers with debugging and testing",
        "Contributed to frontend feature implementation",
        "Gained experience with basic database operations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading">
          <span className="text-highlight font-mono mr-2">03.</span> Work Experience
        </h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col mb-6">
              {experiences.map((exp, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`justify-start px-4 py-3 text-left border-b-2 md:border-l-2 md:border-b-0 border-lightestNavy ${
                    activeTab === index 
                      ? 'text-highlight border-highlight bg-lightNavy/30' 
                      : 'text-slate hover:text-highlight hover:bg-lightNavy/10'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="md:w-3/4 bg-lightNavy/20 p-6 rounded-md border border-lightestNavy">
            <div>
              <h3 className="text-xl font-semibold text-lightestSlate">
                {experiences[activeTab].position} <span className="text-highlight">@ {experiences[activeTab].company}</span>
              </h3>
              
              <div className="flex items-center gap-4 mt-2 text-slate text-sm">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1 text-highlight" />
                  {experiences[activeTab].date}
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1 text-highlight" />
                  {experiences[activeTab].location}
                </div>
              </div>
              
              <ul className="mt-6 space-y-4">
                {experiences[activeTab].responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-3 mt-1">▹</span>
                    <span className="text-slate">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
