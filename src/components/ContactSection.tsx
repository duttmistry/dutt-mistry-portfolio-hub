
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-highlight font-mono mb-2">05. What's Next?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-lightestSlate mb-6">Get In Touch</h2>
        
        <p className="text-slate mb-12">
          I'm currently open to new opportunities and collaborations. Whether you have a question, 
          job opportunity, or just want to say hello, I'll do my best to get back to you promptly!
        </p>
        
        <Button asChild className="btn-primary mb-16">
          <a href="mailto:contact@duttmistry.com">
            Say Hello
          </a>
        </Button>
        
        <div className="flex justify-center gap-8">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-highlight transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightSlate hover:text-highlight transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:contact@duttmistry.com"
            className="text-lightSlate hover:text-highlight transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a 
            href="/dutt_mistry_cv.pdf"
            download="dutt_mistry_cv.pdf"
            className="text-lightSlate hover:text-highlight transition-colors"
            aria-label="Download Resume"
          >
            <Download size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
