
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-navy border-t border-lightestNavy">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate text-sm">
          <span className="block mb-2">Designed & Built by Dutt Mistry</span>
          <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
