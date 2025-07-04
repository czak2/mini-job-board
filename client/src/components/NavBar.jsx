import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-primary-light transition duration-300"
        >
          BlazeHire
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/post-job"
            className="px-4 py-2 bg-white text-primary font-semibold rounded-md hover:bg-primary-light hover:text-secondary transition duration-300 shadow-sm"
          >
            Post a Job
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
