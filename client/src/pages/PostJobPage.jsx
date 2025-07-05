import React, { useState } from "react";
import { Link } from "react-router";

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-primary-light/5 min-h-screen py-6">
      <div className="container mx-auto px-2 sm:px-4 max-w-2xl">
        <div className="bg-primary py-5 px-6 rounded-t-lg">
          <h1 className="text-2xl font-semibold text-white">Post a New Job</h1>
        </div>
        <div className="bg-white rounded-b-lg shadow-sm p-5 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-base font-medium text-primary-dark mb-1 block">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-base font-medium text-primary-dark mb-1 block">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-base font-medium text-primary-dark mb-1 block">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
                placeholder="Enter location"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-base font-medium text-primary-dark mb-1 block">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-primary-light rounded-md text-base font-normal text-gray-700 focus:outline-none focus:border-primary"
                rows="5"
                placeholder="Enter job description"
                required
              ></textarea>
            </div>
            <div className="flex justify-end gap-3">
              <Link
                to="/"
                className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-md hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-3 sm:px-4 py-1 sm:py-2 bg-primary text-white text-base font-semibold rounded-md hover:bg-primary-dark transition duration-200"
              >
                Submit Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;
