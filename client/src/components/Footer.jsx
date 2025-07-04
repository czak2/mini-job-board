import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">BlazeHire</h3>
            <p className="text-primary-light mt-1">Ignite your career today</p>
          </div>
        </div>
        <div className="mt-6 text-center text-primary-light text-sm">
          © 2025 BlazeHire. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
